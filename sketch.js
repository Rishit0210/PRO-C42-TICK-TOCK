var hr, mn, sc;

function setup() {
  createCanvas(1536,745);
}

function draw() {
  background(0);
  
  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);
  secondangle = map(sc-15,0,60,0,360);
  hourangle = map(hr-3,0,12,0,360);
  minuteangle = map(mn-15,0,60,0,360);

  noFill();
  strokeWeight(10);
  stroke("red");
  arc(800,400,380,380,990,secondangle);
  stroke(80,250,30);
  arc(800,400,355,355,990,minuteangle);
  stroke("blue");
  arc(800,400,330,330,990,hourangle);
  
  push();
  translate(800,400);
  rotate(secondangle);
  stroke("red");
  strokeWeight(10);
  line(0,0,150,0);
  pop();

  push();
  translate(800,400);
  rotate(minuteangle);
  stroke(80,250,30);
  strokeWeight(10);
  line(0,0,100,0);
  pop();

  push();
  translate(800,400);
  rotate(hourangle);
  stroke("blue");
  strokeWeight(10);
  line(0,0,50,0);
  pop();
}
