#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

SRCDIR=$1

rm -rf /root/.fortify "$SRCDIR-*.fpr"

# Update fortify licence
LICFILE="/opt/HP_Fortify/HP_Fortify_SCA*/fortify.license"

if ! grep 'SCA-Analysis 2018-03-31' "$LICFILE"; then
  wget -nv https://dcartifactory.service.dev/artifactory/csp-utilities/hpfortify/license/fortify.license
  cp fortify.license "$LICFILE"
else
  echo "Latest License in use."
fi

# Install latest rulepack. fix zip file
echo "Installing latest rules pack..."
wget -nv https://dcartifactory.service.dev/artifactory/csp-utilities/hpfortify/rules/LatestRules.zip
rm -rf LatestRules
unzip -q LatestRules.zip -d ./LatestRules
(
  cd LatestRules || exit
  zip -q -9 ../rules.zip ./*.bin ExternalMetadata/*
)
fortifyupdate -import rules.zip
rm -f rules.zip LatestRules.zip

# Translate app source code to pre-ES6 code
echo "Executing code translation..."
yarn translate

# Build
echo "Executing code build..."
rm -f fortify.log
sourceanalyzer -b "$bamboo_buildResultKey" -verbose -logfile fortify.log \
  -Xmx2500M -source 1.7 fsrc

# Scan
echo "Executing code scan..."
FPR_FILE="$SRCDIR-$(echo "$bamboo_repository_branch_name" | tr '/ ' '-_')-$bamboo_buildNumber.fpr"
sourceanalyzer -b "$bamboo_buildResultKey" -verbose -logfile fortify.log \
  -Xmx5000M -scan -format fpr -f "$FPR_FILE"

# Remove /fsrc directory - cleanup
echo "Executing cleanup..."
rm -rf /fsrc

echo "OK"
