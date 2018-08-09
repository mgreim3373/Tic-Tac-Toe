/*const api = require() */
const ui = require('./ui.js')
const gameUpdate = require('./gameUpdates/event.js')

let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let currentPlayer = 0
let gamePiece = null
let winner = -1


let click = function (event) {
  event.preventDefault()
  let boxId = $(this).attr("id")
  if(board[boxId] === 0 & winner < 0) {
  updateBoardArray(boxId)
  gameUpdate.onMoveUpdate()
  ui.onClick(boxId, currentPlayer)
  checkForWinner(board)
  switchPlayer()
}}




let updateBoardArray = function(boxId) {
  if (currentPlayer === 0) {
    gamePiece = 1
  } else {
    gamePiece = 4
  } board[boxId] = gamePiece
}

let switchPlayer = function () {
  if (currentPlayer===1) {
    currentPlayer = 0
  } else {
    currentPlayer = 1
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
    return "continueGame"
  }

}

module.exports = {
  click
}
