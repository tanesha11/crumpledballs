
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boxpart1, boxpart2, boxpart3;
var ground,paperBall;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boxpart1 = createSprite(600,350,200,20);
	World.add(world,boxpart1);

	boxpart2 = createSprite(500,310,20,100)
	World.add(world,boxpart2);

	boxpart3 = createSprite(700,310,20,100)
	World.add(world,boxpart3);

	ground = new Ground(400,370,800,20);
	World.add(world,ground);

	paperBall = new Paper(200,150,10);
	World.add(world,paperBall);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  paperBall.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:3,y:-3});  
	}
}