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
