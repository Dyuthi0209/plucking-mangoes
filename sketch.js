const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var world,boy;
var stoneObj;
var slingShot;


function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,100,20);
	mango3=new mango(1150,170,30);
	mango4=new mango(900,190,20);
	mango5=new mango(1000,200,30);
	mango6=new mango(1200,230,20);
	mango7=new mango(950,260,30);
	mango8=new mango(1090,230,30);
	mango9=new mango(1060,50,20);

  stoneObj= new Stone(236,450,20)
 
	slingShot=new Sling(stoneObj.body,{x:236,y:430});

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,590,width,20);

	Engine.run(engine);

}

function draw() {

  background(135,206,235);
  fill(0,0,0)
  textSize(50)
 text("Press space to get another chance!", 10,40)

  image(boy ,200,355,200,300);
 

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
 
  slingShot.display();  
  stoneObj.display();


  groundObject.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
    
}

function mouseReleased(){
    slingShot.fly();
}

function detectCollision(s,m){
  spos=s.body.position
  mpos=m.body.position
  var distance=dist(spos.x,spos.y,mpos.x,mpos.y)
  if(distance<s.r+m.r){
    Matter.Body.setStatic(m.body,false)
  }
 }



function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:236, y:450}) 
	 slingShot.attach(stoneObj.body);
	}
  }
