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
  it('has a default capacity of 50', function(){
    expect(airport.capacity).toEqual(50)
  })
  it('knows if an airport is not at full capacity', function(){
    expect(airport._isFull()).toBe(false)
  })

  it('knows if an airport is at full capacity', function(){
    weather.isStormy.and.returnValue(false);
    var times = airport.capacity;
    for(var i=0; i < times; i++){
    airport.land(plane);
    }
    expect(airport._isFull()).toBe(true)
  })

  describe('under normal conditions', function(){

    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
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

    it('will not allow plane to land if airport is at capacity', function(){
      weather.isStormy.and.returnValue(false);
      var times = airport.capacity;
      for(var i=0; i < times; i++){
      airport.land(plane);
      }
      expect(function() { airport.land(plane)}).toThrow("Unable to land, airport is at full capacity")
    })
    it('will not allow plane to take off if not in hangar', function(){
      expect(function() { airport.takeOff(plane)}).toThrow("Plane is not landed at this airport")
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
