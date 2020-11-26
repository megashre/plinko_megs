
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;



var particles=[];
var plinko=[];
var divisions=[];
//var divisionheight=300;

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,height,800,20)
  for(var i=0;i<width;i=i+80) {
var div=new Division(i,650,10,300)
    divisions.push(div)
  }
  
  for(var i=40;i<width;i=i+50){
    plinko.push(new Plinko(i,75))
  
}
for(var i=15;i<width-10;i=i+50){
  plinko.push(new Plinko(i,175))

}
for(var i=40;i<width;i=i+50){
  plinko.push(new Plinko(i,275))

}
for(var i=15;i<width-10;i=i+50){
  plinko.push(new Plinko(i,375))

}

}

function draw() {
  
  background(0);
  Engine.update(engine);  

  ground.display();
  for(var i=0;i<divisions.length;i++){
    divisions[i].display();
  }
  for(var i=0;i<plinko.length;i++){
    plinko[i].display();
  }
  if(frameCount%60===0){
  
    particles.push(new Particle(random(230,250),10))
  
}
  for(var i=0;i<particles.length;i++){
    particles[i].display();
  }
  drawSprites();
}