'use strict'

const store = require('../store')


const signUpSuccess = function (data) {
  $('#message-board').html('sign up successful')
  $('#sign-up').addClass('hide')
  setTimeout(function() {
    $('#message-board').empty()
  }, 1000
)
}

const signUpFailure = function (error) {
  $('#message-board').html('sign up failure')
  setTimeout(function() {
    $('#message-board').empty()
  }, 1000
)
}

const signInSuccess = function (data) {
  $('#message-board').html('sign in success')
  $('#change-password').removeClass('hide')
  $('#games-played').removeClass('hide')
  $('#new-game').removeClass('hide')
  $('#sign-out').removeClass('hide')
  $('#sign-in').addClass('hide')
  $('#sign-up').addClass('hide')
  $('#get-game-data').removeClass('hide')
  setTimeout(function() {
    $('#message-board').empty()
  }, 1000

)
  console.log(data.user)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message-board').html('sign in failure')
  setTimeout(function() {
    $('#message-board').empty()
  }, 1000
)
}

const signOutSuccess = function () {
  $('#message-board').html('sign out success')
  $('#change-password').addClass('hide')
  $('#games-played').addClass('hide')
  $('#new-game').addClass('hide')
  $('#sign-out').addClass('hide')
  $('#sign-in').removeClass('hide')
  $('#sign-up').removeClass('hide')
  $('#get-game-data').addClass('hide')
  $('#board').addClass('hide')
  setTimeout(function() {
    $('#message-board').empty()
  }, 1000
)
  store.user = null
}

const signOutFailure = function (error) {
  $('#message-board').html('sign out failure')
  setTimeout(function() {
    $('#message-board').empty()
  }, 1000
)
}

const changePasswordSuccess = function () {
  $('#message-board').html('change password success')
  setTimeout(function() {
    $('#message-board').empty()
  }, 1000
)
}

const changePasswordFailure = function (error) {
  $('#message-board').html('change password failure')
  setTimeout(function() {
    $('#message-board').empty()
  }, 1000
)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
