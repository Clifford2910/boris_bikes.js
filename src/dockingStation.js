function DockingStation(defaultCapacity = 20) {
  this.capacity = defaultCapacity;
  this.workingBikes = [];
  this.brokenBikes = [];
};

DockingStation.prototype.releaseBike = function() {
  if (this.isEmpty()) {
    throw new Error('Docking station empty');
  }
  this.workingBikes.pop()
  return bike
};

DockingStation.prototype.dock = function(bike) {
  if (this.isFull()) {
    throw new Error('Docking station full');
  }
  if (bike.working == false) {
    this.brokenBikes.push(bike)
  } else {
    this.workingBikes.push(bike)
  }
  return bike
};

DockingStation.prototype.isEmpty = function() {
  if (this.workingBikes.length <= 0) {
    return true;
  } else {
    return false;
  }
};

DockingStation.prototype.isFull = function() {
  if (this.workingBikes.length + this.brokenBikes.length >= this.capacity) {
    return true;
  } else {
    return false;
  }
};
