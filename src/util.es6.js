export default class Util{
  randomVert(centerVertex, spacing){
    var vertex = {};
    if(centerVertex && spacing){
      vertex.x = centerVertex.x + Math.round(spacing * (Math.random() * 2 - 1));
      vertex.y = centerVertex.y + Math.round(spacing * (Math.random() * 2 - 1));
    }
    else{
      console.error("No arguments specified.");
    }
    return vertex;
  };
}
