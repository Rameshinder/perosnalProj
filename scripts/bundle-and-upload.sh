#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

# This will bundle your package into a .zip file.
# Once the application has been bundled it will then upload the artifact to the appropriate repository in dcartifactory.
# Note: This is only for UI projects.

. scripts/init.sh

PROJECTSUBDIRECTORY=$(basename "$(pwd)")
PROJECTSUBDIRECTORYLOWER=$(echo "${PROJECTSUBDIRECTORY}" | awk '{print tolower($0)}')

NAME="BRANCH-${bamboo_planRepository_branch}-VERSION-${VERSION}.zip"
VALID_NAME=$(echo "$NAME" | sed -e 's/[^A-Za-z0-9._-]/-/g')

(
  cd build || exit
  zip -r ../"${VALID_NAME}" .
)

# Make directories for snapshot or release
if [[ ! -d "snapshot" ]]; then
    mkdir snapshot
fi

if [[ ! -d "release" ]]; then
    mkdir release
fi

if [[ "${SNAPSHOT}" == "true" ]]; then
    mv "${VALID_NAME}" snapshot
else
    mv "${VALID_NAME}" release
fi

FILENAME="$(basename "$(ls -td "${bamboo_build_working_directory}"/"${PROJECTSUBDIRECTORY}"/**/*.zip | head -1)")"

#if [[ "${bamboo_planRepository_1_branch}" =~ ^release/.*$ || "${bamboo_planRepository_1_branch}" == "develop" ]]; then
  # If the snapshot is made from release or develop branches it will be uploaded to csp-releases
#  echo "Pushing ui to csp-release"
#  curl -u "$bamboo_artifactoryUsername":"$bamboo_artifactoryPassword" -X PUT \
#    "https://dcartifactory.service.dev/artifactory/csp-releases/ui/${PROJECTSUBDIRECTORYLOWER}/${VERSION}/${FILENAME}" \
#    -T "${bamboo_build_working_directory}"/"${PROJECTSUBDIRECTORY}"/**/"${FILENAME}"
#else
  # If the snapshot is made from feature or bugfix branches it will be uploaded to csp-snapshots
#  echo "Pushing ui to csp-snapshots"
#  curl -u "$bamboo_artifactoryUsername":"$bamboo_artifactoryPassword" -X PUT \
#    "https://dcartifactory.service.dev/artifactory/csp-snapshots/ui/${PROJECTSUBDIRECTORYLOWER}/${VERSION}/${FILENAME}" \
#    -T "${bamboo_build_working_directory}"/"${PROJECTSUBDIRECTORY}"/**/"${FILENAME}"
#fi
