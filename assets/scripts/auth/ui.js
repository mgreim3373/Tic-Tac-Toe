'use strict'

const store = require('../store')
let idGlobal


const signUpSuccess = function (data) {
  $('#message-board').html('sign up successful')
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
  setTimeout(function() {
    $('#message-board').empty()
  }, 1000

)
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
