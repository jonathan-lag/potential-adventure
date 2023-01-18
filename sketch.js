let x;
let y;
let xspeed;
let yspeed;
let dvd;
let deg = 30;

function preload() {
    pic_logo = loadImage("capybara.jpg");
}

function setup() {
    createCanvas(screen.width - 50, screen.height - 150);
    x = width/2;
    y = height/2;
    xspeed = 2;
    yspeed = 2;
}

function draw() {
    background(0);
    image(pic_logo, x, y);

    x = x + xspeed;
    y = y + yspeed;

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
