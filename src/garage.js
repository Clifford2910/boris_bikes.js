function Garage(defaultCapacity = 30) {
  this.capacity = defaultCapacity;
  this.fixedBikes = [];
  this.bikesToBeFixed = [];
}

Garage.prototype.take = function (van, bike) {
  if (garage.isFull() == true) {
    throw new Error('Garage is full')
  }
  this.bikesToBeFixed.push(bike)
  van.loadedBrokenBikes.remove(bike)
};

Garage.prototype.isFull = function() {
  if (this.fixedBikes.length + this.bikesToBeFixed.length >= this.capacity) {
    return true;
  } else {
    return false;
  }
};
