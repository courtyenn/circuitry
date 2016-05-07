import Circuitry from 'circuitry';
var canvas = document.getElementById('canvas');

var myCircuitry = new Circuitry({
  wireCount: 15,
  startPoint: {x: 300, y: canvas.height},
  patternName: 'upwards',
  targetCanvas: canvas
});

myCircuitry.drawPattern();
