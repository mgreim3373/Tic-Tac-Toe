const store = require('./store.js')
const ui = require('./ui.js')
const updateBoardApi = require('./gameUpdates/event.js')


store.board = ['', '', '', '', '', '', '', '', '']
store.currentPlayerId = 0
store.winner = -1

const click = function (event) {
  event.preventDefault()
  console.log(store.winner)
  console.log(store.board)
  console.log('player', store.currentPlayerId)
  $('#warning-board').addClass('hide')
  let boxId = $(this).attr('id')
  if (store.board[boxId] === '' && store.winner < 0) {
    store.index = boxId
    updateBoardArray(boxId)
    updateBoardApi.onUpdateGameBoard()
    ui.onClick(boxId, store.currentPlayerId)
    checkForWinner(store.board)
    switchActivePlayer()
  } else if (store.winner > -1) {
    return
  } else {
    $('#warning-board').removeClass('hide')
  }
}

let updateBoardArray = function(boxId) {
  let currentPlayerValue
  if (store.currentPlayerId === 0) {
    currentPlayerValue = 1
  } else {
    currentPlayerValue = 4
  } store.board[boxId] = currentPlayerValue
    store.player = currentPlayerValue
}

let switchActivePlayer = function () {
  if (store.currentPlayerId === 1) {
    store.currentPlayerId = 0
    console.log("player 1 turn")
    $("#message-board").html('Player one\'s turn')
  } else {
    store.currentPlayerId = 1
    console.log("player 2 turn")
    $("#message-board").html('Player two\'s turn')
  }
  }

let checkForWinner = function (boardArr) {
  console.log("hsdfds")
  if (
    ((parseInt(boardArr[0], 10) + parseInt(boardArr[1], 10) + parseInt(boardArr[2], 10)) === 3) ||
    ((parseInt(boardArr[3], 10) + parseInt(boardArr[4], 10) + parseInt(boardArr[5], 10)) === 3) ||
    ((parseInt(boardArr[6], 10) + parseInt(boardArr[7], 10) + parseInt(boardArr[8], 10)) === 3) ||
    ((parseInt(boardArr[0], 10) + parseInt(boardArr[3], 10) + parseInt(boardArr[6], 10)) === 3) ||
    ((parseInt(boardArr[1], 10) + parseInt(boardArr[4], 10) + parseInt(boardArr[7], 10)) === 3) ||
    ((parseInt(boardArr[2], 10) + parseInt(boardArr[5], 10) + parseInt(boardArr[8], 10)) === 3) ||
    ((parseInt(boardArr[0], 10) + parseInt(boardArr[4], 10) + parseInt(boardArr[8], 10)) === 3) ||
    ((parseInt(boardArr[6], 10) + parseInt(boardArr[4], 10) + parseInt(boardArr[2], 10)) === 3)
  )

    {
       $("#message-board").addClass('hide')
       $("#game-over").html('Player 1 Wins')
      store.winner = 0
    }

  else if (
    ((parseInt(boardArr[0], 10) + parseInt(boardArr[1], 10) + parseInt(boardArr[2], 10)) === 12) ||
    ((parseInt(boardArr[3], 10) + parseInt(boardArr[4], 10) + parseInt(boardArr[5], 10)) === 12) ||
    ((parseInt(boardArr[6], 10) + parseInt(boardArr[7], 10) + parseInt(boardArr[8], 10)) === 12) ||
    ((parseInt(boardArr[0], 10) + parseInt(boardArr[3], 10) + parseInt(boardArr[6], 10)) === 12) ||
    ((parseInt(boardArr[1], 10) + parseInt(boardArr[4], 10) + parseInt(boardArr[7], 10)) === 12) ||
    ((parseInt(boardArr[2], 10) + parseInt(boardArr[5], 10) + parseInt(boardArr[8], 10)) === 12) ||
    ((parseInt(boardArr[0], 10) + parseInt(boardArr[4], 10) + parseInt(boardArr[8], 10)) === 12) ||
    ((parseInt(boardArr[6], 10) + parseInt(boardArr[4], 10) + parseInt(boardArr[2], 10)) === 12)
  )

  {
    $("#message-board").addClass('hide')
    $("#game-over").html('Player 1 Wins')
      store.winner = 1
  }
  else if ((store.board.includes('')) !== true) {
      $("#message-board").addClass('hide')
      $("#game-over").html('It\'s a tie')
      store.winner = 3
    } else {
      $("#message-board").removeClass('hide')
    }
  }

  store.checkForWinner = checkForWinner


module.exports = {
  click,
  updateBoardArray,
  checkForWinner

}
