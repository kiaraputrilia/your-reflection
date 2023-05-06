let video, classifier, faceapi;
let boxes = [];
let trained = false;
const imgSize = 64;

function setup() {
  createCanvas(640, 520);
  initVideo();
  initFaceDetector();
  initFaceClassifier();
}

function draw() {
  background(0);
  image(video, 0, 0, width, height);
  drawBoxes();
}

function drawBoxes() {
  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    noFill();
    stroke(255, 0, 0); // Change the color to red (R: 255, G: 0, B: 0)
    strokeWeight(4);
    rect(box.x, box.y, box.width, box.height);

    if (box.label) {
      fill(255, 0, 0); // Change the color to red (R: 255, G: 0, B: 0)
      rect(box.x, box.y + box.height, 100, 25);

      fill(255);
      noStroke();
      textSize(18);
      text(box.label, box.x + 10, box.y + box.height + 20);
    }
  }
}


function initVideo() {
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
}

function initFaceClassifier() {
  let options = {
    inputs: [imgSize, imgSize, 4],
    task: 'imageClassification',
    debug: true,
  };
  classifier = ml5.neuralNetwork(options);
}

function initFaceDetector() {
  const detectionOptions = {
    withLandmarks: true,
    withDescriptors: false
  };

  faceapi = ml5.faceApi(video, detectionOptions, () => {
    console.log('Face API Model Loaded!');
    detectFace();
  });
}

function detectFace() {
  faceapi.detect((err, results) => {
    if (err) return console.error(err);

    boxes = [];
    if (results && results.length > 0) {
      boxes = getBoxes(results);
      if (trained) {
        for (let i = 0; i < boxes.length; i++) {
          const box = boxes[i];
          classifyFace(box);
        }
      }
    }
    detectFace();
  });
}

function getBoxes(detections) {
  const boxes = [];
  for (let i = 0; i < detections.length; i++) {
    const alignedRect = detections[i].alignedRect;

    const box = {
      x: alignedRect._box._x,
      y: alignedRect._box._y,
      width: alignedRect._box._width,
      height: alignedRect._box._height,
      label: ""
    };
    boxes.push(box);
  }

  return boxes;
}

function classifyFace(box) {
  const img = get(box.x, box.y, box.width, box.height);
  img.resize(imgSize, imgSize);
  let inputImage = { image: img };
  classifier.classify(inputImage, (error, results) => {
    if (error) return console.error(error);

    // The results are in an array ordered by confidence.
    const label = results[0].label;
    box.label = label;
  });
}
