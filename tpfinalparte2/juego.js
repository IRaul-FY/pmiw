class Juego {
  constructor(){
    this.estado = "inicio";
    this.personaje = new Personaje(400, 330);
    this.enemigos = [];
    this.crearEnemigos();
    this.puntuacion = 0;
    this.meta = 15;
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
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(28);
    text("COMMANDO (1985)", width / 2, 70);
    
    textSize(14);
    text("INSTRUCCIONES:", width / 2, 120);
    text("- Movimiento: Flechas o W, A, S, D", width / 2, 150);
    text("- Disparar: Barra Espaciadora", width / 2, 175);
    text("- Objetivo: Derrota a 15 enemigos", width / 2, 200);

    fill(0, 255, 0);
    textSize(16);
    text("Presiona ENTER para Comenzar", width / 2, 260);

    fill(180);
    textSize(12);
    text("CRÉDITOS: FERRIN YEPEZ IVAN RAUL - comision 4", width / 2, 350);
  }

  jugar() {
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

      if (this.personaje.bala.disparada && dist(this.personaje.bala.posX, this.personaje.bala.posY, this.enemigos[i].posX, this.enemigos[i].posY) < 20) {
        this.puntuacion++;
        this.enemigos[i].posY = random(-200, -50);
        this.enemigos[i].posX = random(50, 750);
        this.personaje.bala.disparada = false;

        if (this.puntuacion >= this.meta){
          this.estado = "ganaste";
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
    textAlign(CENTER, CENTER);
    fill(0, 255, 0);
    textSize(30);
    text("¡VICTORIA!", width / 2, 140);
    textSize(16);
    fill(255);
    text("Presiona 'R' para Reiniciar", width / 2, 220);
  }

  pantallaPerdiste(){
    textAlign(CENTER, CENTER);
    fill(255, 0, 0);
    textSize(30);
    text("GAME OVER", width / 2, 140);
    textSize(16);
    fill(255);
    text("Presiona 'R' para Reiniciar", width / 2, 220);
  }

  reiniciar(){
    this.puntuacion = 0;
    this.personaje = new Personaje(400, 330);
    this.enemigos = [];
    this.crearEnemigos();
    this.estado = "jugando";
  }
  
  teclaPresionada(keyCode){
    if (this.estado === "jugando") {
      this.personaje.teclaPresionada(keyCode);
    } else if ((this.estado === "ganaste" || this.estado === "perdiste") && (key === 'r' || key === 'R')) {
      this.reiniciar();
    }
  }
}
