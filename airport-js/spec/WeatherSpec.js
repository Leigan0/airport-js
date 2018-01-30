describe('Weather', function() {
  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  describe('#stormy', function () {
    it('returns true if rand < 0.2', function() {
      spyOn(Math, 'random').and.returnValue(0.1)
      expect(weather.isStormy()).toBe(true)
    })

    it('returns false if rand > 0.2', function() {
      spyOn(Math, 'random').and.returnValue(0.3)
      expect(weather.isStormy()).toBe(false)
    })
  })
})
