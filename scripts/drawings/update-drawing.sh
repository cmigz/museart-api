API="http://localhost:4741"
URL_PATH="/drawings"

USERID="59cfa0e8ea769d324d03150e"
ID="59cfa141ea769d324d03150f"
IMAGELINK="https://i.imgur.com/HUgF8lv.png"
SONGTITLE="Day of the Baphoments"
SONGARTIST="The Mars Volta"
LYRICS="The nuns are burning wheels again"
SONGLINK="https://i.imgur.com/HUgF8lv.png"



curl "${API}${URL_PATH}/${USERID}/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "drawing": {
      "imageLink": "'"${IMAGELINK}"'",
      "songTitle": "'"${SONGTITLE}"'",
      "songArtist": "'"${SONGARTIST}"'",
      "lyrics": "'"${LYRICS}"'",
      "songLink": "'"${SONGLINK}"'"
    }
  }'

echo
