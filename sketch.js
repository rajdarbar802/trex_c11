var trex ,trex_running;
var ground,groundimg;
var invisibleGround;

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png") 
  groundimg=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200) 

  //create a trex sprite
  trex=createSprite(50,160,20,50)
  trex.addAnimation("running",trex_running)
  trex.scale=0.5

  ground=createSprite(300,180,600,20)
  ground.addImage("ground",groundimg)
  ground.velocityX=-2
  ground.x=ground.width/2

  invisibleGround=createSprite(300,190,600,10)
  invisibleGround.visible=false
  edges=createEdgeSprites()
}

function draw(){
  background("white")

  console.log(ground.x)

  if(keyDown("space")){
    trex.velocityY=-10
  }

  if(ground.x<0){
    ground.x=ground.width/2
  }

  trex.velocityY=trex.velocityY+0.5
  trex.collide(invisibleGround)

  drawSprites()
}
