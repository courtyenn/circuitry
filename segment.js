var Segment = function(previousAngleStop){
  var lengthDiff = this.lengthMax - this.lengthMin;
  this.length = this.lengthMin + (Math.random() * lengthDiff);
  this.angleStop = Math.round(-1 + (Math.random() * 2)) + previousAngleStop;
  this.angle = this.angleStop * 45 * deg;
};

Segment.prototype.lengthMin = 10;
Segment.prototype.lengthMax = 100;

Segment.prototype.getVert = function(){
  return {
    x: Math.cos(this.angle) * this.length,
    y: Math.sin(this.angle) * this.length
  };
};

Segment.prototype.offsetVert = function(source, dest){
  dest.x += source.x;
  dest.y += source.y;
  return dest;
};

Segment.prototype.roundToTheNearest45 = function(num){
  var number = Math.round(num);
  var ranges = [0, 45, 90, 135, 180, 215, 270, 315];
  var lowestBound = 0;
  var highestBound = 360;

  for( var x = 0; x < ranges.length; x++) {
    if(number > ranges[x]){
      lowestBound = ranges[x];
    }
    else {
      highestBound = ranges[x];
      break;
    }
  }

  var highestBoundDifference = highestBound - number;
  var lowestBoundDifference = number - lowestBound;

  return highestBoundDifference > lowestBoundDifference ? highestBoundDifference : lowestBoundDifference;
};
