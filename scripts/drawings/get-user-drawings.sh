API="http://localhost:4741"
URL_PATH="/drawings"
USERID="59cfa0e8ea769d324d03150e"

curl "${API}${URL_PATH}/${USERID}" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
