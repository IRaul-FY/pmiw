//video: Ivan Ferrin
//https://youtu.be/z9sedS5AxMU

//video: Di Salvo Valentino
//https://youtu.be/Lgj9pw5NJxA

let pantalla = 0; 
let framesEstado = 0;

let imgFondos = [];
let fondoIntro, tituloImg, muertoImg;
let estado_personaje = "CORRER";

let correr_cant = 3;
let enemi_cant = 2;
let fumar_cant = 5;

let correr = [];
let enemi = [];
let fumar = [];

let posX_personaje = -60;
let posY_personaje = 220;
let posX_enemi = 520;
let posY_enemi = 220;

let velocidadAnimacion = 8;
let tituloY = -100;
let balaX = -100;
let balaDisparada = false;
let enemigoMuerto = false;
let musica;
let textosDiagrama = [
  "INTRO: Super Jones se infiltra en territorio hostil, elimina la resistencia, se toma un respiro y da comienzo a la misión.", // 0 - Intro Animada
  "MISIÓN: Infiltrarse a la base enemiga y capturar la base o destruirla por completo.", // 1
  "INICIO: La misión comienza cayendo desde un helicóptero en paracaídas.", // 2
  "Aterriza en un campo sin ser descubierto, super jones se despliega tras las líneas enemigas.", // 3
  "Se encuentra con una patrulla enemiga ¿cómo debería actuar?", // 4
  "Logra eliminar a los enemigos; pero recibió disparos tras el enfrentamiento y decide curarse para seguir avanzando.", // 5
  "Avanzó rápidamente por las trincheras enemigas, evitando minas y nidos de ametralladoras.", // 6
  "Llegamos a la base enemiga y entramos a la fuerza por la puerta principal y nos enfrentamos con el comandante de la base.", // 7
  "FINAL: Después de enfrentarnos con todos los enemigos de la base, el comandante se rinde y capturamos la base con éxito, super jones se comunica con la base aliada diciendo misión cumplida.", // 8
  "Después de esperar que se vayan los enemigos, siguió avanzando sigilosamente por los arbustos.", // 9
  "Super Joe decide desviarse de la ruta principal para dirigirse al campamento de prisioneros de guerra.", // 10
  "Al llegar al campamento, destruye o neutraliza las torres y consolas de comunicación enemigas para evitar que los guardias pidan refuerzos o den la alarma de ejecución.", // 11
  "¿Se encuentran con una unidad de élite y guardias de combate que custodian el perímetro?", // 12
  "Super Jones se enfrenta con los guardias de combate pero uno de la unidad élite lo intercepta por detrás apuntándole con un arma.", // 13
  "Super Jones sin poder hacer nada, tiró las armas y (porque estaba rodeado) se lo llevaron a la base enemiga.", // 14
  "FINAL DEFEAT: Al llegar a la base lo llevaron con el comandante. El comandante ordena que lo metan al calabozo, super jones sin poder hacer nada, se lo llevan al calabozo a esperar que lo rescaten se da por Misión fallida.", // 15
  "Super Jones tira una flashback y logra noquearlos por detrás quedándose inconscientes; super jones se disfraza como uno de ellos.", // 16
  "Super Jones logra entrar a la base enemiga, se encuentra con una caja de C4 y pone los C4 en los puntos críticos de la base enemiga sin que lo detecten.", // 17
  "Super Jones sale corriendo desesperadamente antes de que la detonación en cadena destruya todo el perímetro.", // 18
  "FINAL STEALTH: La base enemiga estalla por completo sin dejar ningún rastro, los enemigos no lograron escapar de la explosión que terminaron muriendo todos, super jones pide un helicóptero aliado y logra escapar con éxito y se da por misión cumplida.", // 19
  "POST-CRÉDITOS & RANKING ARCADE" // 20
];

function preload() {
  soundFormats('mp3', 'wav');
  musica = loadSound("sonidos/musica.mp3");

  // Carga de sprites con bucles for y push (Estilo TP1)
  for (let a = 0; a < correr_cant; a++) {
    correr.push(loadImage("Data/correr_" + a + ".png"));
  }
  for (let a = 0; a < enemi_cant; a++) {
    enemi.push(loadImage("Data/enemi_" + a + ".png"));
  }
  for (let a = 0; a < fumar_cant; a++) {
    fumar.push(loadImage("Data/fumar_" + a + ".png"));
  }

  fondoIntro = loadImage("Data/fondo.png");
  tituloImg = loadImage("Data/titulo.png");
  muertoImg = loadImage("Data/muerto.png");

  // Carga correlativa de fondos del juego
  for (let i = 0; i <= 18; i++) {
    imgFondos[i] = loadImage("Data/fondo_" + i + ".jpg");
  }
  imgFondos[19] = loadImage("Data/sprite_final.png");
}

function setup() {
  createCanvas(800, 450);
}

