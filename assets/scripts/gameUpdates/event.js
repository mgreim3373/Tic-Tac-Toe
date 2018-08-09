'use strict'

const api = require('./api')
const ui = require('./ui')

const onGamesPlayed = function (event) {
  event.preventDefault()

  api.gamesPlayed()
  .then(ui.gamesPlayedSuccess)
}

const onMoveUpdate = function (event) {
  api.moveUpdate()
  //.then(ui.gamesPlayedSuccess)

}

const addHandlers = () => {
  $('#games-played').on('submit', onGamesPlayed)
  $('#new-game').on('submit', onNewGame)
}

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
  .then(ui.onNewGameSuccess)
  }

module.exports = {
  addHandlers,
  onMoveUpdate,
  onNewGame
}
