function DockingStation() {
  this.workingBikes = [];
  this.brokenBikes = [];
};

DockingStation.prototype.releaseBike = function(bike) {
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
