//video: Ivan Ferrin
//https://youtu.be/z9sedS5AxMU

//video: Di Salvo Valentino
//https://youtu.be/Lgj9pw5NJxA

let pantalla = 0; 
let framesEstado = 0;

let imgFondos = [];
let imgInicio;
let yCreditos = 450;
let musica;

let textosDiagrama = [
  "MISIÓN: Infiltrarse a la base enemiga y capturar la base o destruirla por completo.", // 0
  "INICIO: La misión comienza cayendo desde un helicóptero en paracaídas.", // 1
  "Aterriza en un campo sin ser descubierto, super jones se despliega tras las líneas enemigas.", // 2
  "Se encuentra con una patrulla enemiga ¿cómo debería actuar?", // 3
  "Logra eliminar a los enemigos; pero recibió disparos tras el enfrentamiento y decide curarse para seguir avanzando.", // 4
  "Avanzó rápidamente por las trincheras enemigas, evitando minas y nidos de ametralladoras.", // 5
  "Llegamos a la base enemiga y entramos a la fuerza por la puerta principal y nos enfrentamos con el comandante de la base.", // 6
  "FINAL: Después de enfrentarnos con todos los enemigos de la base, el comandante se rinde y capturamos la base con éxito, super jones se comunica con la base aliada diciendo misión cumplida.", // 7
  "Después de esperar que se vayan los enemigos, siguió avanzando sigilosamente por los arbustos.", // 8
  "Super Joe decide desviarse de la ruta principal para dirigirse al campamento de prisioneros de guerra.", // 9
  "Al llegar al campamento, destruye o neutraliza las torres y consolas de comunicación enemigas para evitar que los guardias pidan refuerzos o den la alarma de ejecución.", // 10
  "¿Se encuentran con una unidad de élite y guardias de combate que custodian el perímetro?", // 11
  "Super Jones se enfrenta con los guardias de combate pero uno de la unidad élite lo intercepta por detrás apuntándole con un arma.", // 12
  "Super Jones sin poder hacer nada, tiró las armas y (porque estaba rodeado) se lo llevaron a la base enemiga.", // 13
  "FINAL DEFEAT: Al llegar a la base lo llevaron con el comandante. El comandante ordena que lo metan al calabozo, super jones sin poder hacer nada, se lo llevan al calabozo a esperar que lo rescaten se da por Misión fallida.", // 14
  "Super Jones tira una flashback y logra noquearlos por detrás quedándose inconscientes; super jones se disfraza como uno de ellos.", // 15
  "Super Jones logra entrar a la base enemiga, se encuentra con una caja de C4 y pone los C4 en los puntos críticos de la base enemiga sin que lo detecten.", // 16
  "Super Jones sale corriendo desesperadamente antes de que la detonación en cadena destruya todo el perímetro.", // 17
  "FINAL: La base enemiga estalla por completo sin dejar ningún rastro, los enemigos no lograron escapar de la explosión que terminaron muriendo todos, super jones pide un helicóptero aliado y logra escapar con éxito y se da por misión cumplida.", // 18
  "POST-CRÉDITOS & RANKING ARCADE" // 19
];

function preload() {
  soundFormats('mp3', 'wav');
  musica = loadSound("Sonidos/musica.mp3");
}

async function setup() {
  createCanvas(800, 450);

  imgInicio = loadImage("Data/fondo_inicio.jpg");
  for (let i = 0; i <= 18; i++) {
    imgFondos[i] = loadImage("Data/fondo_" + i + ".jpg");
  }
  imgFondos[19] = loadImage("Data/sprite_final.png");
}

