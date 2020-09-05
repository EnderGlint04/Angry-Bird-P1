const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    bird = new Bird(200,200);
    
    //layer 1
    box1 = new Box(700,300,70,70);
    box2 = new Box(900,300,70,70);
    pig1 = new Pig(800,300);
    log = new Log(800,280,300,PI/2)

    //layer 2
    box3 = new Box(700,205,70,70);
    box4 = new Box(900,205,70,70);
    pig2 = new Pig(800,255);
    log1 = new Log(800,190,300,PI/2);
    //Topping
    Abox = new Box(800,115,70,70);
    Tlog = new Log(850,115,135,-PI/7);
    Tlog2 = new Log(750,115,125,PI/7);

}

function draw(){
    background(15,40,240);
    Engine.update(engine);
    ground.display();
    bird.display();

    //Layer 1
    box1.display();
    box2.display();
    pig1.display();
    log.display();
    //Layer 2
    box3.display();
    box4.display();
    pig2.display();
    log1.display();
    //Topping
    Abox.display();
    Tlog.display();
    Tlog2.display();
;}