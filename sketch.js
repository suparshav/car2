var wall,thickness;
var bullet,speed,weight;



function setup() {
  createCanvas(1600,400);
  bullet=createSprite(400, 200, 50, 50);
  wall=createSprite(1200, 200, thickness,height/2);
  speed=random(2,10)
  weight=random(30,52)
  thickness=random(22,83)
bullet.velocityX=speed;
bullet.shapeColor=color("white");
wall.shapeColor=color(80,80,80);
}

function draw() {
  background("black");  
if(wall.x-bullet.x<bullet.  width/2+wall.width/2){
    bullet.velocityX=0;
    bullet.velocityY=0;
  var deformation=0.5*weight*speed*speed/22509;
if(deformation>180){
  bullet.shapeColor=color(0,255,0)
}
if(deformation<180 && deformation>100){
    bullet.shapeColor=color(230,230,0);
}
if(deformation<100){
  bullet.shapeColor=color(0,255,0);
}

}
  drawSprites();
}