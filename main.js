const TAU = Math.PI * 2 // 360 degrees, but in radians
const DEG_45 = TAU / 8 // 45 degrees, but in radians
const DEG_60 = TAU / 6 // 60 degrees, but in radians
const canvasEle = document.getElementById('canvas')
const context = canvasEle.getContext('2d')

const width = canvasEle.clientWidth
const height = canvasEle.clientHeight
const halfWidth = width / 2
const halfHeight = height / 2
const squareSize = Math.min(width, height)

const drawCircle = (x, y, radius, color, lineWidth) => {
  context.save();
  context.translate(x, y);
  context.fillStyle = color || '#f00';
  context.strokeStyle = color || '#f00';
  context.lineWidth = lineWidth || 1;
  context.beginPath();
  context.arc(0, 0, radius, 0, TAU);
  context.stroke();
  context.restore();
};

const drawLine = (x1, y1, x2, y2, color, lineWidth) => {
  context.save();
  context.strokeStyle = color || '#f00';
  context.lineWidth = lineWidth || 1;
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.restore();
};

const drawLeg = ({x, y, angle}) => {
  drawCircle(x, y, 0.1, '#ffffff', 0.05)
  const radian = angle * DEG_45
  const legLength = 0.5
  // Cosines ALWAYS give you X values!
  // Sines ALWAYS give you Y values!
  // BOTH always return from -1 to +1
  // 1.) Start at offset, (x or y) then 
  // 2.) Add radian
  // 3.) Multiply by fractions to make large/small
  const nextX = x + (Math.cos(radian) * legLength)
  const nextY = y + (Math.sin(radian) * legLength)
  drawLine(x, y, nextX, nextY, '#999999', 0.05)
}


const roboSpider = [
  {x:1.000000, y:-1.400000, angle: 0},
  {x:1.000000, y:-1.000000, angle: 0},
  {x:1.000000, y:-0.600000, angle: 0},
  {x:1.000000, y:-0.200000, angle: 0},
  {x:1.000000, y:0.200000, angle: 0},
  {x:1.000000, y:0.600000, angle: 0},
  {x:1.000000, y:1.000000, angle: 0},
  {x:1.000000, y:1.400000, angle: 0},
  {x:-1.000000, y:-1.400000, angle: 4},
  {x:-1.000000, y:-1.000000, angle: 4},
  {x:-1.000000, y:-0.600000, angle: 4},
  {x:-1.000000, y:-0.200000, angle: 4},
  {x:-1.000000, y:0.200000, angle: 4},
  {x:-1.000000, y:0.600000, angle: 4},
  {x:-1.000000, y:1.000000, angle: 4},
  {x:-1.000000, y:1.400000, angle: 4},
]

const squareBot = [
  {x:1.200000, y:0.800000, angle: 0},
  {x:1.200000, y:0.400000, angle: 0},
  {x:1.200000, y:0.000000, angle: 0},
  {x:1.200000, y:-0.400000, angle: 0},
  {x:1.200000, y:-0.800000, angle: 0},
  {x:-1.200000, y:0.800000, angle: 4},
  {x:-1.200000, y:0.400000, angle: 4},
  {x:-1.200000, y:0.000000, angle: 4},
  {x:-1.200000, y:-0.400000, angle: 4},
  {x:-1.200000, y:-0.800000, angle: 4},
  {x: 0.800000, y:1.200000, angle: 2},
  {x: 0.400000, y:1.200000, angle: 2},
  {x: 0.000000, y:1.200000, angle: 2},
  {x:-0.400000, y:1.200000, angle: 2},
  {x:-0.800000, y:1.200000, angle: 2},
  {x: 0.8000000, y:-1.20000, angle: 6},
  {x: 0.4000000, y:-1.20000, angle: 6},
  {x: 0.0000000, y:-1.20000, angle: 6},
  {x:-0.4000000, y:-1.20000, angle: 6},
  {x:-0.8000000, y:-1.20000, angle: 6},
]

const youSpinMeRightRound = (timestamp) => {
  requestAnimationFrame(youSpinMeRightRound)
  context.save()
  context.clearRect(0,0, width, height)
  context.translate(halfWidth, halfHeight)
  context.scale(squareSize / 12, squareSize / 12)  

  context.save()
  context.rotate(TAU * timestamp / 8000)
  roboSpider.forEach(drawLeg)
  context.restore()

  context.save()
  context.rotate(TAU * timestamp / -4000)
  squareBot.forEach(drawLeg)
  context.restore()

  context.restore()
}

requestAnimationFrame(youSpinMeRightRound)

// context.clearRect(0,0, width, height)
// context.translate(halfWidth, halfHeight)
// context.scale(squareSize / 12, squareSize / 12)  
// // context.rotate(TAU * timestamp / 4000)
// roboSpider.forEach(drawLeg)
// squareBot.forEach(drawLeg)
