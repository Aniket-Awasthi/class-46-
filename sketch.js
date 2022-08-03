var player1,player2;
var base;

var platformImg;
var baseImg
var player1Stand;
var player1WalkF,player1WalkB,player1jump;
var playerPunch;
var punch;

function preload(){
    baseImg = loadImage("./Images/bg.jpg");
    platformImg = loadImage("./Images/platform1.jpg");
    player1Stand= loadAnimation("./Images/1.png","./Images/2.png","./Images/3.png");
    player1WalkF = loadAnimation("./Images/walk1.png","./Images/walk2.png","./Images/walk3.png","./Images/walk4.png","./Images/walk5.png");
    player1WalkB = loadAnimation("./Images/walk6.png","./Images/walk7.png","./Images/walk8.png","./Images/walk9.png","./Images/walk10.png");
    player1jump = loadAnimation("./Images/jump.png");
    playerPunch = loadAnimation("./Images/punch1.png","./Images/punch2.png")
}

function setup(){
createCanvas(windowWidth,windowHeight);
platformImg.resize(windowWidth,windowHeight/4);
player1 = createSprite(windowWidth/2 -200,400,80,160);
player2 = createSprite(windowWidth/2 +200,400,80,160);
base = createSprite(windowWidth/2,windowHeight-100,windowWidth,windowHeight/4);
base.addImage(platformImg);
player1.addAnimation("playerstanding",player1Stand);
player1.addAnimation("playerWalkingForward",player1WalkF);
player1.addAnimation("playerWalkingbackward",player1WalkB);
player1.addAnimation("playerjump",player1jump);
player1.addAnimation("playerPunch",playerPunch);
player1.scale= 3;


player1.collide(base);
player2.velocityY = windowHeight/50;
player2.collide(base);


//punch = createSprite(windowWidth/2 -200,400,10,50);

//punch.debug = true;

player2.debug =true;
player1.debug =true;


}

function draw(){
    background(baseImg);

    console.log(player1.y);
    if(keyWentDown(RIGHT_ARROW)){
        if(player1.y> 650){
    player1.changeAnimation("playerWalkingForward",player1WalkF);
        }
        player1.velocityX = windowWidth/70;
    }else if(keyWentUp(RIGHT_ARROW)){
        player1.changeAnimation("playerstanding",player1Stand);
        player1.velocityX = 0;

    }
    if(keyWentDown(LEFT_ARROW)){
        if(player1.y> 650){
        player1.changeAnimation("playerWalkingbackward",player1WalkB);
        }
            player1.velocityX -= windowWidth/70;
        }else if(keyWentUp(LEFT_ARROW)){
            
            player1.changeAnimation("playerstanding",player1Stand);
       
            player1.velocityX = 0;
    
        }
        if(keyDown(32) && player1.y> 650){
       //     player1.changeAnimation("playerjump",player1jump);
                player1.velocityY = -30;
            }player1.velocityY += 1.2;
if(player1.y<650){
    player1.changeAnimation("playerjump",player1jump);
    
}
if(keyWentDown("p")){
    player1.changeAnimation("playerPunch",playerPunch);
    if(player1.isTouching(player2)){
        console.log("Punch")
    }
   // punch.width = 180;
  //  punch.x = player1.x +120;
}else if(keyWentUp("p")){
    player1.changeAnimation("playerstanding",player1Stand);
}
//else{
    
//unch.x = player1.x;


//}
//punch.y = player1.y -70;
player1.collide(base);
player2.collide(base);

//if(player1.isTouching(player2)){

    //console.log("Punch")
//}



drawSprites();
}