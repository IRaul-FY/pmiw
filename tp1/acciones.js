function accion_caminar() {
  posX_fondo -= 1.5;
  let posConfesorPantalla = posX_confesor + posX_fondo;
  image(confesor[0], posConfesorPantalla, posY_confesor);

  let frame = floor(framesEstado / velocidadAnimacion) % caminar_cant;
  image(caminar[frame], posX_personaje, posY_personaje);
  if (-posX_fondo > distanciaEstatua) {
    cambiarEstado("REZAR");
  }
}

function accion_rezar() {
  let posConfesorPantalla = posX_confesor + posX_fondo;

  let frameConfesor = floor(framesEstado / velocidadAnimacion) % confesor_cant;
  image(confesor[frameConfesor], posConfesorPantalla, posY_confesor);

  let frameRezar = floor(framesEstado / velocidadAnimacion) % rezar_cant;
  image(rezar[frameRezar], posX_personaje, posY_personaje);

  let duracionCiclo = confesor_cant * velocidadAnimacion;
  if (framesEstado >= duracionCiclo) {
    cambiarEstado("QUIETO");
  }
}
function accion_quieto() {
  let posConfesorPantalla = posX_confesor + posX_fondo;
  image(confesor[confesor_cant - 1], posConfesorPantalla, posY_confesor);
  image(rezar[rezar_cant - 1], posX_personaje, posY_personaje);
  if (tituloY < 100) {
    tituloY = lerp(tituloY, 100, 0.05);
  }
  let altoTitulo = tituloImg.height * (500 / tituloImg.width);
  image(tituloImg, width / 2, tituloY, 500, altoTitulo);
}
