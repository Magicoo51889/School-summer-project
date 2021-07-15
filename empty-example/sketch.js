var player, ball, ai;


var playerScore = 0;
var AIScore = 0;

var dots = [];
var dSize = 10;
var txtSize = 30;

function setup(){
  createCanvas(800,500);

  player = new Player;
  ai = new AI();
  ball = new Ball();


  for(let y = dSize/2; y<height; y+=dSize*2){
    dots.push(createVector(width/2-dSize/2, y));
  }

}


function draw(){
  background(0);

  noStroke();
  fill(255, 100);
  drawSquares();

  ball.update();
  ball.show();

  player.update();
  player.show();

  ai.update();
  ai.show();

  drawScores();
}

function drawScores(){
  let x1 = width/4;
  let x2 = width*3/4;
  let y = txtSize*1.5;

  noStroke();
  fill(255);
  textAlign(CENTER);
  textSize(txtSize);
  text(playerScore, x1, y);
  text(AIScore, x2, y);
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
