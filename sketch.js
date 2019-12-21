var frect,mrect;
function setup() {
  createCanvas(500,500);
  frect=createSprite(150,250,50,70);
  mrect=createSprite(425,320,50,70);
  frect.shapeColor="white";
  mrect.shapeColor="yellow";
}

function draw() {
  background("red");
  mrect.x=World.mouseX;
  mrect.y=World.mouseY; 
  if(mrect.x-frect.x<mrect.width/2+frect.width/2
    && frect.x-mrect.x<mrect.width/2+frect.width/2
    &&mrect.y-frect.y<mrect.height/2+frect.height/2
    &&frect.y-mrect.y<mrect.height/2+frect.height/2){
    frect.shapeColor="black";
    mrect.shapeColor="purple";
  }
  else{
    frect.shapeColor="white";
    mrect.shapeColor="yellow";
  }
  drawSprites();
}