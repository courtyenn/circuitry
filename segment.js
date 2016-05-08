var Segment = function(patternName){
	var lengthDiff = this.lengthMax - this.lengthMin;
	this.length = this.lengthMin + (Math.random() * lengthDiff);
  var patternLength = wirePatterns[patternName].length;
  var randomAngleIndex = Math.abs(Math.round(-1 + (Math.random() * patternLength)));
	this.angleStop = wirePatterns[patternName][randomAngleIndex];
	this.angle = this.angleStop;
};

Segment.prototype.lengthMin = 10;
Segment.prototype.lengthMax = 100;

Segment.prototype.getVert = function(){
  var xPos = Math.cos(this.angle) * this.length;
  var yPos = Math.sin(this.angle) * this.length;
	return {
		x: xPos,
		y: yPos,
    angle: this.angle
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
