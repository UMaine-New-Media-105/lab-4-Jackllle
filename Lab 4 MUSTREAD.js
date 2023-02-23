function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  addEllipse(0,50,50,50,50,150,20,100);
  addTriangle(0, 10, 50, 50, 100, 50, 150, 0, 200);
  addRect(50, 50, 50, 50, 250, 10, 0);
  addBall(200,200,100,350,0,100)
}

function addEllipse(x, y, w, h, R, G, B) {
  push();
  fill(R,G,B)
  ellipse(50, 50, 100, 100);
  pop();
}
function addTriangle(x, y, x2, y2, x3, y3, R, G, B) {
  push();
  triangle(x, y, x2, y2, x3, y3);
  fill(R, G, B);
  pop();
}

function addRect(x, y, size, R, G, B) {
  push();
  fill(R, G, B);
  rect(x, y, size);
  pop();
}

function addBall(x, y, size, R, G, B) {
  push();
  fill(R, G, B);
  
  
  if(mouseIsPressed){
    ellipse(250,250,200,100,100)
  }else{rect(x, y, size)}
    
  pop();
}
