#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

. scripts/init.sh

# Clear old artifacts
if [[ -d "build" ]]; then
    rm -r build
fi

if [[ -d "snapshot" ]]; then
    rm -r snapshot
fi

if [[ -d "release" ]]; then
    rm -r release
fi

# Yarn install
yarn cache clean
yarn --pure-lockfile --offline

# Run standard
if ! yarn standard ; then
    echo "Standard failed"
    exit 1
fi

# Run jest tests
if ! yarn jest ; then
    echo "Not all tests pass or coverage threshold has failed"
    exit 1
fi

# Read env if exists
while read -r vars; do
  # shellcheck disable=SC2163
  export "$vars"
done < env.vars

if [[ "$VERSION" == "" ]]; then
    echo "No version found failed"
    exit 1
fi

# Set NODE_ENV and build
export NODE_ENV=production
yarn build

# Required Variables
PROJECT_SUBDIRECTORY=$(basename "$(pwd)")
PROJECT_SUBDIRECTORY_LOWER=$(echo "${PROJECT_SUBDIRECTORY}" | awk '{print tolower($0)}')
DOCKER_VALID_VERSION=$(echo "${VERSION}" | sed -e 's/[^A-Za-z0-9._-]/-/g')
VERSION_LOWER=$(echo "${DOCKER_VALID_VERSION}" | awk '{print tolower($0)}')

# Update Dockerfile
echo "Updating docker file: $DOCKERFILE"
sed -i "s#{PORT}#$PORT#g" "$DOCKERFILE"
sed -i "s#{APP_NAME}#$APP_NAME#g" "$DOCKERFILE"

# Docker Image Registries
DOCKER_REGISTRY_TAG="csp-docker-registry.service.dev:5000/anz/${APP_NAME}/ui:${DOCKER_VALID_VERSION}"
#ARTIFACTORY_RELEASE_DEV_TAG="dcartifactory.service.dev:5000/anz/csp-releases/ui/${PROJECT_SUBDIRECTORY_LOWER}/${VERSION_LOWER}-dev.${bamboo_buildNumber}:latest"
#ARTIFACTORY_RELEASE_RC_TAG="dcartifactory.service.dev:5000/anz/csp-releases/ui/${PROJECT_SUBDIRECTORY_LOWER}/${VERSION_LOWER}-rc.${bamboo_buildNumber}:latest"
#ARTIFACTORY_SNAPSHOT_TAG="dcartifactory.service.dev:5000/anz/csp-snapshots/ui/${PROJECT_SUBDIRECTORY_LOWER}/${VERSION_LOWER}.${bamboo_buildNumber}:latest"
ARTIFACTORY_RELEASE_DEV_TAG="dcartifactory.service.dev:5100/anz/csp-releases/ui/${PROJECT_SUBDIRECTORY_LOWER}/${VERSION_LOWER}-dev:latest"
ARTIFACTORY_RELEASE_RC_TAG="dcartifactory.service.dev:5100/anz/csp-releases/ui/${PROJECT_SUBDIRECTORY_LOWER}/${VERSION_LOWER}-rc:latest"
ARTIFACTORY_SNAPSHOT_TAG="dcartifactory.service.dev:5100/anz/csp-snapshots/ui/${PROJECT_SUBDIRECTORY_LOWER}/${VERSION_LOWER}:latest"

# Build docker image and tag
docker build -t "${DOCKER_REGISTRY_TAG}" .

# Docker push
docker push "${DOCKER_REGISTRY_TAG}"

# Push Docker Image to Release or Snapshot
if [[ "${bamboo_planRepository_1_branch}" =~ ^release/.*$ ]]; then
  docker tag "${DOCKER_REGISTRY_TAG}" "${ARTIFACTORY_RELEASE_RC_TAG}"
  docker push "${ARTIFACTORY_RELEASE_RC_TAG}"

elif [[ "${bamboo_planRepository_1_branch}" == "develop" ]]; then
  docker tag "${DOCKER_REGISTRY_TAG}" "${ARTIFACTORY_RELEASE_DEV_TAG}"
  docker push "${ARTIFACTORY_RELEASE_DEV_TAG}"

else
  docker tag "${DOCKER_REGISTRY_TAG}" "${ARTIFACTORY_SNAPSHOT_TAG}"
  docker push "${ARTIFACTORY_SNAPSHOT_TAG}"
fi

# Store image tag in env.vars
echo "DOCKER_IMAGE_TAG=${DOCKER_REGISTRY_TAG}" >> env.vars

# Create docker-compose.override.yml
cat > docker-compose.override.yml <<EOL
version: '2'

services:
  ${APP_NAME}:
    image: csp-docker-registry.service.dev:5000/anz/${APP_NAME}/ui:${DOCKER_VALID_VERSION}

EOL
