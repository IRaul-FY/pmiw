let estado_personaje = "CAMINAR";
let fondo, piso, tituloImg;

let caminar_cant = 9;
let rezar_cant = 28;
let confesor_cant = 34;

let caminar = [];
let rezar = [];
let confesor = [];

let posX_personaje = 250;
let posY_personaje = 460;
let posX_confesor = 900;
let posY_confesor = 440;

let velocidadAnimacion = 8;
let framesEstado = 0;

let distanciaEstatua = 500;
let tituloY = -150;
let posX_fondo = 0;

function preload() {
  for (let a = 0; a < caminar_cant; a++) {
    caminar.push(loadImage("Data/caminar_" + a + ".png"));
  }
  for (let a = 0; a < rezar_cant; a++) {
    rezar.push(loadImage("Data/rezar_" + a + ".png"));
  }
  for (let a = 0; a < confesor_cant; a++) {
    confesor.push(loadImage("Data/confesor_" + a + ".png"));
  }
  fondo = loadImage("Data/fondo.png");
  piso = loadImage("Data/Piso.png");
  tituloImg = loadImage("Data/Blasphemous.png");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  framesEstado++;
  background(0);
  dibujarEscenario();

  imageMode(CENTER);
  if (estado_personaje === "CAMINAR") {
    accion_caminar();
  } else if (estado_personaje === "REZAR") {
    accion_rezar();
  } else if (estado_personaje === "QUIETO") {
    accion_quieto();
  }
}

function dibujarEscenario() {
  imageMode(CORNER);
  let escala = height / fondo.height;
  let anchoFondo = fondo.width * escala;
  let desplaFondo = posX_fondo % anchoFondo;
  image(fondo, desplaFondo, 0, anchoFondo, height);
  image(fondo, desplaFondo + anchoFondo, 0, anchoFondo, height);
 
  let pisoAncho = piso.width;
  let desplaPiso = posX_fondo % pisoAncho;
  let cantidadTiles = floor(width / pisoAncho) + 3;
  for (let i = 0; i < cantidadTiles; i++) {
    image(piso, desplaPiso + i * pisoAncho, 480, pisoAncho, piso.height);
  }
}
function cambiarEstado(nuevoEstado) {
  estado_personaje = nuevoEstado;
  framesEstado = 0;
}
