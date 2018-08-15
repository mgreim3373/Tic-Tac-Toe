'use strict'
const store = require('../store')

const options = function () {
  $('#get-game-data').removeClass('hide')
  $('#change-password').removeClass('hide')
  $('#new-game').addClass('hide')
  $('#sign-out').addClass('hide')
  $('#sign-in').addClass('hide')
  $('#sign-up').addClass('hide')
  $('#resume-game').addClass('hide')
  $('#options').addClass('hide')
  $('#back').removeClass('hide')
}

const back = function () {
  $('#board').addClass('hide')
  $('#options').removeClass('hide')
  $('#get-game-data').addClass('hide')
  $('#change-password').addClass('hide')
  $('#new-game').removeClass('hide')
  $('#sign-out').removeClass('hide')
  $('#sign-in').addClass('hide')
  $('#sign-up').addClass('hide')
  $('#resume-game').removeClass('hide')
  $('#back').addClass('hide')
  $('#games-played').empty()
  $('#message-board').empty()
  $('#game-over').empty()
  $('#warning-board').empty()
}

const gamesPlayedSuccess = function (data) {
  $('#games-played').html(data.games.length)
  setTimeout(function () {
    $('#games-played').empty()
  }, 1000
  )
}

const onNewGameSuccess = function (data) {
  $('#board').removeClass('hide')
  store.winner = -1
  store.game = data.game
  store.board = ['', '', '', '', '', '', '', '', '']
  store.currentPlayerId = 0
  clearBoard()
  $('#message-board').html('Player One\'s Turn!')
  $('#game-code').html('Current Game Id:' + store.game.id)
  $('#sign-out').addClass('hide')
  $('#resume-game').addClass('hide')
  $('#options').addClass('hide')
  $('#back').removeClass('hide')
  $('#warning-board').empty()
}

const clearBoard = function () {
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
  $('#resume-game input[name="id"]').val('')
  clearBoard()
  store.game = data.game
  store.board = data.game.cells
  restoreGameBoard(store.board)
  $('#game-code').html('Current Game Id:' + store.game.id)
  store.checkForWinner(store.board)
  whoseTurn(store.board)
  $('#board').removeClass('hide')
  $('#resume-game input[name="id"]').val('')
  $('#sign-out').addClass('hide')
  $('#resume-game').addClass('hide')
  $('#options').addClass('hide')
  $('#back').removeClass('hide')
  if (store.winner > -1) {
    $('#message-board').empty()
  }
}

const resumeGameFail = function () {
  $('#resume-game input[name="id"]').val('')
  $('#message-board').html('Invalid Input')
  setTimeout(function () {
    $('#message-board').empty()
  }, 1000
  )
}

const restoreGameBoard = function (boardArr) {
  let i = -1
  boardArr.forEach(function (gameSpace) {
    i += 1
    if (gameSpace == 1) {
      $('#' + i).html('x')
    } else if (gameSpace == 4) {
      $('#' + i).html('o')
    }
  })
}

const whoseTurn = function (boardArr) {
  let playerOneTotal = 0
  let playerTwoTotal = 0
  for (let i = 0; i < boardArr.length; i++) {
    if (parseInt(boardArr[i]) == 1) {
      playerOneTotal += 1
    } else if (parseInt(boardArr[i]) == 4) {
      playerTwoTotal += 1
    }
  }
    if (playerOneTotal > playerTwoTotal) {
      store.currentPlayerId = 1
      $('#message-board').html('Player Two\'s Turn!')
    } else {
      store.currentPlayerId = 0
      $('#message-board').html('Player One\'s Turn!')
    }
}

module.exports = {
  gamesPlayedSuccess,
  onNewGameSuccess,
  resumeGameSuccess,
  options,
  back,
  resumeGameFail
}
