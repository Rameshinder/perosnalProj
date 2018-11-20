#!/bin/bash
set -exuo pipefail
IFS=$'\n\t'

. scripts/init.sh

export JAVA8_HOME=/usr/lib/jvm/java-8-oracle/bin/java
update-alternatives --set java $JAVA8_HOME
export JAVA_HOME=/usr/lib/jvm/java-8-oracle

if [[ "${bamboo_planRepository_branchName}" == "develop" ]]; then
  export SONAR_SCANNER_OPTS="-Dproject.settings=sonar-scanner.properties \
    -Dsonar.analysis.mode=publish \
    -Dsonar.branch=${bamboo_planRepository_branchName}"

  if ! node_modules/sonar-scanner/bin/sonar-scanner; then
    echo "Sonar Scanner failed"
    exit 1
  fi
else
  # get PRs for branch
  project=$(echo "${bamboo_planRepository_1_repositoryUrl}" | cut -d'/' -f 4)
  tmp_repository=$(echo "${bamboo_planRepository_1_repositoryUrl}" | cut -d'/' -f 5 )
  repository="${tmp_repository%.*}"

  result=$(curl --write-out "%{http_code}\n" --silent --output pull_requests.json -X GET \
    -u "${bamboo_STASHUSERNAME}:${bamboo_STASHPASSWORD}" \
    -H "Cache-Control: no-cache" \
    "https://dcstash.service.dev:8443/rest/api/1.0/projects/$project/repos/$repository/pull-requests?limit=100")

  # If we get a non HTTP 200 then we have a failure
  if [[ "$result" != "200" ]]; then
    echo "Curl request to get pull requests has failed."
    exit 1
  fi

  PullRequest_ID="$(cat pull_requests.json | jq '.values[]["id"]')"

  # For each PR run sonar-scanner
  for ID in ${PullRequest_ID[@]}
    do
      result=$(curl --write-out "%{http_code}\n" --silent --output pull_request.json -X GET \
        -u "${bamboo_STASHUSERNAME}:${bamboo_STASHPASSWORD}" \
        -H "Cache-Control: no-cache" \
        "https://dcstash.service.dev:8443/rest/api/1.0/projects/$project/repos/$repository/pull-requests/$ID")

      if [[ "$result" != "200" ]]; then
        echo "Curl request to get pull request has failed."
        exit 1
      fi

      pullrequest_tobranch="$(< pull_request.json jq -r '.toRef["displayId"]')"
      pullrequest_frombranch="$(< pull_request.json jq -r '.fromRef["displayId"]')"

      if [[ "${bamboo_planRepository_branchName}" == "${pullrequest_frombranch}" ]]; then
        export SONAR_SCANNER_OPTS="-Dsonar.stash.comments.reset=false \
          -Dsonar.stash.notification=true \
          -Dsonar.stash.repository=$repository \
          -Dsonar.stash.project=$project \
          -Dproject.settings=sonar-scanner.properties \
          -Dsonar.analysis.mode=preview \
          -Dsonar.stash.pullrequest.id=$ID \
          -Dsonar.branch=$pullrequest_tobranch"

        if ! node_modules/sonar-scanner/bin/sonar-scanner; then
          echo "Sonar Scanner failed"
          exit 1
        fi
      fi
    done
fi

export JAVA7_HOME=/usr/lib/jvm/java-7-oracle/bin/java
update-alternatives --set java $JAVA7_HOME
export JAVA_HOME=/usr/lib/jvm/java-7-oracle
