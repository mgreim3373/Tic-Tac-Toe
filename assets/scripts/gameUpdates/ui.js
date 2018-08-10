'use strict'
const store = require('../store')

const gamesPlayedSuccess = function (data) {
  $("#games-played").html(data.games.length)



}

const onNewGameSuccess = function (data) {
  $('#board').removeClass('hide')
  store.winner = -1
  store.game = data.game
  store.board = [0,0,0,0,0,0,0,0,0]
  store.currentPlayerId = 0
  clearBoard()
}

const clearBoard = function() {
  $("#0").empty()
  $("#1").empty()
  $("#2").empty()
  $("#3").empty()
  $("#4").empty()
  $("#5").empty()
  $("#6").empty()
  $("#7").empty()
  $("#8").empty()
  $("#game-over").empty()
  $("#message-board").html('Player one\'s turn')
}


module.exports = {
  gamesPlayedSuccess,
  onNewGameSuccess
}
