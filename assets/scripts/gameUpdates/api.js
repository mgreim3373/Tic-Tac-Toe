const config = require('../config')
const store = require('../store')

const gamesPlayed = function () {
  return $.ajax({
    url: config.apiUrl + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
})
}

const moveUpdate = function (id) {
  return $.ajax({
    url: config.apiUrl + '/games/:' + id,
    method: 'PATCH',
    data: {
      "game": {
        "cell": {
          "index": 0,
          "value": "x"
        },
        "over": false
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  }
)}



const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
}
})
}

module.exports = {
gamesPlayed,
moveUpdate,
newGame
}
