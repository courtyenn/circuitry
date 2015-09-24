var pi = Math.PI;
var tau = pi * 2;
var deg = tau / 360;

var Circuitry = function(args){
	this.wireCount = args.wireCount;
	this.startPoint = args.startPoint;
	this.endPoint = args.endPoint;
	this.wireSpacing = args.wireSpacing;
	this.context = args.targetCanvas.getContext('2d');
	this.context.globalCompositeOperation = 'lighter';
	this.wireList = [];
	this.nodeList = [];

	for(var i = 0; i < this.wireCount; i++){
		this.wireList.push(new Wire({
			segmentCount: 2,
			startPoint: this.startPoint
		}));
	}
};
Circuitry.prototype.doesNodeConflict = function(node){
	var circuitry = this;
	var nodeConflicts = false;
	circuitry.nodeList.forEach(function(aNode){
		var compareVert = aNode.getVert();
		var compareRadius = aNode.getRadius();
		if(compareVert.x + compareRadius < node.getVert().x - node.getRadius() ||
			compareVert.x - compareRadius > node.getVert().x + node.getRadius() &&
			compareVert.y + compareRadius < node.getVert().y - node.getRadius() ||
			compareVert.y - compareRadius > node.getVert().y + node.getRadius())
			{
				// console.log("(" + (compareVert.x + compareRadius) + "<" + (node.getVert().x - node.getRadius()) + ")");
			}
			else{
					nodeConflicts = true;
			}
	});
			return nodeConflicts;
};
Circuitry.prototype.drawCircle = function(x, y, radius, color, lineWidth){
	var context = this.context;
	context.save();
	context.translate(x, y);
	context.fillStyle = color || '#f00';
	context.lineWidth = lineWidth || 1;
	context.beginPath();
	context.arc(0, 0, radius, 0, tau);
	context.fill();
	context.restore();
};
Circuitry.prototype.drawLine = function(x1, y1, x2, y2, color, lineWidth){
	var context = this.context;
	context.save();
	context.strokeStyle = color || '#f00';
	context.lineWidth = lineWidth || 1;
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.stroke();
	context.restore();
};
Circuitry.prototype.drawWires = function(vertList, startVert, wireColor){
	var circuitry = this;
	var lastVert = startVert;
	vertList.forEach(function(vert){
		circuitry.drawLine(
			lastVert.x,
			lastVert.y,
			vert.x,
			vert.y,
			wireColor,
			3
		);
		lastVert = vert;
	});
};
Circuitry.prototype.draw = function(){
	var circuitry = this;
	circuitry.wireList.forEach(function(wire){
		var lastVert = wire.startPoint;
		circuitry.drawCircle(lastVert.x, lastVert.y, 10, wire.color, 10);
		wire.vertList.forEach(function(vert){
			circuitry.drawLine(
				lastVert.x,
				lastVert.y,
				vert.x,
				vert.y,
				wire.color,
				3
			);
			lastVert = vert;
		});
		circuitry.drawCircle(lastVert.x, lastVert.y, 10, wire.color, 10);
	});
};
Circuitry.prototype.drawRandomStart = function(){
	var circuitry = this;
	var startPoint = {};
	circuitry.wireList.forEach(function(wire){
		startPoint.x = circuitry.startPoint.x + Math.round(circuitry.wireSpacing * (Math.random() * 2 - 1));
		startPoint.y = circuitry.startPoint.y + Math.round(circuitry.wireSpacing * (Math.random() * 2 - 1));
		var startNode = new Node({
			x: startPoint.x,
			y: startPoint.y,
			color: wire.color,
			radius: 5
		});
		if(!circuitry.doesNodeConflict(startNode)){
			circuitry.drawCircle(startNode.getVert().x, startNode.getVert().y, startNode.getRadius(), startNode.getColor(), 10);
			circuitry.drawWires(wire.vertList, startPoint, wire.color);
			circuitry.nodeList.push(startNode);
		}
	});
};
