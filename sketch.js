const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500)
	engine = Engine.create()
	world = engine.world;
  background('red')
	Engine.run(engine);
    ground = new Ground(400, 490, 800, 20)
    stand1 =  new Ground(330,352,230,15)
    stand2 =  new Ground(650,220,230,15)
    box1 =  new Box(250,325,30,40)
    box2 =  new Box(280,325,30,40)
    box3 =  new Box(310,325,30,40)
    box4 =  new Box(340,325,30,40)
    box5 =  new Box(370,325,30,40)
    box6 =  new Box(400,325,35,40)
    box7 =  new Box(280,285,30,40)
    box8 =  new Box(310,285,30,40)
    box9 =  new Box(340,285,30,40)
    box10 = new Box(370,285,30,40)
    box11 = new Box(310,245,30,40)
    box12 = new Box(340,245,30,40)
    box13 = new Box(570,200,30,40)
    box14 = new Box(600,200,30,40)
    box15 = new Box(630,200,30,40)
    box16 = new Box(660,200,30,40)
    box17 = new Box(690,200,30,40)
    box18 = new Box(720,200,30,40)
    box19 = new Box(600,160,30,40)
    box20 = new Box(630,160,30,40)
    box21 = new Box(660,160,30,40)
    box22 = new Box(690,160,30,40)
    box23 = new Box(630,120,30,40)
    box24 = new Box(660,120,30,40)
    polygon = new Polygon();
   slingshot = new Slingshot(polygon.body, {x:100, y:200}) 
}
function draw() {
  Engine.update(engine);
  
  text(mouseX+","+mouseY, 500,50)
  ground.display();
  stand1.display();
  stand2.display();
  fill('#ff9b93')
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  fill('#98acf8')
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  fill('#8ad7c1')
  box11.display();
  box12.display();
  fill('#ea2c62')
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  
  fill('#e4e978')
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  
  fill('#892cdc')
  box23.display();
  box24.display();

  polygon.display();
  slingshot.display();
  
  drawSprites();

}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(polygon.body, {x:100, y:200})
		slingshot.attach(polygon.body)
	}
}
async function getBackgroundColor(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=18){
      color = 'black'
  }
  else{
      color = 'pink'
  }
  return color
}
function mouseDragged(){
	 Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
	 
}

function mouseReleased(){
	slingshot.fly();
}

