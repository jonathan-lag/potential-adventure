var button;
let song;
let x;
let y;
let xspeed;
let yspeed;
let dvd;
let deg = 30;


function preload() {
    pic_logo = loadImage("capybara-spin.gif");
    song = loadSound('fbbilq.mp3');
}

function setup() {
    pic_logo.resize(250,200);
    createCanvas(975, 1550);
    x = width/2;
    y = height/2;
    xspeed = 0.5;
    yspeed = 0.5;
    frameRate(144);
  
    button = createButton("Don't Click :)");
    button.size(width, height);
    button.position(0, 0);
    let col = color(50, 47, 51);
    button.style('background-color', col);
    button.style('font-size', '150px');
    button.mouseClicked(youFool);
}

function draw() {
    background(50, 47, 51);
    image(pic_logo, x, y);
    x = x + xspeed;
    y = y + yspeed;
  
    //push();
    //translate(x, y);
    //rotate(frameCount / 144.0);
    //image(pic_logo, x, y);
    //pop();

    if (x + pic_logo.width >= width) {
        xspeed = -xspeed;
        x = width - pic_logo.width;
    } else if (x <= 0) {
        xspeed = -xspeed;
        x = 0;
    }

    if (y + pic_logo.height >= height) {
        yspeed = -yspeed;
        y = height - pic_logo.height;
    } else if (y <= 0) {
        yspeed = -yspeed;
        y = 0;
    }
}

//function mousePressed() {
//  if (song.isPlaying()) {
//    song.stop();
//  } else {
//    song.play();
//  }
//}

function youFool() {  
    button.remove();
    song.play();
}
