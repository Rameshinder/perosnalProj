#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

. scripts/functions.sh

STASH_USER='csp-buildbot'
STASH_PASSWORD='cspT-1000'

if [[ ! -d '.git' ]]; then
  1>&2 echo "The current directory must be the root of a repository, but this file does not exist: $(pwd)/.git"
  exit 1
fi

IFS=$'\n' GIT_REMOTES=($(git remote))

if [[ "${#GIT_REMOTES[@]}" < 1 ]]; then
  1>&2 echo "The repository does not have any remotes set. This is required for automatic version tagging and correctly reading existing tags. Please ensure a git remote is set."
  exit 1
fi

if [[ "${#GIT_REMOTES[@]}" > 1 ]]; then
  1>&2 echo "The repository has multiple remotes set and this script does not support disambiguation of git remotes. If you think you have a good reason to set multiple remotes, please speak to the owner of this script."
  exit 1
fi

GIT_REMOTE1="${GIT_REMOTES[0]}"
BRANCH_NAME="${bamboo_planRepository_branchName}"
BUILD_NUMBER="${bamboo_buildNumber}"
VERSION=""
SHOULD_GIT_TAG=0
SHOULD_BUMP_VERSION=1

if [[ "$BRANCH_NAME" == 'master' ]]; then
  VERSION_TAG=
  SHOULD_GIT_TAG=1
  SHOULD_BUMP_VERSION=0
  echo 'SNAPSHOT=false' >> env.vars
elif [[ "$BRANCH_NAME" == 'develop' ]]; then
  VERSION_TAG='dev'
  SHOULD_GIT_TAG=1
  echo 'SNAPSHOT=false' >> env.vars
elif [[ "$BRANCH_NAME" =~ ^release/(.*)$ ]]; then
  VERSION="${BASH_REMATCH[1]}"

  if [[ ! "$VERSION" =~ ^[0-9]{1,}(\.[0-9]{1,}){1,2}$ ]]; then
    1>&2 echo "The branch $BRANCH_NAME has an illegal name. Is there a spelling error in the branch name? Release branches should have a name of the form \"release/1.0.0\"."
    exit 1
  fi

  VERSION=$(ensure_version_has_three_components "$VERSION")
  VERSION_TAG='rc'
  SHOULD_GIT_TAG=1
  SHOULD_BUMP_VERSION=0
  echo 'SNAPSHOT=false' >> env.vars
elif [[ "$BRANCH_NAME" == 'dev' ]] || [[ "$BRANCH_NAME" == 'rc' ]]; then
  # These branch names are invalid, so escape them.
  VERSION_TAG="_$BRANCH_NAME"
  echo 'SNAPSHOT=false' >> env.vars
else
  GITHASH=$(git log --pretty=format:'%h' -n 1)
  VERSION_TAG="-SNAPSHOT+${GITHASH}"
  echo 'SNAPSHOT=true' >> env.vars
fi

GIT_TAGS_CONCATENATED=$(git tag)
IFS=$'\n' GIT_TAGS=($GIT_TAGS_CONCATENATED)
I="${#GIT_TAGS[@]}"
VERSION_FROM_GIT_TAGS=

while [[ "$I" > 0 ]]; do
  (( I=I-1 ))
  GIT_TAG="${GIT_TAGS[$I]}"

  if [[ "$GIT_TAG" =~ ^v([0-9]{1,}(\.[0-9]{1,}){1,2})-[^\.]{1,}\.[0-9]{1,}$ ]]; then
    VERSION_FROM_GIT_TAGS="${BASH_REMATCH[1]}"
    break
  fi
done

echo "Version from git tags: $VERSION_FROM_GIT_TAGS"

if [[ -z "$VERSION" ]]; then
  if [[ -z "$VERSION_FROM_GIT_TAGS" ]]; then
    VERSION='1.0.0'
  else
    VERSION=$(ensure_version_has_three_components "$VERSION_FROM_GIT_TAGS")
  fi
fi

if [[ "$SHOULD_BUMP_VERSION" != 0 ]]; then
  # Bump the version because this is not a release branch.
  VERSION=$(version_increment_minor "$VERSION")
fi

FULL_VERSION="$VERSION"

if [[ ! -z "$VERSION_TAG" ]]; then
 FULL_VERSION="$FULL_VERSION-$VERSION_TAG-$BUILD_NUMBER"
fi

if [[ "$SHOULD_GIT_TAG" != 0 ]]; then
  GIT_REMOTE1_URL=$(git remote get-url "$GIT_REMOTE1")
  PARSE_URL_REGEX='^([^:]*)://(([^@:/?]*)@)?([^/?:]{1,})(:[0-9]{1,})?((/[^/?]*)*)'

  if [[ ! "$GIT_REMOTE1_URL" =~ $PARSE_URL_REGEX ]]; then
    1>&2 echo "An error occured while parsing the URL of git remote $GIT_REMOTE1: $GIT_REMOTE1_URL"
    exit 1
  fi

  GIT_REMOTE1_URL_SCHEME="${BASH_REMATCH[1]}"
  GIT_REMOTE1_URL_AUTHORITY="${BASH_REMATCH[3]}"
  GIT_REMOTE1_URL_HOST="${BASH_REMATCH[4]]}"
  GIT_REMOTE1_URL_PORTSTR="${BASH_REMATCH[5]}"
  GIT_REMOTE1_URL_PATH="${BASH_REMATCH[6]}"
  # Remove the authority from the URL so it's sure to not interfere with the settings in .netrc
  GIT_REMOTE1_URL="$GIT_REMOTE1_URL_SCHEME://${GIT_REMOTE1_URL_HOST}${GIT_REMOTE1_URL_PORTSTR}${GIT_REMOTE1_URL_PATH}"

  git remote set-url "$GIT_REMOTE1" "$GIT_REMOTE1_URL"
  git config user.email 'csp-buildbot@anz.com'
  git config user.name 'CSP Build Bot'

  cat <<- EOF > "$HOME/.netrc"
  machine $GIT_REMOTE1_URL
  login $STASH_USER
  password $STASH_PASSWORD
EOF
fi

echo "$FULL_VERSION: $SHOULD_GIT_TAG"

# Update gradle.properties if possible
if [[ -f "gradle.properties" ]]; then
  sed -i".bak" '/version=.*$/d' gradle.properties
  echo "version=${FULL_VERSION}" >> gradle.properties
fi

# Add version to environment variable file for Bamboo - remove if already exists
echo "VERSION=${FULL_VERSION}" >> env.vars
