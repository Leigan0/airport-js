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
  })
})
