const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine
var world 
var ground
var ball

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,600,20,options);
  World.add(world,ground);
  var balloption={
    restitution:0.5
  }
  ball=Bodies.circle(200,100,20, balloption);
  World.add(world,ball);
 
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  rectMode(CENTER)  
  rect(ground.position.x,ground.position.y,600,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  
}