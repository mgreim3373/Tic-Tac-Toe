'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
const events = require('./gameEngine')

$(() => {
  $("#top-left").on('click', events.checkForWinner)
  $("#top-center").on('click', events.checkForWinner)
  $("#top-right").on('click', events.checkForWinner)
  $("#middle-left").on('click', events.checkForWinner)
  $("#middle-center").on('click', events.checkForWinner)
  $("#middle-right").on('click', events.checkForWinner)
  $("#bottom-left").on('click', events.checkForWinner)
  $("#bottom-center").on('click', events.checkForWinner)
  $("#bottom-right").on('click', events.checkForWinner)

})
