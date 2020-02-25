describe('van', function() {

  beforeEach(function() {
    van = new Van()
    station = new DockingStation(20)
    bike = new Bike()
  });

  describe('collect', function() {
    it('collects broken bikes from DockingStation', function() {
      bike.reportBroken()
      station.dock(bike)
      van.collect(station, bike)
      expect(van.loadedBrokenBikes).toEqual([bike])
    });
  });

})
