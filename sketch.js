var a,b
function setup() {
  createCanvas(1200,1200);
  a = createSprite(400, 800, 50, 50);
  b = createSprite(400, 400, 50, 50);
   a.shapeColor = "green"
   b.shapeColor = "green"
}

function draw() {
  background(255,255,255);
  a.x = World.mouseX;
  a.y = World.mouseY;
  console.log(a.x - b.x)

  drawSprites();
  if(a.x-b.x<50 && b.x-a.x<50 && a.y-b.y<50 && b.y-a.y<50 ) {

    a.shapeColor = "red"
    b.shapeColor = "red"
 }  
  else 
  {
    a.shapeColor = "green"
   b.shapeColor = "green"

  }
}