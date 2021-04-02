const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var drops;
function preload(){
    
}

function setup(){
   createCanvas(1000, 500);
   engine = Engine.create();
   world = engine.world;
   drops = [];
}

function draw(){
    background("BLACK");
    var maxDrops=100;
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(500, 100, PI/1));
    }
    drops.display();
    Engine.run(engine);
    Engine.update(engine);
}   

