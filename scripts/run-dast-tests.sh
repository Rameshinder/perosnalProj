#!/usr/bin/env bash
#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

. scripts/init.sh

COMPOSE_FILE=./docker-compose.yml
CFG_FILE=./app/config/properties.json

if [[ ! -f "$COMPOSE_FILE" ]]; then
  echo "Cannot locate compose file: $COMPOSE_FILE"
  exit 1
fi

NG_PORT=$(docker-compose -f $COMPOSE_FILE port nginx 80 | cut -d: -f2)

sed -i "s#{ciHost}#$HOST_IP#g" $CFG_FILE
sed -i "s#{ciWebPort}#$NG_PORT#g" $CFG_FILE

baseURL="http://$HOST_IP:$NG_PORT/$APP_NAME/"
baseDastURL="http://150.133.108.146:55216"

curl -X POST \
  --header 'Content-Type: application/json' \
  --header 'Accept: application/json' \
  -d "{ 'settingsName': 'Default', 'overrides': { 'scanName': 'Skeleton UI', 'startUrls': ['${baseURL}'], 'scanScope': 'self'} }" \
  "${baseDastURL}"/webinspect/scanner/scans \
  --write-out "%{http_code}\n" \
  --silent \
  --output pull_request.json
scanID="$(< pull_request.json jq -r .ScanId)"

while true ; do
  curl $baseDastURL/webinspect/scanner/scans/"$scanID"?action=GetCurrentStatus \
    --write-out "%{http_code}\n" \
    --silent \
    --output pull_request.json

  scanStatus="$(< pull_request.json jq -r .ScanStatus)"

  if [[ $scanStatus == "Complete" ]]; then
    break
  fi
  sleep 60
done




