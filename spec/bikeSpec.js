describe('bike', function() {

  beforeEach(function() {
    bike = new Bike();
  });

  describe('reportBroken', function() {
    it('reports a broken bike', function() {
      bike.reportBroken
      expect(bike.working).toEqual(false);
    });
  });

});
