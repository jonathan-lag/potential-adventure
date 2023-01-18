function setup() {
    createCanvas(600, 1000);
  }
  
  function draw() {
    background(225);  
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }
