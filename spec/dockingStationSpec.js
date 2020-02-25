describe('dockingStation', function() {

  beforeEach(function() {
    station = new DockingStation();
    bike = new Bike();
  });

  describe('releaseBike', function() {
    it('releases a bike', function() {
      station.dock(bike)
      expect(station.release(bike)).toEqual(bike)
    });

    it('releases working bikes', function() {
      expect(bike.working).toEqual(true)
    });

    it('cannot release broken bikes', function() {
      bike.reportBroken()
      station.dock(bike)
      expect(function() {station.release(bike)}).toThrowError('Docking station empty');
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
