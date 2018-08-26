'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require(`../../../lib/get-form-fields`)

const onGetGameData = function (event) {
  event.preventDefault()
  api.getGameData()
    .then(ui.gamesPlayedSuccess)
}

const onUpdateGameBoard = function (event) {
  api.updateGameBoard()
}

const onOptions = function (event) {
  event.preventDefault()
  ui.options()
}

const onBack = function (event) {
  event.preventDefault()
  ui.back()
}

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.onNewGameSuccess)
}

const onResumeGame = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  const id = data.id
  api.resumeGame(id)
    .then(ui.resumeGameSuccess)
    .catch(ui.resumeGameFail)
}

const addHandlers = () => {
  $('#get-game-data').on('submit', onGetGameData)
  $('.new-game').on('submit', onNewGame)
  $('#resume-game').on('submit', onResumeGame)
  $('#options').on('submit', onOptions)
  $('.back').on('submit', onBack)
}

module.exports = {
  addHandlers,
  onUpdateGameBoard
}
