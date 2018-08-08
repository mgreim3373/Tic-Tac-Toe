'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
const gameEvents = require('./gameEngine')
const authEvents = require('./auth/event.js')

$(() => {
  authEvents.addHandlers()
  $("#0").on('click', gameEvents.click)
  $("#1").on('click', gameEvents.click)
  $("#2").on('click', gameEvents.click)
  $("#3").on('click', gameEvents.click)
  $("#4").on('click', gameEvents.click)
  $("#5").on('click', gameEvents.click)
  $("#6").on('click', gameEvents.click)
  $("#7").on('click', gameEvents.click)
  $("#8").on('click', gameEvents.click)

})
