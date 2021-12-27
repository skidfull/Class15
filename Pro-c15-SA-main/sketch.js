var ball;
var vx = 2;

function setup() {
  createCanvas(400,400);

  ball = createSprite(100,100,100,100);

  ball.debug = true
  ball.setCollider("rectangle", 0,0,150,150)
}

function draw() 
{
  background(51);

  /*
  if(ball.position.x<=54 || ball.position.x>=width-54)
  {
    vx= -vx;
  }
  ball.velocity.x = vx;
  */
  if(ball.position.x<=0 || ball.position.x>=width)
  {
    vx= -vx;
  }
  ball.velocity.x = vx;

  drawSprites();

}

