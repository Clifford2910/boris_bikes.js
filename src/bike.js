function Bike() {
  this.working = false;
};

Bike.prototype.reportBroken = function(bike) {
  this.working = false;
};

Bike.prototype.fix = function(bike) {
  this.working = true;
};
