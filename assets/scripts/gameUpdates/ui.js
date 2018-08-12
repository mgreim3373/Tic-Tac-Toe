'use strict'
const store = require('../store')

const gamesPlayedSuccess = function (data) {
  console.log(data.games)
  $("#games-played").html(data.games.length)



}

const onNewGameSuccess = function (data) {
  $('#board').removeClass('hide')
  store.winner = -1
  store.game = data.game
  store.board = ['','','','','','','','','']
  store.currentPlayerId = 0
  console.log(store.board)
  clearBoard()
  $("#message-board").html('Player one\'s turn')
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
  $("#message-board").empty()
}

const resumeGameSuccess = function (data) {
  clearBoard()
  store.winner = -1
  store.game = data.game
  store.board = data.game.cells
  store.currentPlayerId = 0
  console.log(store.board)
  restoreGameBoard(store.board)

}


const restoreGameBoard = function (boardArr) {
  let i = -1
  boardArr.forEach(function(gameSpace){
    i += 1
  if (gameSpace == 1){
    console.log('#'+i)

    $('#'+i).html('x')
    }
      else if (gameSpace == 4) {
      $('#'+i).html('o')
    }
  })
  }

module.exports = {
  gamesPlayedSuccess,
  onNewGameSuccess,
  resumeGameSuccess
}
