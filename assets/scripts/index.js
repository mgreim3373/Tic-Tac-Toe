'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
const events = require('./gameEngine')

$(() => {
  $("#top-left").on('click', events.click)
  $("#top-center").on('click', events.click)
  $("#top-right").on('click', events.click)
  $("#middle-left").on('click', events.click)
  $("#middle-center").on('click', events.click)
  $("#middle-right").on('click', events.click)
  $("#bottom-left").on('click', events.click)
  $("#bottom-center").on('click', events.click)
  $("#bottom-right").on('click', events.click)

})
