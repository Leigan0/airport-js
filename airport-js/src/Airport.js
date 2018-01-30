function Airport () {
  this.planes = []
}

Airport.prototype.land = function(plane) {
  this.planes.push(plane)
  return plane
}

Airport.prototype.hangar = function() {
  return this.planes
}

Airport.prototype.take_off = function(plane) {
  var index = this.planes.indexOf(plane);
  this.planes.splice(index,1)
  return this.planes
}
