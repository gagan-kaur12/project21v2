var canvas;
var music;
var surface1, surface2,surface3,surface4,box,edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
  edges =  createEdgeSprites();
    //create 4 different surfaces
surface1 = createSprite(80,590,200,30);
surface1.shapeColor = "red";

surface2 = createSprite(300,590,200,30);
surface2.shapeColor = "green";

surface3 = createSprite(520,590,200,30);
surface3.shapeColor = "blue";

surface4 = createSprite(740,590,200,30);
surface4.shapeColor = "yellow";


    //create box sprite and give velocity

    box = createSprite(random(50,750),20,40,40);
     box.shapeColor = "white";
    box.velocityY = 5;
    box.velocityX = 9;

    
}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
    //create edgeSprite
    box.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box)&& box.bounceOff(surface1)){
        box.shapeColor = "red";
       
        music.play();
    }
    if(surface2.isTouching(box)){
        box.shapeColor = "green";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    if(surface3.isTouching(box)&& box.bounceOff(surface3)){
        box.shapeColor = "blue";
    }
    if(surface4.isTouching(box)&& box.bounceOff(surface4)){
        box.shapeColor = "yellow";
       
    }
}
