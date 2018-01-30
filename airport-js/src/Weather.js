function Weather () {
}

Weather.prototype.isStormy = function () {
  var value = Math.floor((Math.random() * 5) + 1)
  return value < 2
}
