describe('Airport',function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = "plane"
  });

  describe('#land', function(){
    it("it lands a plane", function(){
      expect(airport.land(plane)).toEqual(plane)
    })
  })

  describe('#planes', function(){
    it("it stores planes", function(){
      airport.land(plane)
      expect(airport.hangar()).toContain(plane)
    })
  })

  describe('#take_off', function(){
    it("removes plane from planes", function(){
      airport.land(plane)
      airport.take_off(plane)
      expect(airport.hangar()).toEqual([])
    })
  })
})
