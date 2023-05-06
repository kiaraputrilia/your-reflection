// clmtrackr + p5 smile detection example. Face Tracking example created by Kyle McDonald revised by Xin Xin, 2020
// https://kylemcdonald.github.io/cv-examples/

let capture;
let tracker
let positions;

function setup() {

  // load p5 functions:
  createCanvas(windowWidth, windowHeight);

  capture = createCapture(VIDEO);
  capture.elt.setAttribute('playsinline', ''); // this line makes your program works on iPhone 11

  capture.size(width, height);
  capture.hide();

  // load clmtrackr functions:
  tracker = new clm.tracker(); // create a new clmtrackr object
  tracker.init(); // initialize the object
  tracker.start(capture.elt); // start tracking the video element capture.elt
}

function draw() {
  image(capture, 0, 0, width, height);
  positions = tracker.getCurrentPosition(); // updates the tracker with current positions

  // draw face outline
  noFill();
  stroke(255);

  beginShape();
  for (let i = 0; i < positions.length; i++) {
    vertex(positions[i][0], positions[i][1]);
  }
  endShape();

  // draw dots + numbers
  noStroke();
  for (let i = 0; i < positions.length; i++) {
    fill(0, 255, 0);
    ellipse(positions[i][0], positions[i][1], 4, 4);
    text(i, positions[i][0], positions[i][1]);
  }
  
    if (positions.length > 0) {
      let mouthLeft = createVector(positions[44][0], positions[44][1]);
      let mouthRight = createVector(positions[50][0], positions[50][1]);
      let smile = mouthLeft.dist(mouthRight);
      print(smile);
      
    // smile bar
    rect(20, 20, smile * 3, 20);
}
}