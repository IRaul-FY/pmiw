class Enemigo {
  constructor() {
    this.posX = random(50, 750);
    this.posY = random(-200, -50);
    this.vel = 1.5;
  }

  mover() {
    this.posY += this.vel; 
    if (this.posY > 420) {
      this.posY = random(-200, -50);
      this.posX = random(50, 750);
    }
  }

  dibujar() {
    fill(200, 50, 50);
    rectMode(CENTER);
    rect(this.posX, this.posY, 25, 35);
    this.mover();
  }
}
