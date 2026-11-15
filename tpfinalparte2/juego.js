class Juego {
  constructor(){
    this.estado = "inicio";
    this.personaje = new Personaje(400, 330);
    this.enemigos = [];
    this.crearEnemigos();
    this.puntuacion = 0;
    this.meta = 15;
    this.yFondo = 0;
    this.velocidadFondo = 2;
    this.altoFondo = imgFondo.height * width / imgFondo.width;
  }

  crearEnemigos() {
    for (let i = 0; i < 6; i++) {
      this.enemigos.push(new Enemigo());
    }
  }

  dibujar() {
    background(30);
    if (this.estado === "inicio"){
      this.pantallaInicio();
    } else if (this.estado === "jugando") {
      this.jugar();
    } else if (this.estado === "ganaste") {
      this.pantallaGanaste();
    } else if (this.estado === "perdiste") {
      this.pantallaPerdiste();
    }
  }

  pantallaInicio(){
    image(imgFinal, 0, 0, width, height);

    // panel oscuro abajo para que se lea el texto y se vea el título
    push();
    rectMode(CORNER);
    fill(0, 170);
    noStroke();
    rect(0, 0, width, height)
    pop();

    textAlign(CENTER, CENTER);
    textSize(14);
    fill(255, 200, 0);
    text("INSTRUCCIONES:", width / 2, 205);

    fill(255);
    textSize(13);
    text("- Movimiento: Flechas o W, A, S, D", width / 2, 230);
    text("- Disparar: Barra Espaciadora", width / 2, 252);
    text("- Objetivo: Derrota a 15 enemigos", width / 2, 274);

    fill(0, 255, 0);
    textSize(16);
    text("Presiona ENTER para Comenzar", width / 2, 315);

    fill(220);
    textSize(12);
  }

  dibujarFondo() {
    let h = this.altoFondo;
    this.yFondo = (this.yFondo + this.velocidadFondo) % (2 * h);

    let n = floor(this.yFondo / h);
    let y = this.yFondo - n * h;

    this.dibujarTile(y, n % 2 === 1);
    this.dibujarTile(y - h, (n + 1) % 2 === 1);
  }

  dibujarTile(y, espejado) {
    push();
    if (espejado) {
      translate(0, y + this.altoFondo);
      scale(1, -1);
      image(imgFondo, 0, 0, width, this.altoFondo);
    } else {
      image(imgFondo, 0, y, width, this.altoFondo);
    }
    pop();
  }

  jugar() {
    this.dibujarFondo();

    this.personaje.dibujar(); 

    for (let i = 0; i < this.enemigos.length; i++){
      this.enemigos[i].dibujar();
      
      if (this.personaje.vidas > 0 && dist(this.personaje.posX, this.personaje.posY, this.enemigos[i].posX, this.enemigos[i].posY) < 25) {
        this.personaje.perderVida();
        this.enemigos[i].posY = random(-200, -50);
        this.enemigos[i].posX = random(50, 750);

        if (this.personaje.vidas <= 0) {
          this.estado = "perdiste";
        }
      }

      for (let j = 0; j < this.personaje.balas.length; j++) {
        let b = this.personaje.balas[j];
        if (b.disparada && dist(b.posX, b.posY, this.enemigos[i].posX, this.enemigos[i].posY) < 20) {
          this.puntuacion++;
          this.enemigos[i].posY = random(-200, -50);
          this.enemigos[i].posX = random(50, 750);
          b.disparada = false;

          if (this.puntuacion >= this.meta){
            this.estado = "ganaste";
          }
        }
      }
    }

    textAlign(LEFT, TOP);
    fill(255);
    textSize(14);
    text("Vidas: " + this.personaje.vidas, 20, 20);
    text("Derrotados: " + this.puntuacion + " / " + this.meta, 20, 40);
  }

  pantallaGanaste(){
    if (musica.isPlaying()) {
      musica.stop();
    }

    image(imgFinal, 0, 0, width, height);
    push();
    rectMode(CORNER);
    fill(0, 180); 
    noStroke();
    rect(0, 0, width, height);
    pop();

    textAlign(CENTER, CENTER);
    textSize(26);
    fill(0, 255, 0);
    text("¡VICTORIA!", width / 2, 40);

    textSize(20);
    fill(255, 200, 0);
    text("=== TOP PLAYERS / POST-CRÉDITOS ===", width / 2, 90);

    textSize(16);
    fill(0, 255, 255);
    text("1ST  999900 PTS - FERRIN YEPEZ IVAN RAUL", width / 2, 135);
    text("2ND  850000 PTS - Di Salvo Valentino", width / 2, 170);

    stroke(255, 200, 0);
    line(150, 200, 650, 200);
    noStroke();

    textSize(14);
    fill(255);
    text("Materia: Introducción a la Programación para Medios Interactivos", width / 2, 230);
    text("Docente: Leonardo Garay", width / 2, 260);
    text("Comisión: 4", width / 2, 280);
    
    fill(255, 255, 0);
    textSize(16);
    text("Presiona 'R' para Reiniciar", width / 2, 320);
  }

  pantallaPerdiste(){
    if (musica.isPlaying()) {
      musica.stop();
    }

    image(imgFinal, 0, 0, width, height);
    push();
    rectMode(CORNER);
    fill(0, 180);
    noStroke();
    rect(0, 0, width, height);
    pop();

    textAlign(CENTER, CENTER);
    textSize(26);
    fill(255, 0, 0);
    text("GAME OVER", width / 2, 40);

    textSize(20);
    fill(255, 200, 0);
    text("=== TOP PLAYERS / POST-CRÉDITOS ===", width / 2, 90);

    textSize(16);
    fill(0, 255, 255);
    text("1ST  999900 PTS - FERRIN YEPEZ IVAN RAUL", width / 2, 135);
    text("2ND  850000 PTS - Di Salvo Valentino", width / 2, 170);

    stroke(255, 200, 0);
    line(150, 200, 650, 200);
    noStroke();

    textSize(14);
    fill(255);
    text("Materia: Introducción a la Programación para Medios Interactivos", width / 2, 230);
    text("Docente: Leonardo Garay", width / 2, 260);
    text("Comisión: 4", width / 2, 280);

    fill(255, 255, 0);
    textSize(16);
    text("Presiona 'R' para Reiniciar", width / 2, 320);
  }

  reiniciar(){
    this.puntuacion = 0;
    this.personaje = new Personaje(400, 330);
    this.enemigos = [];
    this.crearEnemigos();
    this.estado = "jugando";
    
    if (!musica.isPlaying()) {
      musica.loop();
    }
  }
  
  teclaPresionada(keyCode){
    if (this.estado === "jugando") {
      this.personaje.teclaPresionada(keyCode);
    } else if ((this.estado === "ganaste" || this.estado === "perdiste") && (key === 'r' || key === 'R')) {
      this.reiniciar();
    }
  }
}
