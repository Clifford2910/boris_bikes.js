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
    it('raises an error when the garage is full', function() {
      garage.capacity = 1
      bike.reportBroken()
      garage.take(van, bike)
      expect(function() {garage.take(van, bike2)}).toThrowError('Garage is full')
    });

    it('takes broken bikes from the van', function() {
      garage.take(van, bike)
      bike.reportBroken()
      expect(garage.bikesToBeFixed).toEqual([bike])
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