function draw() {
  background(0);
  framesEstado++;

  if (pantalla === 0) {
    if (fondoIntro) {
      image(fondoIntro, 0, 0, width, height);
    }
    
    if (estado_personaje === "CORRER") {
      accion_correr();
    } else if (estado_personaje === "FUMAR") {
      accion_fumar();
    }

  } else if (pantalla === 1 && imgFondos[0]) {
    image(imgFondos[0], 0, 0, width, height);
  } else if (imgFondos[pantalla - 1]) {
    image(imgFondos[pantalla - 1], 0, 0, width, height);
  }

  if (pantalla === 0) {
    dibujarCajaTexto(textosDiagrama[0]);
    dibujarBoton(300, 390, 150, 35, "PLAY");
  } 
  else if (pantalla === 1) {
    dibujarCajaTexto(textosDiagrama[1]);
    dibujarBoton(300, 390, 150, 35, "Continuar");
  } 
  else if (pantalla === 2) {
    dibujarCajaTexto(textosDiagrama[2]);
    dibujarBoton(300, 390, 150, 35, "Continuar");
  } 
  else if (pantalla === 3) {
    dibujarCajaTexto(textosDiagrama[3]);
    dibujarBoton(300, 390, 150, 35, "Continuar");
  } 
  else if (pantalla === 4) {
    dibujarCajaTexto(textosDiagrama[4]);
    dibujarBoton(120, 390, 200, 35, "Atacar a la patrulla");
    dibujarBoton(430, 390, 200, 35, "Esperar y avanzar con sigilo");
  } 
  else if (pantalla === 5) {
    dibujarCajaTexto(textosDiagrama[5]);
    dibujarBoton(300, 390, 150, 35, "Continuar");
  } 
  else if (pantalla === 6) {
    dibujarCajaTexto(textosDiagrama[6]);
    dibujarBoton(300, 390, 150, 35, "Continuar");
  } 
  else if (pantalla === 7) {
    dibujarCajaTexto(textosDiagrama[7]);
    dibujarBoton(300, 390, 200, 35, "Enfrentar al Comandante");
  } 
  else if (pantalla === 8) { // FINAL 1
    dibujarCajaTexto(textosDiagrama[8]);
    dibujarBoton(300, 390, 200, 35, "Ver Post-Créditos");
  } 
  else if (pantalla === 9) {
    dibujarCajaTexto(textosDiagrama[9]);
    dibujarBoton(300, 390, 150, 35, "Continuar");
  } 
  else if (pantalla === 10) {
    dibujarCajaTexto(textosDiagrama[10]);
    dibujarBoton(300, 390, 150, 35, "Continuar");
  } 
  else if (pantalla === 11) {
    dibujarCajaTexto(textosDiagrama[11]);
    dibujarBoton(300, 390, 150, 35, "Continuar");
  } 
  else if (pantalla === 12) {
    dibujarCajaTexto(textosDiagrama[12]);
    dibujarBoton(120, 390, 250, 35, "Enfrentarse con los enemigos");
    dibujarBoton(430, 390, 250, 35, "Noquearlos por detrás con sigilo");
  } 
  else if (pantalla === 13) {
    dibujarCajaTexto(textosDiagrama[13]);
    dibujarBoton(300, 390, 150, 35, "Continuar");
  } 
  else if (pantalla === 14) {
    dibujarCajaTexto(textosDiagrama[14]);
    dibujarBoton(300, 390, 150, 35, "Ir al Calabozo");
  } 
  else if (pantalla === 15) { // FINAL 2
    dibujarCajaTexto(textosDiagrama[15]);
    dibujarBoton(300, 390, 200, 35, "Ver Post-Créditos");
  } 
  else if (pantalla === 16) {
    dibujarCajaTexto(textosDiagrama[16]);
    dibujarBoton(300, 390, 150, 35, "Infiltrarse con C4");
  } 
  else if (pantalla === 17) {
    dibujarCajaTexto(textosDiagrama[17]);
    dibujarBoton(300, 390, 150, 35, "Escape de la base");
  } 
  else if (pantalla === 18) {
    dibujarCajaTexto(textosDiagrama[18]);
    dibujarBoton(300, 390, 150, 35, "Ver desenlace");
  } 
  else if (pantalla === 19) { // FINAL 3
    dibujarCajaTexto(textosDiagrama[19]);
    dibujarBoton(300, 390, 200, 35, "Ver Post-Créditos");
  } 
  else if (pantalla === 20) { // POST-CRÉDITOS
    dibujarPostCreditosArcade();
    dibujarBoton(300, 390, 150, 35, "Volver al Menú");
  }
}

function mousePressed() {
  if (musica && musica.isLoaded && musica.isLoaded() && !musica.isPlaying()) {
    musica.loop();
    musica.setVolume(0.3);
  }

  let y = 390;

  if (pantalla === 0) {
    if (mouseX > 300 && mouseX < 440 && mouseY > y && mouseY < y + 35) cambiarPantalla(1);
    return;
  }

  if (pantalla === 4) {
    if (mouseX > 120 && mouseX < 370 && mouseY > y && mouseY < y + 35) cambiarPantalla(5);
    else if (mouseX > 430 && mouseX < 680 && mouseY > y && mouseY < y + 35) cambiarPantalla(9);
    return;
  }

  if (pantalla === 12) {
    if (mouseX > 120 && mouseX < 370 && mouseY > y && mouseY < y + 35) cambiarPantalla(13);
    else if (mouseX > 430 && mouseX < 680 && mouseY > y && mouseY < y + 35) cambiarPantalla(16);
    return;
  }

  if (pantalla === 8 || pantalla === 15 || pantalla === 19) {
    if (mouseX > 300 && mouseX < 500 && mouseY > y && mouseY < y + 35) cambiarPantalla(20);
    return;
  }

  if (pantalla === 20) {
    if (mouseX > 300 && mouseX < 440 && mouseY > y && mouseY < y + 35) cambiarPantalla(0);
    return;
  }

  if (mouseX > 300 && mouseX < 440 && mouseY > y && mouseY < y + 35) {
    if (pantalla === 13) cambiarPantalla(14);
    else if (pantalla === 14) cambiarPantalla(15);
    else if (pantalla === 16) cambiarPantalla(17);
    else if (pantalla === 17) cambiarPantalla(18);
    else if (pantalla === 18) cambiarPantalla(19);
    else cambiarPantalla(pantalla + 1);
  }
}

function keyPressed() {
  if (pantalla === 0) {
    cambiarPantalla(1);
  }
}
