function Bike() {
  this.working = true;
};

Bike.prototype.reportBroken = function() {
  bike.working = false;
};

Bike.prototype.fix = function() {
  bike.working = true;
};

Array.prototype.remove = function(value) {
    if (this.indexOf(value) != -1) {
        this.splice(this.indexOf(value), 1);
        return true;
    }
    return false;
}
