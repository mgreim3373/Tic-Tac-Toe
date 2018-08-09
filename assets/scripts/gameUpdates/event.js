'use strict'

const api = require('./api')
const ui = require('./ui')

const onGamesPlayed = function (event) {
  event.preventDefault()

  api.gamesPlayed()
  .then(ui.gamesPlayedSuccess)
}

const addHandlers = () => {
  $('#games-played').on('submit', onGamesPlayed)
}

module.exports = {
  addHandlers
}
