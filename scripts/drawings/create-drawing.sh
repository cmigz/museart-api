#/bin/bash

API="http://localhost:4741"
URL_PATH="/drawings"

USERID="59cf8c6807cc092835176ec2"
IMAGELINK="https://i.imgur.com/HUgF8lv.png"
SONGTITLE="Ghost"
SONGARTIST="Neutral Milk Hotel"
SONGLINK="https://www.youtube.com/watch?v=H-O0vHJzoFc"
LYRICS="Born in a bottle rocket in 1949"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "drawing": {
      "userId": "'"${USERID}"'",
      "imageLink": "'"${IMAGELINK}"'",
      "songTitle": "'"${SONGTITLE}"'",
      "songArtist": "'"${SONGARTIST}"'",
      "songLink": "'"${SONGLINK}"'",
      "lyrics": "'"${LYRICS}"'"
    }
  }'

echo
