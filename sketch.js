// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var ground;
var cannon1,cannon2,cannon3,cannon4;
var ball1,ball2,ball3,ball4;
function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(400,390,800,20);
    cannon1 = new cannon(75,355,100,50);
    cannon2 = new cannon(50,305,50,50);
    cannon3 = new cannon(126,305,100,50);
    cannon4 = new cannon(75,255,100,50);
    ball1 = new ball(400,355);
    ball2 = new ball(500,355);
    ball3 = new ball(600,355);
    ball4 = new ball(700,355);
}

function draw() {
// Remember to update the Matter Engine and set the background.

ground.display();
cannon1.display();
cannon2.display();
cannon3.display();
cannon4.display();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}