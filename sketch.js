
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;
var paper;	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(10,670,3300,20);
	dustbinObj=new dustbin(1200,650);
	paper=new Paper(300,200,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  paper.display();
  groundObject.display();
  dustbinObj.display();


}
 function keyPressed(){
	 if(keyCode === UP_ARROW){
		 Matter.Body.applyForce(paper.body, paper.body.position,{x:130, y:-145});
	 }
 }

