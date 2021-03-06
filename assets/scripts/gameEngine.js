const store = require('./store.js')
const ui = require('./ui.js')
const updateBoardApi = require('./gameUpdates/event.js')

const click = function (event) {
  event.preventDefault()
  $('#warning-board').empty()
  let boxId = $(this).attr('id')
  if (store.board[boxId] === '' && store.winner < 0) {
    store.index = boxId
    updateBoardArray(boxId)
    updateBoardApi.onUpdateGameBoard()
    ui.onClick(boxId, store.currentPlayerId)
    checkForWinner(store.board)
    switchActivePlayer()
  } else if (store.winner > -1) {
  } else {
    $('#warning-board').html('Invalid Selection')
  }
}

let updateBoardArray = function (boxId) {
  let currentPlayerValue
  if (store.currentPlayerId == 0) {
    currentPlayerValue = 1
  } else {
    currentPlayerValue = 4
  } store.board[boxId] = currentPlayerValue
    store.player = currentPlayerValue
}

let switchActivePlayer = function () {
  if (store.winner > -1) {
    $('#message-board').empty()
  } else if (store.currentPlayerId == 1) {
    store.currentPlayerId = 0
    $('#message-board').html('Player One\'s Turn!')
  } else {
    store.currentPlayerId = 1
    $('#message-board').html('Player Two\'s Turn!')
  }
}

let checkForWinner = function (boardArr) {
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
    $('#warning-board').empty()
    $('#message-board').empty()
    $('#game-over').html('Player 1 Wins!')
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
    $('#warning-board').empty()
    $('#message-board').empty()
    $('#game-over').html('Player 2 Wins!')
    store.winner = 1
  }
  else if ((store.board.includes('')) !== true) {
    $('#warning-board').empty()
    $("#message-board").empty()
    $("#game-over").html('It\'s A Tie!')
    store.winner = 3
  } else {
  }
}

store.checkForWinner = checkForWinner

module.exports = {
  click,
  updateBoardArray,
  checkForWinner

}
