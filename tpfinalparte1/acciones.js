function accion_correr() {
  if (posX_personaje < 200) {
    posX_personaje += 2;
  } else {
    if (!balaDisparada && !enemigoMuerto) {
      balaX = posX_personaje + 35;
      balaDisparada = true;
    }
  }

  let frameCorrer = floor(framesEstado / velocidadAnimacion) % correr_cant;
  image(correr[frameCorrer], posX_personaje, posY_personaje, 55, 65);

  if (balaDisparada && !enemigoMuerto) {
    fill(255, 255, 0);
    noStroke();
    ellipse(balaX, posY_personaje + 27, 12, 6);
    balaX += 6;
    
//si la bala le da al enemigo muere
    if (balaX >= posX_enemi) {
      enemigoMuerto = true;
      balaDisparada = false;
      estado_personaje = "FUMAR";
    }
  }

  if (!enemigoMuerto) {
    let frameEnemi = floor(framesEstado / velocidadAnimacion) % enemi_cant;
    image(enemi[frameEnemi], posX_enemi, posY_enemi, 50, 65);
  }
}
// despues que matar al enemigo se pone a fumar the big boss
function accion_fumar() {
  image(muertoImg, posX_enemi, posY_enemi - 5, 52, 68);
  let frameFumar = floor(framesEstado / velocidadAnimacion) % fumar_cant;
  image(fumar[frameFumar], posX_personaje, posY_personaje - 5, 60, 70);
  if (tituloY < 40) {
    tituloY = lerp(tituloY, 40, 0.05);
  }
  image(tituloImg, width / 2 - 180, tituloY, 360, 90);
}
