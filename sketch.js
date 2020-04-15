const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var box1;


function setup(){
    var canvas = createCanvas(400,400);
       engine = Engine.create();
       world = engine.world;
       
       box1 = new Box(210, 300, 210, 100);
       box2 = new Box(330, 300, 35, 180);
       box3 = new Box(90, 255, 35, 180);
       box4 = new Box(205, 160, 25, 25);    
       box5 = new Box(280, 160, 25, 25);
       box6 = new Box(140, 155, 25, 25);
       box7 = new Box(340, 200, 30, 20);
       box9 = new Box(340, 180, 10, 20);
       box8 = new Box(85, 170, 30, 20);
       box10 = new Box(85, 150, 10, 20);

       ground = new Ground(100, 380, 1000, 20);
}

function draw(){
    background("white");
    Engine.update(engine);
    
    box1.display();
    ground.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
}
