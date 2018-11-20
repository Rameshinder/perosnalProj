#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

Start="220000" # Starts at 10pm
End="020000"   # Ends at 2am
CurrentTime=$(date +"%H%M%S")

PROJECTSUBDIRECTORY=$(basename "$(pwd)")
BRANCH=$bamboo_planRepository_branchName

find_fpr_file() {
  FPR_FIND_OUTPUT=$(find "${bamboo_build_working_directory}" -type f -name '*.fpr' -printf "%f\n")
  GLOBIGNORE='*' IFS=$'\n' FPR_ARRAY=($FPR_FIND_OUTPUT)

  if [[ ${#FPR_ARRAY[@]} != 1 ]]; then
    1>&2 echo "The FPR file is ambiguous, which one should be uploaded?"
    exit 1
  fi

  echo -n "${FPR_FIND_OUTPUT[0]}"
}

run_fortify_and_upload() {
  ./scripts/run-hp-fortify.sh "${PROJECTSUBDIRECTORY}"
  echo "Executing HP Fortify Token Issuer"
  FORTIFYAUTHTOKEN=$(fortifyclient token -gettoken AnalysisUploadToken -url http://appau001mel0333.global.anz.com/ssc/ -user "${bamboo_FORTIFYUSERNAME}" -password "${bamboo_FORTIFYPASSWORD}")
  FORTIFYAUTHTOKEN=$(cut -d " " -f 3 <<< "$FORTIFYAUTHTOKEN")
  echo "Executing HP Fortify Upload"
  FILENAME=$(find_fpr_file)
  fortifyclient -url http://appau001mel0333.global.anz.com/ssc/ -authtoken "${FORTIFYAUTHTOKEN}" uploadFPR -file "${FILENAME}" -project "${bamboo_FORTIFYPROJECT}" -version "${bamboo_FORTIFYVERSION}"
}

if [[ ( ${CurrentTime} > ${Start} &&  ${CurrentTime} < ${End} ) && ( ${BRANCH} == "release"* || ${BRANCH} == "develop" ) ]]; then
  run_fortify_and_upload
elif [[ ${bamboo_HP_FORTIFY} = "true" ]]; then
  run_fortify_and_upload
fi
