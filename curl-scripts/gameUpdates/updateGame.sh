curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
--include \
--request GET \
--header "Authorization: Token token=${TOKEN}"--data '{
  "games": {
    "cells": "'"${CELLS}"'",
    "over": "'"${PASSWORD}"'"
    "player_x": {
      "id":"'"${ID}"'",
      "email": "'"${EMAIL}"'"
    },
    "player_o": "'"${PLAYER_O}"'"
  }
}'
