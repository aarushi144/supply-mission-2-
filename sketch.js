var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var side1 , side2 , side3
var side11 , side22 , side33


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	 
	side1 = createSprite (400 , 765 , 200 ,20 );
	side1.shapeColor= "red";

	side2 = createSprite ( 315, 720  , 20 ,100 );
	side2.shapeColor= "red";

	side3 = createSprite (485, 720 , 20 ,100 );
	side3.shapeColor= "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	
 	World.add(world, ground);
	
	side11 = Bodies.rectangle (400 , 765 , 200 ,20 , {isStatic: true});
	side11.shapeColor= "red";
	World.add(world, side11);

	side22 = Bodies.rectangle (315, 720  , 20 ,100, {isStatic: true});
	side22.shapeColor= "red";
	World.add(world, side22)


	side33 = Bodies.rectangle (485, 720 , 20 ,100, {isStatic: true});
	side33.shapeColor= "red";
	World.add(world, side33)
  

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW){
	 Engine.run(engine) 
	Matter.Body.setStatic(packageBody,false);
}

  
}