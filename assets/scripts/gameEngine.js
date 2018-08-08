/*const api = require() */
const ui = require('./ui.js')

let board = [null, null, null, null, null, null, null, null, null]
let currentPlayer
let nonCurrentPlayer


let click = function (event) {
  event.preventDefault()
  let boxId = $(this).attr("id")
  ui.onClick(boxId)
  }



let switchPlayer = function () {
  if (checkForWinner() === false)
  {event.updateCSS()}
}

/*$("div").on('click', function (event) {
  console.log("event is ", event)
  checkForWinner()
} */
/*
let checkForWinner = function (event) {
  event.preventDefault()
  if (
    (board[0] + board[1] + board[2] === 3) ||
    (board[3] + board[4] + board[5] === 3) ||
    (board[6] + board[7] + board[8] === 3) ||
    (board[0] + board[3] + board[6] === 3) ||
    (board[1] + board[4] + board[7] === 3) ||
    (board[2] + board[5] + board[8] === 3) ||
    (board[0] + board[4] + board[8] === 3) ||
    (board[6] + board[4] + board[2] === 3)
    )

    {
      return "Winner: Player 1"
    }

  else if (
    (board[0] + board[1] + board[2] === 12) ||
    (board[3] + board[4] + board[5] === 12) ||
    (board[6] + board[7] + board[8] === 12) ||
    (board[0] + board[3] + board[6] === 12) ||
    (board[1] + board[4] + board[7] === 12) ||
    (board[2] + board[5] + board[8] === 12) ||
    (board[0] + board[4] + board[8] === 12) ||
    (board[6] + board[4] + board[2] === 12)
    )

    {
      return "Winner: Player 2"
    }

} */

module.exports = {
  click
}
