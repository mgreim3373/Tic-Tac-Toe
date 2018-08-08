

let onClick = function (boxId, currentPlayer) {
  if (currentPlayer === 0) {
    $('#'+boxId).html('X')
  } else {
    $('#'+boxId).html('O')

  }
}

module.exports = {
  onClick
}
