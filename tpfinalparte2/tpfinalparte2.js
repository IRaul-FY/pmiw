let objJuego;

function setup(){
  createCanvas (800, 400);
  objJuego = new Juego();
}


function draw() {
  objJuego.dibujar();

}
