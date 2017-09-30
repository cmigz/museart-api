#!/bin/sh

API="http://localhost:4741"
URL_PATH="/drawings"

ID="59cf8f0e07cc092835176ec3"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=$TOKEN"
