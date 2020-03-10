function Garage(defaultCapacity = 30) {
  this.capacity = defaultCapacity;
  this.fixedBikes = [];
  this.bikesToBeFixed = [];
}

Garage.prototype.take = function (van, bike) {
  if (garage.isFull() == true) {
    throw new Error('Garage is full')
  }
  if (bike.working == true) {
    throw new Error('Can only collect broken bikes');
  }
  if (van.loadedBrokenBikes.length == 0) {
    throw new Error('Van does not contain broken bikes')
  }
  this.bikesToBeFixed.push(bike)
  van.loadedBrokenBikes.remove(bike)
  return bike
};

Garage.prototype.fix = function (bike) {
  bike.fix()
  this.fixedBikes.push(bike)
  this.bikesToBeFixed.remove(bike)
  return bike
};

Garage.prototype.give = function (van, bike) {
  if (bike.working == false) {
    throw new Error('garage does not contain working bikes');
  }
  van.loadedWorkingBikes.push(bike)
  garage.fixedBikes.remove(bike)
};

Garage.prototype.isEmpty = function() {
  if (this.fixedBikes.length <= 0) {
    return true;
  } else {
    return false;
  }
};

Garage.prototype.isFull = function() {
  if (this.fixedBikes.length + this.bikesToBeFixed.length >= this.capacity) {
    return true;
  } else {
    return false;
  }
};
