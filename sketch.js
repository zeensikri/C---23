const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5, ground;

function setup(){
    var canvas = createCanvas(1280,693);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300);
    box2 = new Box(700,250);
    box3 = new Box(1000,300);
    box4 = new Box(1000,250);
    box5 = new Box(850,300);
    ground = new Ground(640,690,1290,40);
}

function draw(){
    background("cyan");
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
}