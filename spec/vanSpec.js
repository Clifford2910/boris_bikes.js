describe('van', function() {

  beforeEach(function() {
    van = new Van(10)
    bike = new Bike()
    bike2 = new Bike()
    bike3 = new Bike()
    emptyStation = new DockingStation(20)
  });

  describe('collect', function() {
    it('raises an error when the station is empty', function() {
      bike.reportBroken()
      expect(function() {van.collect(emptyStation, bike)}).toThrowError('Station does not contain broken bikes');
    });

    it('raises an error when the van is full', function() {
      van.capacity = 1
      bike.reportBroken()
      bike2.reportBroken()
      emptyStation.dock(bike)
      emptyStation.dock(bike2)
      van.collect(emptyStation, bike)
      expect(function() {van.collect(emptyStation, bike2)}).toThrowError('Van is full')
    });

    it('cannot collect working bikes from DockingStation', function() {
      emptyStation.dock(bike)
      expect(function() {van.collect(emptyStation, bike)}).toThrowError('Can only collect broken bikes from stations');
    });

    it('collects broken bikes from DockingStation', function() {
      bike.reportBroken()
      emptyStation.dock(bike)
      van.collect(emptyStation, bike)
      expect(van.loadedBrokenBikes).toEqual([bike])
    });
  });

  describe('distribute', function() {
    it('raises an error when the van is empty', function() {
      expect(function() {van.distribute(emptyStation, bike)}).toThrowError('Van does not contain working bikes')
    });

    it('cannot distribute broken bikes to stations', function() {
      bike.reportBroken()
      emptyStation.dock(bike)
      van.collect(emptyStation, bike)
      expect(function() {van.distribute(emptyStation, bike)}).toThrowError('Van does not contain working bikes')
    })

    // it('distributes working bikes to a station', function() {
    //   bike.reportBroken()
    //   emptyStation.dock(bike)
    //   van.collect(emptyStation, bike)
    //   bike.fix()
    //   van.distribute(emptyStation, bike)
    //   expect(emptyStation.workingBikes).toEqual([bike])
    // })
  });

  describe('capacity', function() {
    it('has a default capacity', function() {
      expect(van.capacity).toEqual(10)
    });

    it('can change its default capacity', function() {
      van.capacity = 20
      expect(van.capacity).toEqual(20)
    });
  });

})
