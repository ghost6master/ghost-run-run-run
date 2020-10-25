var tower, towerIMG;   
var door,doorIMG,doorClub;
var climber,climberIMG,climberClub;
var ghost,ghostIMG;
var climberBottom,climberBottomClub;
var gameState = "play";
var booTunes;
function preload() {
  towerIMG=loadImage("tower.png");
  doorIMG=loadImage("door.png");
  climberIMG=loadImage("climber.png");
  ghostIMG=loadImage("ghost-standing.png");
  booTunes=loadSound("spooky.wav");
}

function setup() {
createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage("tower",towerIMG);
  tower.velocityY=1;
  doorClub=new Group();
  climberClub=new Group();
  ghost=createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostIMG);
  ghost.scale=0.3;
  climberBottomClub = new Group();
 // booTunes.loop();
}

function draw() {
  background(0);
  
  if(gameState==="play") {
     
  
  if(keyDown("left_arrow")) {
     ghost.x=ghost.x-3;
     }
  
  if(keyDown("right_arrow")) {
     ghost.x=ghost.x+3;
     }
  
   if(keyDown("space")) {
     ghost.velocityY=-5;
     }
  
  ghost.velocityY=ghost.velocityY+0.8;
  
  if(tower.y>400) {
     tower.y=300;
     }
  
  if(climberBottomClub.isTouching(ghost)||ghost.y>600) {
     ghost.destroy();
    gameState="end";
     }
    if(climberClub.isTouching(ghost)) {
     ghost.velocityY=0;
     
     }
  

  
 spawnDoors(); 
 drawSprites();
  }
    if(gameState === "end") {
    stroke("yellow");
     fill("yellow");  
    textSize(30);
    text("GAME OVER",230,250);
  }
 } 
  
 function spawnDoors() {
   if(frameCount % 240 === 0) {
      door = createSprite(200,-50);
     door.addImage(doorIMG);
     door.x=Math.round(random(120,400));
      door.velocityY=1;
     door.lifetime=800;
     doorClub.add(door);
     climber=createSprite(200,10);
     climber.addImage(climberIMG);
     climber.x=door.x;
     climber.velocityY=1;
     climber.lifetime=800;
     climberClub.add(climber);
     ghost.depth=door.depth;
     ghost.depth +=1;
     climberBottom = createSprite(200,15);
     climberBottom.width = climber.width;
     climberBottom.height = 2;
     climberBottom.x =  door.x;
     climberBottom.velocityY=1;
     climberBottom.debug=true;
     climberBottomClub.add(climberBottom);
      }
 }
  
