var wirePatterns = {
   "random" : [0, 45, 90, 135, 180, 225, 270, 315, 360],
   "cornerPattern": [90, 45, 45, 90],
   "upwards" : [135, 45, 90, 180]
};

var Wire = function(args){
   var wire = this;
   this.startPoint = args.startPoint;
   this.patternName = args.patternName;
   this.segmentCount = 4;
   this.segmentLength = Math.floor(100 * Math.random());
   this.hue = Math.round(Math.random() * 359);
   this.color = "hsl("+this.hue+", 100%, 50%)";
   this.vertList = [];

   var lastVert = this.startPoint;
   for(var x = 0; x < this.segmentCount; x++){
      var index = x%wire.patternName.length;
      var xpos =
      Math.round(Math.cos( (wirePatterns[wire.patternName][index] * (Math.PI/180) ) ) * wire.segmentLength) + lastVert.x;
      var ypos =
      Math.round(Math.sin( (wirePatterns[wire.patternName][index] * (Math.PI/180) ) ) * wire.segmentLength) + lastVert.y;
      wire.vertList.push({x: xpos, y: ypos});
      lastVert = {x: xpos, y: ypos};
   }
}

Wire.prototype.getVert = function(){

};
