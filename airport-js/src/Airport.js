function Airport () {
  this.planes = []
}

Airport.prototype.land = function(plane) {
  this.planes.push(plane)
  plane.land()
  return plane
}

Airport.prototype.take_off = function(plane) {
  var index = this.planes.indexOf(plane);
  this.planes.splice(index,1)
  return this.planes
}
