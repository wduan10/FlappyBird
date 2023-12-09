class Pipe {

  constructor() {
    this.type = random(1, pipeHoles-1.5);
    this.x = width;
    this.thickness = 125;
    this.createdPipe = false;
    this.addedScore = false;
  }

  destroy() {
    if (this.x+10*this.thickness < 0) {
      pipes.shift();
    }
  }

  regenerate() {
    if (this.x < width/2  && !this.createdPipe) {
      var pipe = new Pipe();
      pipes.push(pipe);
      this.createdPipe = true;
    }
  }

  changeScore() {
    if (this.x < 10 && !this.addedScore) {
      score++;
      this.addedScore = true;
      document.querySelector("#score").textContent = score;
      highscore = max(highscore, score);
      document.querySelector("#highscore").textContent = highscore;
    }
  }

  collides() {
    if (player.x+player.r1/2 > this.x && player.x-player.r1/2 < this.x+this.thickness) {
      if (player.y-player.r2/2 < this.type*holeSize || player.y+player.r2/2 > (this.type+1)*holeSize) {
        gameOver = true;
        player.r1 = 40;
        player.r2 = 58;
      }
    }
  }

  move() {
    this.x -= 3;
  }

  display() {
    imageMode(CORNER);
    image(tree, this.x, 0, this.thickness, this.type*holeSize);
    image(tree, this.x, (this.type+1)*holeSize, this.thickness, height-(this.type+1)*holeSize);
    image(hole, this.x, this.type*holeSize, this.thickness, holeSize);
    imageMode(CENTER);
    image(leaves, this.x+this.thickness/2, 30, 400, 300);
  }

}
