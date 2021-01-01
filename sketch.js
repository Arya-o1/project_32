const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var player;
var ground1, ground2, ground3;

var block15, block16, block17, block18, block19, block20, block21;
var block22;
var sling;
var player;

var ball;
var img;

var bg = "grey";

var score = 0 ;

function preload(){
  // img = loadImage("hexagon (1).png");
  getBackgroundImg();

}

function setup() {
  var canvas =  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;


  block1 = new Block(370,460,40,40);
  block2 = new Block(410,460,40,40);
  block3 = new Block(450,460,40,40);
  block4 = new Block(490,460,40,40);
  block5 = new Block(530,460,40,40);



  block6 = new Block(390,420,40,40);
  block7 = new Block(430,420,40,40);
  block8 = new Block(470,420,40,40);
  block9 = new Block(510,420,40,40);



  bolck10 = new Block(410,370,40,40);
  block11 = new Block(450,370,40,40);
  block12 = new Block(490,370,40,40);


  block13 = new Block(450,330,40,40);

  ground1 = new Ground(450,485,250,10);
  ground2 = new Ground(680,350,200,10);
  ground3 = new Ground(600, 600, 1200, 10)


  block15 = new Block(650,330,30,30);
  block14 = new Block(620,330,30,30);
  block16 = new Block(680,330,30,30);
  block17 = new Block(710,330,30,30);
  block18 = new Block(740,330,30,30);

  block19 = new Block(635,300,30,30);
  block20 = new Block(665,300,30,30);
  block21 = new Block(695,300,30,30);
  block22 = new Block(725,300,30,30);

  block23 = new Block(680,250,40,40);
  player = new Player(150,270,45,40);


  sling = new Chain(player.body,{x:150, y:260});

}

function draw() {
  background(bg);
  Engine.update(engine);

  textSize(35);
  fill("red");
  text("Score :" + score,200,50);

  fill(rgb(135, 205, 236));

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("lightBlue");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill("lightPink");
  bolck10.display();
  block11.display();
  block12.display();
  fill(rgb(47, 48, 48));

  block13.display();

  fill(rgb(135, 205, 236));
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  fill("lightGreen");

  block19.display();
  block20.display();
  block21.display();
  block22.display();
  fill("lime");

  block23.display();
 

  ground1.display();
  ground2.display();
  ground3.display();

  player.display();

  sling.display();
}


function mouseDragged(){
  Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
	if(keyCode === 32){        
		Matter.Body.setPosition(player.body,{x:150, y:270})
		sling.attach(player.body);
	}
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "white";
  }
  else{
      bg = "black";
  }

}