var Wire = function(args){
  this.startPoint = args.startPoint;
  this.patternName = args.patternName;
  this.segmentCount = 4;
  this.segmentLength = 30;
  this.hue = Math.round(Math.random() * 359);
  this.color = "hsl("+this.hue+", 100%, 50%)";
  this.vertList = [];

  var wire = this;
  var lastVert = wire.startPoint;
  lastVert.previousAngleStop = 0;
  var vert, segment;

  var patternIsRandom = !wirePatterns || wirePatterns[wire.patternName].length === 0;
  if(!patternIsRandom){
    for(var x = 0; x < wire.segmentCount; x++){
      var xpos =
      Math.round(Math.cos(wirePatterns[wire.patternName][x]) * wire.segmentLength) + lastVert.x;
      var ypos =
      Math.round(Math.sin(wirePatterns[wire.patternName][x]) * wire.segmentLength) + lastVert.y;
      wire.vertList.push({x: xpos, y: ypos});
      lastVert = {x: xpos, y: ypos};
    }
    console.log("done:", wire.vertList);
  }
  else {
    for(var i = 0; i < wire.segmentCount; i++){
      segment = new Segment(lastVert.previousAngleStop);
      vert = segment.getVert();
      wire.segmentList.push(segment);
      wire.vertList.push(
        segment.offsetVert(lastVert, vert)
      );
      lastVert = vert;
    }
  }
}

Wire.prototype.segmentCountMin = 3;
Wire.prototype.segmentCountMax = 10;
Wire.prototype.getVertList = function(){
	return this.vertList;
};
