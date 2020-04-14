var fixedrect,movingrect;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(400, 200, 80, 50);
}

function draw() {
  background(255,255,255);
  movingrect.x=mouseX
  movingrect.y=mouseY
  drawSprites();
}