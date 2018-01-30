describe('Plane',function(){
  var airport;
  var plane;

  beforeEach(function(){
    plane = new Plane
  });
    it("is flying", function(){
      expect(plane.flying).toBe(true)
    })
  })
