var bullet1;
var colls1;
var speed;
var weight;
var deformation;
var width1;
var thickness;
function setup()
{
    createCanvas(1200,600);

    speed = random(40,80);
    weight = random(500,1200);

    bullet1 = createSprite(200,300,30,10);
    bullet1.shapeColor = "white";

    colls1 = createSprite(1000,300,random(40,65),50);
    colls1.shapeColor = "grey";

    thickness = colls1.width;

    bullet1.velocityX = speed;
}
function draw(){
  background("black");
if(hasCollided(bullet1,colls1)){
    bullet1.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      colls1.shapeColor = color(255,0,0);
    }
    if(damage<10){
      colls1.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
