'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const store = require('../store')

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()


  const data = getFormFields(this)
  store.credentials = data


  api.signUp(data)
    .then(onSignUpIn)
    .catch(ui.signUpFailure)
}

const onSignUpIn = function (event) {

  delete store.credentials.password_confirmation
  let data = store.credentials
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignIn = function (event) {
  event.preventDefault()


  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()


  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()


  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignInModal = function (event) {
  event.preventDefault()
  ui.signInModal()
}

const onSignUpModal = function (event) {
    event.preventDefault()
    ui.signUpModal()
  }

const onClose = function (event) {
    event.preventDefault()
    ui.closeModal()
  }

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $("#signInButton").on('click', onSignInModal)
  $("#signUpButton").on('click', onSignUpModal)
  $(".close").on('click', onClose)
}

module.exports = {
  addHandlers
}
