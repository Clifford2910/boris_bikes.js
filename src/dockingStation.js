function DockingStation() {
  this.workingBikes = [];
  this.brokenBikes = [];
};

DockingStation.prototype.release = function(bike) {
  if (this.isEmpty()) {
    throw new Error('Docking station empty');
  }
  this.workingBikes.pop()
  return bike
};

DockingStation.prototype.dock = function(bike) {
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
