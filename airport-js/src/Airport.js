function Airport (weather) {
  this.planes = []
  var DEFAULT_CAPACITY = 50
  this.capacity = DEFAULT_CAPACITY
  this.weather = typeof weather !== 'undefined' ? weather : new Weather();
}

Airport.prototype.land = function(plane) {
  if (this.weather.isStormy()) throw "Unable to land, weather is stormy"
  if (this._isFull()) throw "Unable to land, airport is at full capacity"
  this._addPlaneToHangar(plane)
}

Airport.prototype.takeOff = function(plane) {
  if (this.weather.isStormy()) throw "Unable to take off, weather is stormy"
  if (!this._isInHangar(plane)) throw "Plane is not landed at this airport"
  this._removePlaneFromHangar(plane)
}

Airport.prototype._isInHangar = function(plane) {
  return this.planes.includes(plane)
}

Airport.prototype._isFull = function(){
    return this.planes.length >= 50
}

Airport.prototype._addPlaneToHangar = function(plane) {
  this.planes.push(plane)
  plane.land()
}

Airport.prototype._removePlaneFromHangar = function(plane) {
  var index = this.planes.indexOf(plane);
  this.planes.splice(index,1)
  plane.takeOff()
}
