var corona,coronaImg;
var boy,boyImg;
var obstacles,obstacleImg;
var food;
var power;
var road,road1,road2,road3,road4,road5,road6;
var groundImg;
var house,houseImg;

function preload(){
  coronaImg=loadImage("images/v1.png");
  groundImg=loadImage("images/grass2.jpg");
  //houseImg=loadImage("images/house.jpg");
  boyImg=loadImage("images/boy6.png");
}

function setup() {
  createCanvas(1350,655);
 // boy=createSprite(200,400,40,50);
 road=createSprite(500,200,1700,40);
 road1=createSprite(500,600,1700,40);
 road2=createSprite(800,400,40,800);
 road3=createSprite(100,400,40,800);
 road4=createSprite(460,400,40,800);
 road5=createSprite(1100,400,40,800);
 road6=createSprite(500,398,1700,40);
 boy=createSprite(458,395,20,30);
 boy.addImage(boyImg);
 boy.scale=0.8;
}

function draw() {
  background(groundImg);  

  spawncorona4();
  spawncorona3();
  spawncorona2();
  spawncorona();
  drawSprites();
}

  function spawncorona(){
    if(frameCount%180 === 0){
      corona=createSprite(200,300,50,20);
      corona.x= 2;
      corona.y= 200;
      corona.velocityX=(Math.round(random(2,8)));
      corona.addImage(coronaImg);
      corona.scale=0.1;
    }
  }

  function spawncorona2(){
    if(frameCount%200 === 0){
      corona=createSprite(200,300,50,20);
      corona.x= 2;
      corona.y= 600;
      corona.velocityX=(Math.round(random(2,8)));
      corona.addImage(coronaImg);
      corona.scale=0.1;
    }
  }

  function spawncorona3(){
    if(frameCount%220 === 0){
      corona=createSprite(200,300,50,20);
      corona.x= 800;
      corona.y= 2;
      corona.velocityY=(Math.round(random(2,8)));
      corona.addImage(coronaImg);
      corona.scale=0.1;
    }
  }

  function spawncorona4(){
    if(frameCount%240 === 0){
      corona=createSprite(200,300,50,20);
      corona.x= 100;
      corona.y= 750;
      corona.velocityY=(Math.round(random(-2,-8)));
      corona.addImage(coronaImg);
      corona.scale=0.1;
    }
  }