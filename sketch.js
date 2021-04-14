const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bullet , speed , wall , weight , thickness

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
//~~~~~~~~~~~~~~~~~~~~~~~~~~``````````````````````````~~~~~~~~~~~~~~~~~~~~~~~~~~//
  bullet = createSprite(50,200,50,5)
   
bullet.velocityX = speed;

bullet.shapeColor=color(255);

wall=createSprite(1200,200,thickness ,height /2)
wall.shapeColor=color(80,80,80)


}

function draw() {
  background("black");
  
  if(hasCollided(bullet , wall)){

    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness *thickness * thickness);


    if(damage>10)
    {
      wall.shapecolour=color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
 
  drawSprites();
}

//`````````````````````````function~draw~is~over`````````````````````````//


function hasCollided(lbullet , lwall){

  bulletRidhtEdge=lbullet.x +lbullet.width;
  wallLefEdge=lwall.x;
  if (bulletRidhtEdge>=wallLefEdge){
    return true
  }
  return false;
}



/*if (wall.x-bullet.x < (bullet.width*wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0)
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }

    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  
  }
*/

//**************************************************************************************************** */
/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var car , speed , wall , weight

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  speed=random(55,90)
  weight=random(400,1500)

  car = createSprite(50,200,50,50)
   
car.velocityX = speed;

car.shapeColor=color(255);

wall=createSprite(1500,200,60,height /2)
wall.shapeColor=color(80,80,80)


}

function draw() {
  background("blue");
  
  if (wall.x-car.x < (car.width*wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0)
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }

    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  
  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
  
  console.log(car.x)
  drawSprites();
}*/