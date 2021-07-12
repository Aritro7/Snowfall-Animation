var bgImg, bgImg2, bgImg3;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);  
}

function preload(){
  bgImg=loadImage("snow1.jpg");
}

function draw() {
  background(bgImg);
  drawSprites();
}