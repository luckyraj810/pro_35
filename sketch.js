//Create variables here

var dog,dogimg,dogimg2;
var db;
var foods,foodstock;

function preload()
{
  //load images here
  dogimg1=loadImage("images/dogImg.png");
  dogimg2=loadImage("images/dogImg1.png");

}

function setup() {
  db=firebase.database();
  createCanvas(500, 500);
  
  dog=createSprite(250,300,150,150);
  dog.addImage(dogimg1);
  dog.scale=0.15;

  foodstock=db.ref('food');
  foodstock.on("value",reads);
  textSize(20);
  
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){


  writeStock(foods);
  dog.addImage(dogimg2)
}
  drawSprites();
 fill(255);
 stroke(0);
 text("food remaing : "+foods,170,200)
 textSize(13);
 text("Note:press UP_ARROW key to feed Drago Milk",130,10,300,20);
  //add styles here

}

function reads(data){
foods=data.val();
}

function writeStock(x){

if(x<=0){
  x=20;
}else
{
  x=x-1;
}
db.ref("/").update({
  food:x
})

}



