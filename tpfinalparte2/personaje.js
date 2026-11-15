class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(0, 255, 0);
    this.vidas = 3;
    this.balas = [];

    for (let i = 0; i < 10; i++) {
      this.balas.push(new Bala(-100, -100));
    }
  }

  dibujar() {
    this.mover();
    fill(this.miColor);
    rectMode(CENTER);
    rect(this.posX, this.posY, 30, 40);

    for (let i = 0; i < this.balas.length; i++) {
      this.balas[i].dibujar();
    }
  }

  teclaPresionada(keyCode) {
    if (keyCode === 32) {
      this.dispararBala();
    }
  }

  mover() {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      this.moverIzquierda();
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      this.moverDerecha();
    }
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      this.moverArriba();
    }
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      this.moverAbajo();
    }
  }

  moverDerecha() {
    if (this.posX < 780) {
      this.posX += 5;
    }
  }

  moverIzquierda() {
    if (this.posX > 20) {
      this.posX -= 5;
    }
  }

  moverArriba() {
    if (this.posY > 200) {
      this.posY -= 5;
    }
  }

  moverAbajo() {
    if (this.posY < 380) {
      this.posY += 5;
    }
  }

  dispararBala() {
    let encontrada = false;
    for (let i = 0; i < this.balas.length; i++) {
      if (this.balas[i].disparada === false && encontrada === false) {
        this.balas[i].posX = this.posX;
        this.balas[i].posY = this.posY - 20;
        this.balas[i].disparada = true;
        encontrada = true;
      }
    }
  }

  perderVida() {
    this.vidas--;
  }

  estaVivo() {
    return this.vidas > 0;
  }
}
