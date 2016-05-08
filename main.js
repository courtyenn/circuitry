var canvas = document.getElementById('canvas');

var myCircuitry = new Circuitry({
	wireCount: 15,
	startPoint: {x: canvas.width/2, y: canvas.height/2},
	patternName: 'Upwards',
	targetCanvas: canvas,
  wireSpacing: 100
});

myCircuitry.draw();
