var Wire = function(args){
  this.startPoint = args.startPoint;
  this.patternName = args.patternName;
  this.segmentCount = 4;
  this.segmentLength = 30;
  this.hue = Math.round(Math.random() * 359);
  this.color = "hsl("+this.hue+", 100%, 50%)";
  this.vertList = [];
  this.segmentList = [];

  var wire = this;
  var lastVert = wire.startPoint;
  lastVert.previousAngleStop = 0;
  var vert, segment;

  var patternIsRandom = !wirePatterns || wirePatterns[wire.patternName].length === 0;
  for(var i = 0; i < wire.segmentCount; i++){
    segment = new Segment(this.patternName);
    vert = segment.getVert();
    wire.segmentList.push(segment);
    wire.vertList.push(
      segment.offsetVert(lastVert, vert)
    );
    lastVert = vert;
  }
}

Wire.prototype.segmentCountMin = 3;
Wire.prototype.segmentCountMax = 10;
Wire.prototype.getVertList = function(){
  return this.vertList;
};
