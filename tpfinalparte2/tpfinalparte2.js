let miJuego;

function setup() {
  createCanvas(800, 400);
  miJuego = new Juego();
}

function draw() {
  miJuego.dibujar();
}

function keyPressed() {
  if (miJuego.estado === "inicio" && (keyCode === ENTER)) {
    miJuego.estado = "jugando";
  } else {
    miJuego.teclaPresionada(keyCode);
  }
}
