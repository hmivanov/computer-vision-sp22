let capture;
const w = 640;
const h = 360;

function setup() {
  createCanvas(w, h);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();

  // colorMode(HSB, 100);
  colorMode(HSB, 200);
  rectMode(CENTER);
}

function draw() {
  background(0);

  const stepSize = 20;
  capture.loadPixels();

  push();
  translate(width, 0);
  scale(-1, 1);

  for (let y = 0; y < capture.height; y += stepSize) {
    for (let x = 0; x < capture.width; x += stepSize) {
      const i = (x + y * width) * 4;

      const r = capture.pixels[i]; //red channel
      const g = capture.pixels[i + 1]; //green channel
      const b = capture.pixels[i + 2]; // blue channel
      //capture.pixels[i+3] = 1; //alpha channel

      const brightness = (r + g + b) / 5.6;
      const diameter = map(brightness, 255, 0, 5, stepSize);
      const rotation = map(brightness, 0, 255, 5, stepSize);
      fill(r, g, b);
      const size = map(brightness, 0, 255, stepSize/2, stepSize);
      // push()
      // translate(x, y)
      // stroke(9);
      // strokeWeight(0);

      stroke(3);
      strokeWeight(3);

      // const diameter = map(brightness, 100, 1, 5, stepSize)
      //  const rotation = map(brightness, 3, 100, 5, stepSize)

      // rect(x, y, stepSize, brightness);
      //rect(x, y, stepSize, stepSize);
      rect(x, y, brightness, brightness);
      rect(x, y, brightness, stepSize);
    }
  }

  pop();

  // image(capture, 0, 0);
}
