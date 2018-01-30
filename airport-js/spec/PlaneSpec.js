describe('Plane',function(){
  var airport;
  var plane;

  beforeEach(function(){
    plane = new Plane()
  });

  it("is flying", function(){
    expect(plane.isFlying).toBe(true)
  })

  describe('#land', function() {
    it('is no longer flying', function() {
      plane.land()
      expect(plane.isFlying).toBe(false)
    })
    it('will raise error if plane is not flying', function(){
      plane.land()
      expect(function() { plane.land()}).toThrow("Plane is not in the air")
    })
  })

  describe('#takeOff', function() {
    it('is now flying', function() {
      plane.land()
      plane.takeOff()
      expect(plane.isFlying).toBe(true)
    })
    it('will raise error if plane is not grounded', function(){
      expect(function() { plane.takeOff()}).toThrow("Plane is not on the ground")
    })
  })
})
