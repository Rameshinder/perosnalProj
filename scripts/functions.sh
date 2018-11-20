#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

branch_name_escape_ch() {
  local I
  I=$(printf %d "'$1")
  local R=
  local J=
  local ALPHABET="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"

  while [[ "$I" != 0 ]]; do
    (( J = I % ${#ALPHABET} ))
    R+="${ALPHABET:$J:1}"
    (( I /= ${#ALPHABET} ))
  done

  local R_LEN="${#R}"
  if [[ "$R_LEN" -ge "${#ALPHABET}" ]]; then
    return 1
  fi

  # . denotes the beginning of an escape sequence
  R="${ALPHABET:$R_LEN:1}$R"
  echo -n "$R"
}

branch_name_escape() {
  local STR1="$1"
  local PATTERN='^[a-zA-Z0-9 -]$'
  for (( I=0 ; I<${#STR1} ; I++ )); do
    local CH="${STR1:$I:1}"
    if [[ "$CH" =~ $PATTERN ]]; then
      echo -n "$CH"
    else
      local CH_ESCAPED
      if ! CH_ESCAPED='_'$(branch_name_escape_ch "$CH"); then
        return 1
      fi
      echo -n "$CH_ESCAPED"
    fi
  done
}

# Converts 1 into 1.0.0
# Converts 1.0 into 1.0.0
# Does not change 1.0.0
ensure_version_has_three_components() {
  local VERSION="$1"
  local I="${#VERSION}"
  local COMPONENT_COUNT=1

  while [[ "$I" > 0 ]]; do
    (( I-=1 ))
    if [[ "${VERSION:$I:1}" == '.' ]]; then
        (( COMPONENT_COUNT+=1 ))
        break
    fi
  done

  while [[ "$COMPONENT_COUNT" < 2 ]]; do
    (( COMPONENT_COUNT+=1 ))
    VERSION="$VERSION.0"
  done

  echo -n "$VERSION"
}

# # Increments the minor version.
# # For example: 
# version_increment_minor '1.0' 
# # output 1.1 
# version_increment_minor '1' 
# # output 1.1
# version_increment_minor '1.1.0' 
# # output 1.2.0
version_increment_minor() {
  # This function assumes it's first argument is a version with one or more components.
  local VERSION="$1"
  local N="${#VERSION}"
  local I=0
  local MAJOR_END='-1'

  while [[ "$I" < "$N" ]]; do
    if [[ "${VERSION:$I:1}" == '.' ]]; then
      MAJOR_END="$I"
      break
    fi
    (( I+=1 ))
  done

  local MAJOR=
  local MINOR=

  if [[ "$MAJOR_END" < 0 ]]; then
    # Version seems to have only one component.
    MINOR=0
    MAJOR="$VERSION"
  else
    (( I=MAJOR_END+1 ))
    local MINOR_END='-1'

    while [[ "$I" < "$N" ]]; do
      if [[ "${VERSION:$I:1}" == '.' ]]; then
        MINOR_END="$I"
        break
      fi
      (( I+=1 ))
    done

    if [[ "$MINOR_END" < 0 ]]; then
      MINOR_END="$N"
    fi

    local MINOR_START="$(( MAJOR_END+1 ))"
    local MINOR_LENGTH="$(( MINOR_END-MINOR_START ))"
    MAJOR="${VERSION:0:$MAJOR_END}"
    MINOR="${VERSION:$MINOR_START:$MINOR_LENGTH}"
  fi

  (( MINOR+=1 ))
  echo -n "$MAJOR.$MINOR.0"
}