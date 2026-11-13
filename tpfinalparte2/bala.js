class Bala {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.disparada = false;
  }

  dibujar() {
    if (this.disparada) {
      fill(255, 255, 0);
      noStroke();
      ellipse(this.posX, this.posY, 8, 12);
      this.mover();
    }
  }

  mover() {
    this.posY -= 2;
    if (this.posY < 0) {
      this.disparada = false;
    }
  }
}
