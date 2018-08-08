let onClick = function (boxId) {
  console.log(boxId)
$('#'+boxId).html('X')
}

module.exports = {
  onClick
}
