export default class Node{
  constructor(args){
    this.filled = args.filled || true;
    this.color = args.color || "green";
    this.radius = args.radius || 2;
    this.x = args.x || 0;
    this.y = args.y || 0;
  }

  getVert(){
    return {x: this.x, y: this.y};
  }
  getRadius(){
    return this.radius;
  }
  getFill(){
    return this.filled;
  }
  getColor(){
    return this.color;
  }
}
