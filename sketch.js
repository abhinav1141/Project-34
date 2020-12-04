//Create variables here
var dog;
var database
var foodS,foodStock;
var dogimg,happydogimg;
function preload()
{
  //load images here
  dogimg=loadImage("images/dogImg.png");
  happydogimg=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  foodStock=database.ref("food")
  foodStock.on("value",readstock);
  foodStock.set(20);
  dog=createSprite(250,350);
  dog.addImage(dogimg);
  dog.scale=0.2;
  
  
  
  
}


function draw() {  
background(46,139,87);
if(foodS!=undefined){
  textSize(20);
  fill("red")
  
  text("PRESS UP ARROW TO FEED THE DOG",50,50);
   textSize(12);
   fill("white");
   text("food remaining: "+foodS,150,150);
}

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happydogimg);
}
if(keyWentUp(UP_ARROW)){
  dog.addImage(dogimg);
}
if(foodS===0){
  foodS=20;
}
  drawSprites();
  
  
}
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref("/").update({
    food:x
  })
}

function readstock(data){
  foodS=data.val();
  }
  
  


