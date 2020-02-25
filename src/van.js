function Van() {
  this.loadedWorkingBikes = [];
  this.loadedBrokenBikes = [];
};

Van.prototype.collect = function(station, bike) {
  this.loadedBrokenBikes.push(bike)
  station.brokenBikes.remove(bike)
  return bike
};
