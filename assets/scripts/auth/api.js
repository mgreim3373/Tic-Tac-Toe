'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}
const signInUp = function (data) {
let uData = store.userData
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    userData
  })
}




const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signUpInDelete = function() {
  delete store.userData.credentials.password_confirmation
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  signUpInDelete
}
