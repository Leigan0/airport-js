function Airport (weather) {
  this.planes = []
  this.weather = typeof weather !== 'undefined' ? weather : new Weather();
}

Airport.prototype.land = function(plane) {
  if (this.weather.isStormy()) {
    throw "Unable to land, weather is stormy"
  }
  this.planes.push(plane)
  plane.land()
  return plane
}

Airport.prototype.takeOff = function(plane) {
  if (this.weather.isStormy()) {
    throw "Unable to take off, weather is stormy"
  }
  var index = this.planes.indexOf(plane);
  this.planes.splice(index,1)
  plane.takeOff()
  return this.planes
}
