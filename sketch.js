const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;

var canvas;
var pre;
var gameState=0;
var pre1;
var engine,world;
var distancing;
var bg;
var his;
var imp;
var life;
var immunity;
var infora;
var ache;
var imag1;
var hand,water,handwater;
var imag2;
function preload(){
   bg=loadImage("images/coronavirus.jpg");
   imag=loadImage("images/girl.jpg");
   hand=loadImage("images/newhands.png");
   water=loadImage("images/water.png");
   handwater=loadImage("images/hands.jpg");
imag2=loadImage("images/boy.png");
}


function setup() {
 engine= Engine.create();
  world=engine.world;
 canvas= createCanvas(displayWidth,displayHeight);
  pre=new namePage();
pre1=new Precaution();
img1=createSprite(10,175);
img1.scale=0.2;
img1.addImage("hand",hand);
img2=createSprite(displayWidth-30,175);
img2.scale=0.2;
img2.addImage("water",water);
img1.velocityX=6;
img2.velocityX=-6;
img1.visible=false;
img2.visible=false;
bodya=Bodies.rectangle(150,325,50,50);
bodyb=Bodies.rectangle(displayWidth-20,325,50,50);
distancing=new Const(bodya,bodyb)
his=new History();
imp=new Impact();
life=new Lifetime();
immunity=new Immunity();
infora=new Information();
ache=new Acheivements();
}

function draw() {
  Engine.update(engine);
  background(bg);  
  
  pre.display();
  if(gameState === 1){
    pre.hide();
    pre1.display();
    img1.visible=true;
   img2.visible=true;
   if(img1.collide(img2)){
     img1.destroy();
     img2.destroy();
     img3=createSprite(displayWidth/2,200);
     img3.addImage("handwater",handwater);
     img3.scale=0.2;
   };
   distancing.display();
  imageMode("CENTER");
   image(imag,bodya.position.x,bodya.position.y,100,100);
   rect(bodyb.position.x,bodyb.position.y,bodyb.width,bodyb.height);
   image(imag2,bodyb.position.x,bodyb.position.y,100,100);
  };
  if(gameState === 3){
    pre.hide();
    immunity.display();
  };
  if(gameState === 4){
    pre.hide();
    life.display();
  };
  if(gameState === 5){
    pre.hide();
    his.display();
  };
  if(gameState === 6){
    pre.hide();
    infora.display();
  };
  if(gameState === 7){
    pre.hide();
    ache.display();
  };
  if(gameState === 8){
    pre.hide();
imp.display();
  };
  pre1.back.mousePressed(()=>{
    pre.display();
   // gameState=0;
    })
  
  
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(bodya,{x:mouseX,y:mouseY});
}