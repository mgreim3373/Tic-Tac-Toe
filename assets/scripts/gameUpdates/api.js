const config = require('../config')
const store = require('../store')

const gamesPlayed = function () {
  return $.ajax({
    url: config.apiUrl + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
})
}


module.exports = {
gamesPlayed
}
