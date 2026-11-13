class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(0, 255, 0);
    this.vidas = 3;                 
    this.balas = []; 
    this.bala = new Bala(-100, -100);
  }

  dibujar() {
    fill(this.miColor);
    rectMode(CENTER);
    rect(this.posX, this.posY, 30, 40);
    this.bala.dibujar();
  }

  teclaPresionada(keyCode) {
    if (keyCode === LEFT_ARROW || key === 'a' || key === 'A') {
      this.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW || key === 'd' || key === 'D') {
      this.moverDerecha();
    } else if (keyCode === UP_ARROW || key === 'w' || key === 'W') {
      this.moverArriba();
    } else if (keyCode === DOWN_ARROW || key === 's' || key === 'S') {
      this.moverAbajo();
    } else if (keyCode === ENTER || key === ' ') {
      this.dispararBala();
    }
  }

  moverDerecha() {
    if (this.posX < 780) {
      this.posX += 8;
    }
  }

  moverIzquierda() {
    if (this.posX > 20) {
      this.posX -= 8;
    }
  }

  moverArriba() {
    if (this.posY > 200) {
      this.posY -= 8;
    }
  }

  moverAbajo() {
    if (this.posY < 380) {
      this.posY += 8;
    }
  }

  dispararBala() {
    this.bala = new Bala(this.posX, this.posY - 20);
    this.bala.disparada = true; // Corregido aquí
  }
  
  perderVida() {
    this.vidas--;
  }

  estaVivo() {
    return this.vidas > 0;
  }
}
