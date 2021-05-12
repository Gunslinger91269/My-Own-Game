function preload(){
    bgi=loadImage("Pics/background.jpg")
    boyS=loadAnimation("Pics/img1.png","Pics/img3.png","Pics/img2.png")
    boyF=loadAnimation("Pics/img4.png","Pics/img5.png","Pics/img6.png")
}
function setup(){
    createCanvas(windowWidth,windowHeight)
    background1=createSprite(windowWidth/2,windowHeight/2)
    background1.addImage(bgi)
    background1.velocityX=-1
    boy1=createSprite(70,500)
    boy1.addAnimation("Standing",boyS)
    boy1.scale = 0.07
    platform=createSprite(windowWidth/2,760,windowWidth,300)
    platform.shapeColor=("black")
    
}
function draw(){
    background(bgi)
    if(background1.x<=0){
        background1.x=windowWidth/2
    }
    createBlock()
    drawSprites()
}

function createBlock(){

    if(frameCount%20===0&&frameCount<40){
        b1=createSprite(420,600,200,15)
        b1.velocityX=-1
        b1.shapeColor=color(random(0,255),random(0,255),random(0,255))
        b2=createSprite(620,600,200,15)
        b2.lifetime = 20
        b2.velocityX=-1
        b2.height=Math.round(random(45,150))
        b2.y=600-b2.height/2
        b2.shapeColor=color("red")
        b3=createSprite(820,600,200,15)
        b3.shapeColor=color(random(0,255),random(0,255),random(0,255))
        b3.velocityX=-1
        b4=createSprite(1220,600,200,15)
        b4.shapeColor=color(random(0,255),random(0,255),random(0,255))
       b4.velocityX=-1
        
    }

}

