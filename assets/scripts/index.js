'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
const events = require('./gameEngine')

$(() => {
  $("#0").on('click', events.click)
  $("#1").on('click', events.click)
  $("#2").on('click', events.click)
  $("#3").on('click', events.click)
  $("#4").on('click', events.click)
  $("#5").on('click', events.click)
  $("#6").on('click', events.click)
  $("#7").on('click', events.click)
  $("#8").on('click', events.click)

})
