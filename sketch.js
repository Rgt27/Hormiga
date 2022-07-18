var bg,bgImg;

var player

function setup() {  
  createCanvas(windowWidth,windowHeight);
  player= createSprite (20,25,18,18);
 player.shapeColor="blue";
}



function draw() {
 background("black"); 


 



if(keyDown("space")){

  player.velocityY=10;
}



 drawSprites();
 
}
