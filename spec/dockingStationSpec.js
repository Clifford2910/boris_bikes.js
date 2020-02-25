describe('dockingStation', function() {

  beforeEach(function() {
    station = new DockingStation(20);
    bike = new Bike();
  });

  describe('releaseBike', function() {
    it('raises an error when there are no bikes available', function() {
      expect(function() {station.releaseBike()}).toThrowError('Docking station empty');
    });

    it('releases a bike', function() {
      station.dock(bike)
      expect(station.releaseBike()).toEqual(bike)
    });

    it('releases working bikes', function() {
      expect(bike.working).toEqual(true)
    });

    it('cannot release broken bikes', function() {
      bike.reportBroken()
      station.dock(bike)
      expect(function() {station.releaseBike()}).toThrowError('Docking station empty');
    });
  });

  describe('dock', function() {
    it('raises an error when there are too many bikes docked', function() {
      station.capacity = 1
      station.dock(bike)
      expect(function() {station.dock(bike)}).toThrowError('Docking station full')
    });

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

  describe('capacity', function() {
    it('has a default capacity', function() {
      expect(station.capacity).toEqual(20)
    });

    it('can change its default capacity', function() {
      station.capacity = 30
      expect(station.capacity).toEqual(30)
    });
  });

});
