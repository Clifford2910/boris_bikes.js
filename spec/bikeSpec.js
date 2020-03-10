describe('bike', function() {

  beforeEach(function() {
    bike = new Bike();
  });

  describe('reportBroken', function() {
    it('reports a broken bike', function() {
      bike.reportBroken()
      expect(bike.working).toEqual(false);
    });
  });

  describe('fix', function() {
    it('fixes a bike', function() {
      bike.reportBroken()
      bike.fix()
      expect(bike.working).toEqual(true)
    })
  })

});
