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
  let dataWithoutPC = store.credentials
  api.signIn(dataWithoutPC)
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
  ui.signInModalSuccess()
}

const onSignUpModal = function (event) {
  event.preventDefault()
  ui.signUpModalSuccess()
}

const onBackModal = function (event) {
  event.preventDefault()
  ui.onBackModalSuccess()
}

const addHandlers = () => {
  $('#sign-in-modal').on('click', onSignInModal)
  $('#sign-up-modal').on('click', onSignUpModal)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('.back-modal').on('click', onBackModal)
}

module.exports = {
  addHandlers
}
