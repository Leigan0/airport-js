function Plane() {
  this.isFlying = true
}

Plane.prototype.land = function() {
  if (!this.isFlying) throw "Plane is not in the air"
  this.isFlying = false
}

Plane.prototype.takeOff = function() {
  if (this.isFlying) throw "Plane is not on the ground"
  this.isFlying = true
}
