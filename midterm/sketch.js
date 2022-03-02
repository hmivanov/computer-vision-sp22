let w = 640;
let h = 480;
let capture;


function setup() {
  createCanvas(innerWidth, innerHeight);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();

  colorMode(HSB, 255);
  
  rectMode(CENTER)
}

function draw() {
  background(100, 0, 0);



  // push();
  //   scale(setScale(), setScale());
  //   translate(w,0);
  //   scale(-1, 1);
  //   image(capture, 0, 0);
  // pop();
  const stepSize = 20 ;
  capture.loadPixels();
  
  push();
    // scale(setScale(), setScale());
    translate(width, 0);
    scale(-setScale(), setScale());
  
  for(let y = 0; y < capture.height; y += stepSize) {
    for(let x = 0; x < capture.width; x += stepSize) {
      
      const i = (x + y * width) * 4; 
      
      const r = capture.pixels[i]; //red channel
      const g = capture.pixels[i+1]; //green channel
      const b = capture.pixels[i+2]; // blue channel
      //capture.pixels[i+3] = 1; //alpha channel
      
      const brightness = (r + g + b) / 4
       const diameter = map(brightness, 255, 0, 5, stepSize)
       const rotation = map(brightness, 0, 255, 5, stepSize)
      fill(r,g,b);
       const size = map(brightness, 0, 255, stepSize/2, stepSize)
      // push()
      // translate(x, y)
      // stroke(0);
      // strokeWeight(0);
      noStroke();
      
      rect(x, y, 3, 9);
    
    
      rect(x, y, 3/2, brightness)
    }
  }
  
  // print("hello")
  pop();
  
}



function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}

function setScale() {
  if(innerWidth/w >= innerHeight/h) { return innerWidth/w; }
  else { return innerHeight/h; }
}