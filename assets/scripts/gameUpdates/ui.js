'use strict'
const store = require('../store')

const gamesPlayedSuccess = function (data) {
  console.log(data)

}

const onNewGameSuccess = function (data) {
  let gameId = data.game.id
  store.game.id = data.game.id

}



module.exports = {
  gamesPlayedSuccess,
  onNewGameSuccess
}
