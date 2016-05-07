export default class Segment{
  constructor(previousAngleStop){
    this.lengthMin = 10;
    this.lengthMax = 100;
    this.angleStop = Math.round(-1 + (Math.random() * 2)) + previousAngleStop;
    this.angle = this.angleStop * 45 * deg;

    var lengthDiff = this.lengthMax - this.lengthMin;
    this.length = this.lengthMin + (Math.random() * lengthDiff);
  }

  getVert(){
    return {
      x: Math.cos(this.angle) * this.length,
      y: Math.sin(this.angle) * this.length
    };
  };
  offsetVert(source, dest){
    dest.x += source.x;
    dest.y += source.y;
    return dest;
  };
}
