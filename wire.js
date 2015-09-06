var Wire = function(args){

	this.startPoint = args.startPoint;
	this.segmentList = [];
	this.vertList = [];
	var segmentDiff = this.segmentCountMax - this.segmentCountMin;
	this.segmentCount = this.segmentCountMin + Math.round((Math.random() * segmentDiff));
	this.angleStop = Math.round(-3 + (Math.random() * 6));
	this.hue = Math.round(Math.random() * 359);
	this.color = 'hsl('+this.hue+', 100%, 50%)';

	var lastVert = this.startPoint,
		vert,
		segment;

	for(var i = 0; i < this.segmentCount; i++){
		segment = new Segment();
		vert = segment.getVert();
		this.segmentList.push(segment);
		this.vertList.push(
			segment.offsetVert(lastVert, vert)
		);
		lastVert = vert;
	}
};

Wire.prototype.segmentCountMin = 3;
Wire.prototype.segmentCountMax = 10;
