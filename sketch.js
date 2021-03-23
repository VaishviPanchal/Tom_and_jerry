var bg , bgImg ;
var jerry , jerryAni1 , jerryAni2 , jesrryAni3 ;
var tom , tomAni1 , tomAni2 , tomAni3 ;

function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    jerryAni1=loadAnimation("images/mouse1.png")
    jerryAni2=loadAnimation("images/mouse2.png","images/mouse3.png")
    jerryAni3=loadAnimation("images/mouse4.png")
    tomAni1=loadAnimation("images/cat1.png")
    tomAni2=loadAnimation("images/cat2.png","images/cat3.png")
    tomAni3=loadAnimation("images/cat4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg=createSprite(500,400,20,20);
    bg.addImage(bgImg);
    bg.scale=1.14;

    jerry=createSprite(200,600,10,10);
    jerry.addAnimation("jerryStand",jerryAni1);
    jerry.addAnimation("jerryTeasing",jerryAni2);
    jerry.addAnimation("jerryEnd",jerryAni3);
    jerry.scale=0.15;
    //jerry.debug=true;

    tom=createSprite(900,600,10,10);
    tom.addAnimation("tomStand",tomAni1);
    tom.addAnimation("tomRun",tomAni2);
    tom.addAnimation("tomEnd",tomAni3);
    tom.scale=0.20;
    //tom.debug=true;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (tom.x - jerry.x <= tom.width/4 + jerry.width/4){
        jerry.changeAnimation("jerryEnd",jerryAni3)
        tom.changeAnimation("tomEnd",tomAni3)
        tom.velocityX=0
    }
    drawSprites();
}


function keyPressed(){
    //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        jerry.changeAnimation("jerryTeasing",jerryAni2)
        tom.changeAnimation("tomRun",tomAni2);
        tom.velocityX=-5;
    }
}