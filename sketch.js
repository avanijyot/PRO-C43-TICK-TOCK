function setup() {
  
  //to create the canvas
  createCanvas(400, 400);
  
  //to set the angle mode to degrees
  angleMode(DEGREES);
  
}

function draw() {
  
  //to give the background
  background(0);
  
  //to translate and rotate
  translate(200, 200);
  rotate(-90);
  
  //to use the hour, minute and second function
  let hr = hour();
  let mn = minute();
  let sc  = second();
   
  //to set the strokeWeight and noFill
  strokeWeight(8);
  noFill();
  
  //to create the arc which represents secondAngle
  stroke(255, 100, 150);
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);
  
  //to create the arc which represents secondAngle
  stroke(150, 100, 255);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);
  
  //to create the arc which represents secondAngle
  stroke(150, 250, 100);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);
  
  //to create the second hand
  push();
  rotate(secondAngle);
  stroke(255, 100, 150);
  line(0, 0, 100, 0);
  pop();
  
  //to create the minute hand
  push();
  rotate(minuteAngle);
  stroke(150, 100, 255);
  line(0, 0, 75, 0);
  pop();
  
  //to create the hour hand
  push();
  rotate(hourAngle);
  stroke(150, 250, 100);
  line(0, 0, 50, 0);
  pop();
  
  //to create the point
  stroke(255);
  point(0, 0);

}