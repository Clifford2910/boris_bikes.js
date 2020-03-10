describe('van', function() {

  beforeEach(function() {
    garage = new Garage(30)
    van = new Van(10)
    bike = new Bike()
    bike2 = new Bike()
    bike3 = new Bike()
    emptyStation = new DockingStation(20)
  });

  describe('take', function() {
    it('raises an error when the van is empty', function() {
      bike.reportBroken()
      expect(function() {garage.take(van, bike)}).toThrowError('Van does not contain broken bikes');
    });

    it('raises an error when the garage is full', function() {
      garage.capacity = 1
      bike.reportBroken()
      emptyStation.dock(bike)
      van.collect(emptyStation, bike)
      garage.take(van, bike)
      expect(function() {garage.take(van, bike2)}).toThrowError('Garage is full')
    });

    it('cannot collect working bikes from the van', function() {
      expect(function() {garage.take(van, bike)}).toThrowError('Can only collect broken bikes')
    })

    it('takes broken bikes from the van', function() {
      bike.reportBroken()
      emptyStation.dock(bike)
      van.collect(emptyStation, bike)
      garage.take(van, bike)
      expect(garage.bikesToBeFixed).toEqual([bike])
    });
  });

  describe('fix', function() {
    it('garage should fix a broken bike', function() {
      bike.reportBroken()
      emptyStation.dock(bike)
      van.collect(emptyStation, bike)
      garage.take(van, bike)
      garage.fix(bike)
      expect(bike.working).toEqual(true)
    });

    it('should put the appropriate bikes in the apporpriate arrays', function() {
      bike.reportBroken()
      emptyStation.dock(bike)
      van.collect(emptyStation, bike)
      garage.take(van, bike)
      garage.fix(bike)
      expect(garage.fixedBikes).toEqual([bike])
    });
  });

  describe('give', function() {
    it('raises an error when the garage is empty', function() {
      bike.reportBroken()
      expect(function() {garage.give(van, bike)}).toThrowError('garage does not contain working bikes');
    });

    it('cannot give broken bikes to the van', function() {
      bike.reportBroken()
      emptyStation.dock(bike)
      van.collect(emptyStation, bike)
      garage.take(van, bike)
      expect(function() {garage.give(van, bike)}).toThrowError('garage does not contain working bikes')
    });

    it('garage should give fixed bikes to the van', function() {
      bike.reportBroken()
      emptyStation.dock(bike)
      van.collect(emptyStation, bike)
      garage.take(van, bike)
      garage.fix(bike)
      garage.give(van, bike)
      expect(van.loadedWorkingBikes).toEqual([bike])
    });
  });

  describe('capacity', function() {
    it('has a default capacity', function() {
      expect(garage.capacity).toEqual(30)
    });

    it('can change its default capacity', function() {
      garage.capacity = 20
      expect(garage.capacity).toEqual(20)
    });
  });

});
