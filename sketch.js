var soldier, soldierImg;
var backgroundImg ;
var flagImg;

function preload(){
  
  soldierImg = loadImage("soldier.png");
  backgroundImg = loadImage("bck.png");
 
  flagImg = loadImage("flag.png");
  

}

function setup() {
  createCanvas(1520, 740);

 
  
  //create a soldier sprite
  soldier = createSprite(50,490,20,50);
 soldier.addImage("soldier", soldierImg );
  
  //adding scale and position to soldier
  soldier.scale = 0.2;


  flag = createSprite(1350, 200, 50, 80);
  flag.addImage("flag", flagImg);
  flag.scale = 0.6;


 

}

function draw() {
  background(backgroundImg);
   
   
  
  drawSprites();
}



