#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

# This file is to be sourced
export PWD
PWD=$(pwd)

# Export global variables
export APP_NAME="skeleton"
export PORT="80"
export DOCKERFILE="Dockerfile"

export NVM_NODEJS_ORG_MIRROR=https://dcartifactory.service.dev/artifactory/nodejs-dist
export NODEJS_ORG_MIRROR=https://dcartifactory.service.dev/artifactory/nodejs-dist
export NODE_TLS_REJECT_UNAUTHORIZED=0
export NPM_CONFIG_CA=""
export NPM_CONFIG_STRICT_SSL="false"
export BITBUCKET_HOST="dcstash.service.dev"
export BITBUCKET_URL="https://$BITBUCKET_HOST:8443/scm/csp/csp-skeleton-ui.git"

export JAVA7_HOME=/usr/lib/jvm/java-7-oracle/bin/java
export JAVA8_HOME=/usr/lib/jvm/java-8-oracle/bin/java

# Read env if exists
while read -r vars; do
  # shellcheck disable=SC2163
  export "$vars"
done < env.vars

# Check Bamboo variables exist
if [[ "${bamboo_artifactoryPassword}" == "" ]]; then
  echo "Artifactory Password variable is missing"
  exit 1
fi

if [[ "${bamboo_artifactoryUsername}" == "" ]]; then
  echo "Artifactory Username variable is missing"
  exit 1
fi

if [[ "${bamboo_STASHPASSWORD}" == "" ]]; then
  echo "Artifactory Password variable is missing"
  exit 1
fi

if [[ "${bamboo_STASHUSERNAME}" == "" ]]; then
  echo "Artifactory Username variable is missing"
  exit 1
fi

if [[ "${bamboo_buildNumber}" == "" ]]; then
  echo "Bamboo buildnumber variable is missing"
  exit 1
fi

if [[ "${bamboo_planRepository_branchName}" == "" ]]; then
  echo "Bamboo planrepository branchname variable is missing"
  exit 1
fi
