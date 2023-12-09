class Player {

  constructor() {
    this.x = 100;
    this.y = height/2;
    this.velocity = 3;
    this.r1 = 58;
    this.r2 = 40;
  }

  move() {
    this.velocity += gravity;
    this.y += this.velocity;
    if (this.y < 0) {
      this.y = 0;
    } else if (this.y+this.r2/2 > height) {
      this.y = height-this.r2/2;
    }
    if (!resetting && gameOver && this.y+this.r2/2 >= height) {
      resetting = true;
      setTimeout(resetGame, 500);
    }
  }

  jump() {
    this.velocity = -7;
  }

  display() {
    imageMode(CENTER);
    if (gameOver) {
      image(ded, this.x, this.y, this.r1, this.r2);
    } else {
      image(bird, this.x, this.y, this.r1, this.r2);
    }
  }

}
