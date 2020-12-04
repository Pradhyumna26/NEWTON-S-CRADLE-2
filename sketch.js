//Class-34: Newton's Cradle

//Create Namespaces
const {Engine, World, Bodies, Body, Constraint, Mouse, MouseConstraint} = Matter;

//Create variables
var myengine, myworld;

var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
  
  canvas = createCanvas(windowWidth/2,windowHeight/1.5);
  
  myengine = Engine.create(); //Create physics engine
  myworld = myengine.world; //Create physics world from engine

  //Using Mouse Constraints
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();

  let options = {
    mouse: canvasmouse
  };

  mConstraint = MouseConstraint.create(myengine, options);
  World.add(myworld, mConstraint);

  //Creating bob & rope
  bob1 = new Pendulum(300, 350, "purple");
  bob2 = new Pendulum(350, 350, "blue");
  bob3 = new Pendulum(400, 350, "thistle");
  bob4 = new Pendulum(450, 350, "darkorchid");
  bob5 = new Pendulum(500, 350, "deeppink");

  rope1 = new Sling(bob1.body, {x: 300, y: 200});
  rope2 = new Sling(bob2.body, {x: 350, y: 200});
  rope3 = new Sling(bob3.body, {x: 400, y: 200});
  rope4 = new Sling(bob4.body, {x: 450, y: 200});
  rope5 = new Sling(bob5.body, {x: 500, y: 200});

}

function draw() {
  
  background(221, 220, 250);  

  //Set text size & font
  fill(29, 26, 51);
  textSize(20);
  textFont("Trebuchet MS");

  //Displaying Text
  text("NEWTON's CRADLE",320,120);

  text(15);
  text("Drag the left bob to simulate it",250,windowHeight/1.6);

  Engine.update(myengine); //Update to physics engine
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

function mouseDragged() {
  Body.setPosition(bob1.body, {x: mouseX, y: mouseY});
}