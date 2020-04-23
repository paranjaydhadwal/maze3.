const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var boxa,boxb,boxc,boxd,boxe,boxf,boxg,boxh,boxi,boxj;
var platform,platform2;
var xyz,slingShot;
function setup() {
  createCanvas(800,600);
  
  engine = Engine.create();
  world = engine.world;
  createSprite(400, 200, 35, 35);
  box1=new Box(600-20,400+5+5);
  box2=new Box(600+35+3-20,400+5+5);
  box3=new Box(600-35-3-20,400+5+5);
  box4=new Box(600+35+3+35+3-20,400+5+5);
  box5=new Box((580+(600+35+3-20))/2,365+5+5);
  box6=new Box(((580+(600+35+3-20))/2)-38,365+5+5);
  box7=new Box((((580+(600+35+3-20))/2)-38)+70+6,365+5+5);
  box8=new Box((599/2+561/2)+5,330+5+5);
  box9=new Box(((599/2+561/2)+5)+35+3,330+5+5);
  box10=new Box(((((599/2+561/2)+5)+35+3)+(599/2+561/2)+5)/2,295+5+5+2);
  slingShot=new BoxZ(203,116);
  
                              boxa=new BoxAno(400,350+5);
                              boxb=new BoxAno(362,350+5);
                              boxc=new BoxAno(438,350+5);
                              boxd=new BoxAno(327,350+5);
                              boxe=new BoxAno(381,315+5);
                              boxf=new BoxAno(347,315+5);
                              boxg=new BoxAno(418,315+5);
                              boxh=new BoxAno(364,278+5);
                              boxi=new BoxAno(364+38,278+5);
    boxj=new BoxAno(383,278-38+5);

  xyz=new slingShot1(slingShot.body,{x:203,y:116});
  platform=new Ground(600,450,200,20);
 
platform2=new Ground(380,390,200,20);
}
function mouseDragged(){
  Matter.Body.setPosition(slingShot.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  xyz.fly();
}
function draw() {
  background(0);  
  Engine.update(engine);
  // console.log(mouseX);
  // console.log(mouseY);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  xyz.display();
  slingShot.display();
  platform.display();
    platform2.display();
    boxa.display();
    boxb.display();
    boxc.display();
    boxd.display();
    boxe.display();
    boxf.display();
    boxg.display();
    boxh.display();
    boxi.display();
    boxj.display();
    textSize(15);
    text("Drag the mouse to pull the rubber and release it to fire",250+59,50);
    fill(255);
    text("Press SpaceBar to get the box back in place",305,95);
    fill(19);
    // console.log(mouseX);
    // console.log(mouseY);
 // drawSprites();
}
function keyPressed(){
  if(keyCode===32){
    xyz.attach(slingShot.body);
  }
}