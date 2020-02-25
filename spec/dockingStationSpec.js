describe('dockingStation', function() {

  beforeEach(function() {
    station = new DockingStation();
    bike = new Bike();
  });

  describe('releaseBike', function() {
    it('releases a bike', function() {
      expect(station.releaseBike(bike)).toEqual(bike)
    });

    it('releases working bikes', function() {
      expect(bike.working).toEqual(true)
    });
  });

  describe('dock', function() {
    it('docks a bike', function() {
      station.dock(bike)
      expect(station.workingBikes).toEqual([bike])
    });

    it('docks a broken bike', function() {
      bike.reportBroken()
      station.dock(bike)
      expect(station.brokenBikes).toEqual([bike])
    });
  });

});
