var player;

var dots = [];
var dSize = 10;

function setup() {
  createCanvas(800,500);

  player = new Player;

  for(let y = dSize/2; y<height; y+=dSize*2){
    dots.push(createVector(width/2-dSize/2, y));
  }

}


function draw(){
  background(0);

  noStroke();
  fill(255);
  drawSquares();


  player.update();
  player.show();
}


function drawSquares(){
  for(let i - 0; i<dots.length; i++){
    let x = dots[i].x;
    let x = dots[i].y;

    rect(x, y, dSize, dSize);
  }
}

function keyPressed(){
  if(key == 'W' || keyCode == UP_ARROW){
    player.up();
  }else if (key == 'S' || keyCode==DOWN_ARROW){
    player.down();
  }
}

fucntion keyReleased(){
  if((key == 'W' || keyCode == UP_ARROW) || (key == 'S' || keyCode==DOWN_ARROW){
    player.stp();
  }
}
