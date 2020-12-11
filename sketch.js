const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground, ball;

function setup() {
  createCanvas(400,400);
  myEngine =Engine.create();
  myWorld = myEngine.world;

  var ground_options = {
    isStatic: true

  }
  var ball_options = {
    
    restitution : 1.0
  }


  ground = Bodies.rectangle(200,380,50,50,ground_options);
  World.add(myWorld,ground);

  ball = Bodies.circle(200,200,25,ball_options);
  World.add(myWorld,ball);
  
  console.log(ball);

}

function draw() {
  background("orange"); 
  Engine.update(myEngine)

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20); 
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);
} 
