function Van(defaultCapacity = 10) {
  this.capacity = defaultCapacity;
  this.loadedWorkingBikes = [];
  this.loadedBrokenBikes = [];
};

Van.prototype.collect = function(station, bike) {
  if (van.isFull() == true) {
    throw new Error('Van is full');
  }
  if (bike.working == true) {
    throw new Error('Can only collect broken bikes from stations');
  }
  if (station.brokenBikes.length == 0) {
    throw new Error('Station does not contain broken bikes')
  }
  this.loadedBrokenBikes.push(bike)
  station.brokenBikes.remove(bike)
  return bike
};

Van.prototype.distribute = function (station, bike) {
  if (this.isEmpty()) {
    throw new Error('Van does not contain working bikes');
  }
  station.workingBikes.push(bike)
  this.loadedWorkingBikes.remove(bike)
};

Van.prototype.isEmpty = function() {
  if (this.loadedWorkingBikes.length <= 0) {
    return true;
  } else {
    return false;
  }
};

Van.prototype.isFull = function() {
  if (this.loadedWorkingBikes.length + this.loadedBrokenBikes.length >= this.capacity) {
    return true;
  } else {
    return false;
  }
};
