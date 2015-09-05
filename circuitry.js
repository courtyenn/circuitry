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

drawCircle(300, 300, 200, '#668');