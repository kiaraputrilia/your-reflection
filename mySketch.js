let capture; // creating a webcam variable

function setup() {
  // function setup
  createCanvas(920, 840); 
  capture = createCapture(
    {
      audio: false, // turn off audio
      video: { width: 920, height: 840 }, 
    },
    function () {
      // creating a function
      console.log("capture ready."); 
    }
  );
  capture.hide(); 
  noStroke(); 
  fill(50, 250,190); 
} 

function draw() {
  // function draw
  background(220,30, 20);
  capture.loadPixels()
	  let stepSize = 3
  for (let y = 0; y < height; y += stepSize) { 
    for (let x = 0; x < width; x += stepSize) {
      const i = y * width + x; 
      const darkness = (240 - capture.pixels[i * 4]) / 255;
      const radius = stepSize * darkness;
      rect(x, y, radius, radius);
    }
  }
}