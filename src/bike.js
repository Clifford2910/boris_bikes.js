function Bike() {
  this.working = true;
};

Bike.prototype.reportBroken = function() {
  bike.working = false;
};

Bike.prototype.fix = function() {
  bike.working = true;
};
