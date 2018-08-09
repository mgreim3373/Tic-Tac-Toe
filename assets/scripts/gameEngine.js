const store = require('./store.js')
const ui = require('./ui.js')
const updateBoardApi = require('./gameUpdates/event.js')


let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let currentPlayerId = 0
let winner = -1



let click = function (event) {
  event.preventDefault()
  $("#warning-board").addClass("hide")
  let boxId = $(this).attr("id")
  if(board[boxId] === 0 & winner < 0) {
  store.index.value = boxId
  updateBoardArray(boxId)
  updateBoardApi.onUpdateGameBoard()
  ui.onClick(boxId, currentPlayerId)
  checkForWinner(board)
  switchActivePlayer()
} else {
  $("#warning-board").removeClass("hide")
}
}


let updateBoardArray = function(boxId) {
  let currentPlayerValue
  if (currentPlayerId === 0) {
    currentPlayerValue = 1
  } else {
    currentPlayerValue = 4
  } board[boxId] = currentPlayerValue
    store.player.value = currentPlayerValue
}

let switchActivePlayer = function () {
  if (currentPlayerId === 1) {
    currentPlayerId = 0
    $("#message-board").html('Player one\'s turn')
  } else {
    currentPlayerId = 1
    $("#message-board").html('Player two\'s turn')
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
       console.log('Winner1')
       winner = 0
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
    console.log("Winner2")
    winner = 1
  }
  else {
    console.log("continueGame")
  }

}

module.exports = {
  click,
  updateBoardArray

}
