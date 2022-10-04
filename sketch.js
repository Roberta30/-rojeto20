const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ball;
let square;
let rectangle;
let engine;
let world;
var ground;
var wedge;
var angle=60;
var poly;


function setup() {
  createCanvas(500,600);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.5,
    friction: 0.02,
    frictionAir : 0
  }

  var square_options = {
    restitution : 0.7,
    friction: 0.01,
    frictionAir : 0.1
  }

  var rectangle1_options = {
    restitution: 0.01,
    frictio: 1,
    frictionAir: 0.3
  }

  var ground_options = {
    isStatic : true
  }


  ball = Bodies.circle(250,10,20,ball_options);
  World.add(world,ball);

  square = Bodies.circle(100,10,20,square_options);
  World.add(world,square);

  rectangle1 = Bodies.circle(400,10,20,rectangle1_options);
  World.add(world,rectangle1);

  ground = Bodies.rectangle(250,610,450,60,ground_options);
  World.add(world,ground);
  

  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.update(engine);

  push();
  fill("green"); 
  ellipse(ball.position.x,ball.position.y,30);
  pop();
 
  push();
  fill("red");
  rect(square.position.x,square.position.y, 50, 50);
  pop();

  push();
  fill("yellow"); 
  rect(rectangle1.position.x,rectangle1.position.y, 90, 50);
  pop();

  push();
  fill("purple");
  rect(ground.position.x,ground.position.y, 500, 20);
  pop();

}

