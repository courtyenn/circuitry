var Node = function(args){
   this.filled = args.filled || true;
   this.color = args.color || "green";
   this.radius = args.radius || 2;
   this.x = args.x || 0;
   this.y = args.y || 0;
};

Node.prototype.getVert = function(){
   return {x: this.x, y: this.y};
};
Node.prototype.getRadius = function(){
   return this.radius;
};
Node.prototype.getFilled = function(){
   return this.filled;
};
Node.prototype.getColor = function(){
   return this.color;
};
