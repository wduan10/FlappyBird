var player;
var score = 0, highscore = 0;
var gravity = 0.4;
var pipes = [];
var topPipeMargin = 75;
var pipeHoles = 4;
var holeSize = 175;
var bird, tree, leaves, hole, ded;
var gameOver = false;
var resetting = false;

//to do list:
//highscore
//bird tilts when rising/falling

function preload() {
  bird = loadImage("images/bird.png");
  tree = loadImage("images/4.png");
  leaves = loadImage("images/roof.png");
  hole = loadImage("images/hole.png");
  ded = loadImage("images/ded.png");
}

function setup() {
  createCanvas(1400, 900);
  player = new Player();
  var pipe = new Pipe();
  pipes.push(pipe);
}

function draw() {
  background(255);
  imageMode(CORNER);
  if (!gameOver && keyIsDown(32)) {
    player.jump();
  }
   player.move();
  for (var pipe of pipes) {
    if (!gameOver) {
      pipe.collides();
      pipe.changeScore();
      pipe.regenerate();
      pipe.destroy();
      pipe.move();
    }
    pipe.display();
  }
  player.display();
}

function resetGame() {
  pipes = [];
  var pipe = new Pipe();
  pipes.push(pipe);
  player.r1 = 58;
  player.r2 = 40;
  highscore = max(highscore, score);
  score = 0;
  document.querySelector("#score").textContent = score;
  document.querySelector("#highscore").textContent = highscore;
  gameOver = false;
  resetting = false;
}
