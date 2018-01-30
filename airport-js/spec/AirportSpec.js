describe('Airport',function(){
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    weather = jasmine.createSpyObj('weather',['isStormy'])
    airport = new Airport(weather);
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff'])
  })

  it('has no planes by default',function(){
    expect(airport.planes).toEqual([])
  })

  describe('under normal conditions', function(){

    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
    })

    it("it lands a plane", function(){
      expect(airport.land(plane)).toEqual(plane)
    })
    it("calls land on plane obj",function(){
      airport.land(plane)
      expect(plane.land).toHaveBeenCalled();
    })
    it("it stores planes", function(){
      airport.land(plane)
      expect(airport.planes).toContain(plane)
    })
    it("removes plane from planes", function(){
      airport.land(plane)
      airport.takeOff(plane)
      expect(airport.planes).toEqual([])
    })
    it("calls takeOff on plane obj", function(){
      airport.land(plane)
      airport.takeOff(plane)
      expect(plane.takeOff).toHaveBeenCalled();
    })
  })

  describe('under stormy conditions', function(){

    beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    })

    it('will not allow plane to land in stormy weather', function(){
      expect(function() { airport.land(plane)}).toThrow("Unable to land, weather is stormy")
    })

    it('will not allow a plane to take off in stormy weather', function(){
      expect(function() { airport.takeOff(plane)}).toThrow("Unable to take off, weather is stormy")
    })
  })
})
