var canvas = document.getElementById('canvas');

var myCircuitry = new Circuitry({
	wireCount: 20,
	startPoint: {x: 300, y: 300},
	wireSpacing: 10,
	targetCanvas: canvas
});

myCircuitry.drawRandomStart();
