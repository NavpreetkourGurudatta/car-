var Bullet,speed,weight
var Wall,thickness




function setup() {
  createCanvas(1600,400);
   Bullet = createSprite(400, 200, 50, 50);
   Bullet.velocityX = 28;
  thickness = random(23,88);
  Wall = createSprite(1200,200,thickness,height/2)
  Wall.shapeColor = 'green';
  speed = random(233,321);
  weight = random(30,52);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(hasCollided(Bullet,Wall)){
  Bullet.velocityX = 0;
  var Damage = 0.5 * speed * speed * speed /(thickness*thickness*thickness)

}
if(Damage < 10){
  Wall.shapeColor = 'red'
}
 else if(Damage > 10){
  Wall.shapeColor = 'red'
}

}
function hasCollided (LBullet,LWall){
  BulletRightEdge = LBullet.x +LBullet.width;
  WallLeftEdge =LWall.x
  if(BulletRightEdge>=WallLeftEdge){
    return true
} else{
return false;
}
}

