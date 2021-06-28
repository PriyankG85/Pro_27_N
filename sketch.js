
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, plane, stone, rubber;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane=new Plane(width/2, height, width, 10);
	stone=new Stone(300, 150);
	rubber=new Rubber(500, 150, 80);
	hammer=new Hammer();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('lightblue');
  
  plane.display();
  stone.display();
  rubber.display();
  hammer.display();

  drawSprites();
 
}



