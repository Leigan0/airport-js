describe('Airport',function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = {
      land: function(){
      },
      takeOff: function(){
      }
    }
  });

  describe('#land', function(){
    it("it lands a plane", function(){
      expect(airport.land(plane)).toEqual(plane)
    })
    it("calls land on plane obj",function(){
      spyOn(plane,'land')
      airport.land(plane)
      expect(plane.land).toHaveBeenCalled();
    })
  })

  describe('#planes', function(){
    it("it stores planes", function(){
      airport.land(plane)
      expect(airport.planes).toContain(plane)
    })
  })

  describe('#take_off', function(){
    it("removes plane from planes", function(){
      airport.land(plane)
      airport.take_off(plane)
      expect(airport.planes).toEqual([])
    })
  })
})
