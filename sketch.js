
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trashpaper,trashcan1, trashcan2,trashcan3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
       

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
fill(440);
trashpaper = new Trash(100,200,40,40)

trashcan1 = new  Trashcan(480,680,20,120)

	trashcan2 = new Trashcan(680,680,20,120)
 trashcan3= new Trashcan(580,680,180,20)
 
 ground = new Ground(600,height,1200,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(40);
  trashpaper.display()
  trashcan1.display()
 trashcan2.display()
  
  trashcan3.display()
  ground.display();
 // keyPressed()
  drawSprites();
 
}

function keyPressed(){
//the trash  has to jump
if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(trashpaper, trashpaper.position, {x:85,y:-85})
  Matter.Body.setStatic(traspaper,true)
  }



}

