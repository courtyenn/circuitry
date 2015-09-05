var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var pi = Math.PI;
var tau = pi * 2;
var deg = tau / 360;

var drawCircle = function(x, y, radius, color, lineWidth){
	context.save();
	context.translate(x, y);
	context.strokeStyle = color || '#f00';
	context.lineWidth = lineWidth || 1;
	context.beginPath();
	context.arc(0, 0, radius, 0, tau);
	context.stroke();
	context.restore();
};

var drawLine = function(x1, y1, x2, y2, color, lineWidth){
	context.save();
	context.strokeStyle = color || '#f00';
	context.lineWidth = lineWidth || 1;
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.stroke();
	context.restore();
};

drawCircle(300, 300, 200, '#668', 10);
drawLine(500, 100, 100, 500, '#668', 10);