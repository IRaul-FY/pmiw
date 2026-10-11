function cambiarPantalla(nuevaPantalla) {
  pantalla = nuevaPantalla;
  framesEstado = 0;
}

function dibujarCajaTexto(texto) {
  fill(0, 220);
  rect(0, 300, width, 150);
  fill(255);
  textSize(20);
  textAlign(LEFT, TOP);
  text(texto, 20, 310, 760, 70);
}

function dibujarBoton(x, y, w, h, etiqueta) {
  let hovering = mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
  fill(hovering ? color(255, 200, 0, 230) : color(0, 0, 0, 190));
  stroke(255);
  rect(x, y, w, h, 4);
  noStroke();
  fill(hovering ? color(0) : color(255));
  textAlign(CENTER, CENTER);
  textSize(12);
  text(etiqueta, x + w / 2, y + h / 2);
}

function dibujarPostCreditos() {
  fill(0, 200);
  rect(0, 0, width, height);
  textAlign(CENTER, CENTER);
  
  textSize(24);
  fill(255, 200, 0);
  text("=== TOP PLAYERS / POST-CRÉDITOS ===", width / 2, 60);

  textSize(16);
  fill(0, 255, 255);
  text("1ST  999900 PTS - IVAN RAUL FERRIN YEPEZ", width / 2, 120);
  text("2ND  850000 PTS - Di Salvo Valentino", width / 2, 160);

  stroke(255, 200, 0);
  line(150, 210, 650, 210);
  noStroke();

  textSize(16);
  fill(255);
  text("Materia: Programación para medios interactivos orientada a las tecnologías web", width / 2, 240);
  text("Comisión: 4", width / 2, 280);
  text("Docente: Leonardo Garay", width / 2, 320);
}
