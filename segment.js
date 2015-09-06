var Segment = function(){
	var lengthDiff = this.lengthMax - this.lengthMin;
	this.length = this.lengthMin + (Math.random() * lengthDiff);
	this.angleStop = Math.round(-4 + (Math.random() * 7));
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
