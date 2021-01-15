
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin,ground;
var 

//function preload()
//{
	
//}

function setup() {
  
} setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper = new Paper(200,450,40);
   
   ground = new Ground(width/2,620,width,20);

   dustbin = new Bin(1150,650);


	Engine.run(engine);
  
}


function draw() {
  background("blue");

  paper.display();
  dustbin.display();
  ground.display();
 
  
}
function keyPressed(){
  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body, paper.body.position,{x : 85, y : -85});
  }
}