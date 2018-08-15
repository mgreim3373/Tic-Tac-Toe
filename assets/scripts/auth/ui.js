'use strict'

const store = require('../store')

const signUpFailure = function (error) {
  $('#sign-up input[name="credentials[password]"]').val('')
  $('#sign-up input[name="credentials[email]"]').val('')
  $('#sign-up input[name="credentials[password_confirmation]"]').val('')
  $('#sign-in input[name="credentials[password]"]').val('')
  $('#sign-in input[name="credentials[email]"]').val('')
  $('#message-board').html('Sign Up Failure')
  setTimeout(function() {
    $('#message-board').empty()
  }, 1000
)
}

const signInSuccess = function (data) {
  $('#message-board').html('Sign In Success')
  $('#game-code').empty()
  $('#warning-board').empty()
  $('#games-played').empty()
  $('#new-game').removeClass('hide')
  $('#sign-out').removeClass('hide')
  $('#sign-in').addClass('hide')
  $('#sign-up').addClass('hide')
  $('#resume-game').removeClass('hide')
  $('#options').removeClass('hide')
  $('#change-password').addClass('hide')
  $('#get-game-data').addClass('hide')
  $('#board').addClass('hide')
  $('#game-over').empty()
  setTimeout(function() {
    $('#message-board').empty()
  }, 1000

)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#sign-in input[name="credentials[password]"]').val('')
  $('#sign-in input[name="credentials[email]"]').val('')
  $('#sign-up input[name="credentials[password]"]').val('')
  $('#sign-up input[name="credentials[email]"]').val('')
  $('#sign-up input[name="credentials[password_confirmation]"]').val('')
  $('#message-board').html('Sign In Failure')
  setTimeout(function() {
    $('#message-board').empty()
  }, 1000
)
}

const signOutSuccess = function () {
  $('#message-board').html('Sign Out Success')
  $('#change-password').addClass('hide')
  $('#games-played').empty()
  $('#new-game').addClass('hide')
  $('#sign-out').addClass('hide')
  $('#sign-in').removeClass('hide')
  $('#sign-up').removeClass('hide')
  $('#get-game-data').addClass('hide')
  $('#board').addClass('hide')
  $('#resume-game').addClass('hide')
  $('#game-code').empty()
  $('#sign-in input[name="credentials[password]"]').val('')
  $('#sign-in input[name="credentials[email]"]').val('')
  $('#sign-up input[name="credentials[password]"]').val('')
  $('#sign-up input[name="credentials[email]"]').val('')
  $('#sign-up input[name="credentials[password_confirmation]"]').val('')
  $('#options').addClass('hide')
  $('#warning-board').empty()
  $('#game-over').empty()
  setTimeout(function () {
    $('#message-board').empty()
  }, 1000
)
  store.user = null
}

const signOutFailure = function (error) {
  $('#message-board').html('Sign Out Failure')
  setTimeout(function() {
    $('#message-board').empty()
  }, 1000
)
}

const changePasswordSuccess = function () {
  $('#message-board').html('Change Password Success')
  setTimeout(function() {
    $('#message-board').empty()
  }, 1000
)
$('#change-password input[name="passwords[old]"]').val('')
$('#change-password input[name="passwords[new]"]').val('')

}

const changePasswordFailure = function (error) {
  $('#message-board').html('Change Password Failure')
  setTimeout(function() {
    $('#message-board').empty()
  }, 1000
)
$('#change-password input[name="passwords[old]"]').val('')
$('#change-password input[name="passwords[new]"]').val('')
}

module.exports = {
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
