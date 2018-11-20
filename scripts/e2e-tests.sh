#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

# First, pull latest mountebank and docker-compose up the test environment
#docker pull csp-docker-registry.service.dev:5000/mountebank:latest
#docker-compose up -d

. scripts/init.sh

COMPOSE_FILE=./docker-compose.yml
CFG_FILE=./app/config/properties.json

if [[ ! -f "$COMPOSE_FILE" ]]; then
  echo "Cannot locate compose file: $COMPOSE_FILE"
  exit 1
fi

if [[ ! -f "$CFG_FILE" ]]; then
  echo "Could not find file to update: $CFG_FILE"
  exit 1
fi

IP="$(/sbin/ip route|awk '/default/ {print $3 }')"
NG_PORT=$(docker-compose -f $COMPOSE_FILE port nginx 80 | cut -d: -f2)
MB_PORT=$(docker-compose -f $COMPOSE_FILE port mountebank 2525 | cut -d: -f2)

# curl web page for debugging
# curl -v http://$HOST_IP:$NG_PORT/${APP_NAME}/

# Update config
echo "Updating config file: $CFG_FILE"
sed -i "s#{ciHost}#$HOST_IP#g" $CFG_FILE
sed -i "s#{ciWebHost}#$IP#g" $CFG_FILE
sed -i "s#{ciWebPort}#$NG_PORT#g" $CFG_FILE
sed -i "s#{ciMbPort}#$MB_PORT#g" $CFG_FILE

# echo updated config file for debugging
# echo "Final configuration file:"
# cat $CFG_FILE

# check for missing substitutions
echo "check for missing substitutions (should be none!)"
grep '{ci' $CFG_FILE && echo "ERROR: found missing substitutions"
echo "OK"

node ./app/e2e/gherkin-properties.js

#export NODE_ENV=ci

# Clear old screenshots
if [[ -d "./app/e2e/screenShots" ]]; then
    rm -r ./app/e2e/screenShots
fi

mkdir app/e2e/screenShots

if [[ -d "./screenShots" ]]; then
    rm -r ./screenShots
fi

mkdir screenShots

yarn mb-configure

set +ex

TEST_CMD="e2etest-ci"
if [[ $# -eq 1 ]] ; then
  TEST_CMD="$1"
fi

if ! yarn $TEST_CMD ; then
  if [[ -f "./reports/e2e/rerun.txt" ]] ; then
    echo "Rerunning failed tests"
    # Remove old xml files
    (
      cd ./reports/e2e || exit
      while read -r -d, line || [[ -n "$line" ]] ; \
        do find . -iname "*.xml" -exec grep -l "$line" {} + | xargs rm -f ; done < rerun.txt
    )
    # Rerun
    yarn $TEST_CMD --spec "$(< ./reports/e2e/rerun.txt)"
  fi
fi
