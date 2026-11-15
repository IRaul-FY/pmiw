//video: Ivan Ferrin
// https://youtu.be/G7FwlCNEHcc

let miJuego;
let imgFinal;   
let imgFondo;   
let musica;

function preload() {
  imgFinal = loadImage('Data/final.jpg');
  imgFondo = loadImage('Data/fondo.png');
  musica = loadSound('musica.mp3');
}

function setup() {
  createCanvas(800, 400);
  noSmooth(); 
  miJuego = new Juego();
}

function draw() {
  miJuego.dibujar();
}

function keyPressed() {
  if (miJuego.estado === "inicio" && keyCode === ENTER) {
    userStartAudio();
    miJuego.estado = "jugando";

    if (!musica.isPlaying()) {
      musica.setVolume(0.5);
      musica.loop();
    }
  } else if (miJuego.estado === "jugando") {
    miJuego.personaje.teclaPresionada(keyCode);
  } else {
    miJuego.teclaPresionada(keyCode);
  }
  return false;
}
