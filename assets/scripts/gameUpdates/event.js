'use strict'

const api = require('./api')
const ui = require('./ui')

const onGetGameData = function (event) {
  event.preventDefault()
  api.getGameData()
  .then(ui.gamesPlayedSuccess)
}

const onUpdateGameBoard = function (event) {
  api.updateGameBoard()
  //.then(ui.gamesPlayedSuccess)

}


const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
  .then(ui.onNewGameSuccess)
  }

  const addHandlers = () => {
    $('#get-game-data').on('submit', onGetGameData)
    $('#new-game').on('submit', onNewGame)
  }

module.exports = {
  addHandlers,
  onUpdateGameBoard
}
