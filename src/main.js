import Circuitry from 'circuitry';
var canvas = document.getElementById('canvas');

var myCircuitry = new Circuitry({
	wireCount: 15,
	startPoint: {x: 300, y: 300},
	wireSpacing: 200,
	targetCanvas: canvas
});

myCircuitry.drawRandomStart();