function draw() {
  background(0);
  framesEstado++;
  if (pantalla === 0 && imgInicio) {
    image(imgInicio, 0, 0, width, height);
  } else if (imgFondos[pantalla]) {
    image(imgFondos[pantalla], 0, 0, width, height);
  }

  switch (pantalla) {
    case 0:
      dibujarCajaTexto(textosDiagrama[0]);
      dibujarBoton(300, 390, 200, 35, "COMENZAR");
      break;

    case 1:
      dibujarCajaTexto(textosDiagrama[1]);
      dibujarBoton(300, 390, 200, 35, "Continuar");
      break;

    case 2:
      dibujarCajaTexto(textosDiagrama[2]);
      dibujarBoton(300, 390, 200, 35, "Continuar");
      break;

    case 3:
      dibujarCajaTexto(textosDiagrama[3]);
      dibujarBoton(120, 390, 250, 35, "Atacar a la patrulla");
      dibujarBoton(430, 390, 250, 35, "Esperar y avanzar con sigilo");
      break;

    case 4:
      dibujarCajaTexto(textosDiagrama[4]);
      dibujarBoton(300, 390, 200, 35, "Continuar");
      break;

    case 5:
      dibujarCajaTexto(textosDiagrama[5]);
      dibujarBoton(300, 390, 200, 35, "Continuar");
      break;

    case 6:
      dibujarCajaTexto(textosDiagrama[6]);
      dibujarBoton(300, 390, 200, 35, "Enfrentar al Comandante");
      break;

    case 7:
      dibujarCajaTexto(textosDiagrama[7]);
      dibujarBoton(300, 390, 200, 35, "Ver Post-Créditos");
      break;

    case 8:
      dibujarCajaTexto(textosDiagrama[8]);
      dibujarBoton(300, 390, 200, 35, "Continuar");
      break;

    case 9:
      dibujarCajaTexto(textosDiagrama[9]);
      dibujarBoton(300, 390, 200, 35, "Continuar");
      break;

    case 10:
      dibujarCajaTexto(textosDiagrama[10]);
      dibujarBoton(300, 390, 200, 35, "Continuar");
      break;

    case 11:
      dibujarCajaTexto(textosDiagrama[11]);
      dibujarBoton(120, 390, 250, 35, "Enfrentarse con los enemigos");
      dibujarBoton(430, 390, 250, 35, "Noquearlos por detrás con sigilo");
      break;

    case 12:
      dibujarCajaTexto(textosDiagrama[12]);
      dibujarBoton(300, 390, 200, 35, "Continuar");
      break;

    case 13:
      dibujarCajaTexto(textosDiagrama[13]);
      dibujarBoton(300, 390, 200, 35, "Ir al Calabozo");
      break;

    case 14:
      dibujarCajaTexto(textosDiagrama[14]);
      dibujarBoton(300, 390, 200, 35, "Ver Post-Créditos");
      break;

    case 15:
      dibujarCajaTexto(textosDiagrama[15]);
      dibujarBoton(300, 390, 200, 35, "Infiltrarse con C4");
      break;

    case 16:
      dibujarCajaTexto(textosDiagrama[16]);
      dibujarBoton(300, 390, 200, 35, "Escape de la base");
      break;

    case 17:
      dibujarCajaTexto(textosDiagrama[17]);
      dibujarBoton(300, 390, 200, 35, "continuar");
      break;

    case 18:
      dibujarCajaTexto(textosDiagrama[18]);
      dibujarBoton(300, 390, 200, 35, "Ver Post-Créditos");
      break;

    case 19:
      dibujarPostCreditos();
      dibujarBoton(300, 390, 200, 35, "Volver al Menú");
      break;
  }
}

function mousePressed() {
  if (musica && musica.isLoaded() && !musica.isPlaying()) {
    musica.loop();
    musica.setVolume(0.1);
  }

  let y = 390;

  if (pantalla === 0) {
    if (mouseX > 300 && mouseX < 500 && mouseY > y && mouseY < y + 35) cambiarPantalla(1);
    return;
  }

  if (pantalla === 3) {
    if (mouseX > 120 && mouseX < 370 && mouseY > y && mouseY < y + 35) cambiarPantalla(4);
    else if (mouseX > 430 && mouseX < 680 && mouseY > y && mouseY < y + 35) cambiarPantalla(8);
    return;
  }

  if (pantalla === 11) {
    if (mouseX > 120 && mouseX < 370 && mouseY > y && mouseY < y + 35) cambiarPantalla(12);
    else if (mouseX > 430 && mouseX < 680 && mouseY > y && mouseY < y + 35) cambiarPantalla(15);
    return;
  }

  if (pantalla === 7 || pantalla === 14 || pantalla === 18) {
    if (mouseX > 300 && mouseX < 500 && mouseY > y && mouseY < y + 35) cambiarPantalla(19);
    return;
  }

  if (pantalla === 19) {
    if (mouseX > 300 && mouseX < 500 && mouseY > y && mouseY < y + 35) cambiarPantalla(0);
    return;
  }

  if (mouseX > 300 && mouseX < 500 && mouseY > y && mouseY < y + 35) {
    if (pantalla === 12) cambiarPantalla(13);
    else if (pantalla === 13) cambiarPantalla(14);
    else if (pantalla === 15) cambiarPantalla(16);
    else if (pantalla === 16) cambiarPantalla(17);
    else if (pantalla === 17) cambiarPantalla(18);
    else cambiarPantalla(pantalla + 1);
  }
}

function keyPressed() {
  if (pantalla === 0) {
    cambiarPantalla(1);
  }
}
