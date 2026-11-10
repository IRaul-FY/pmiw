class juego{
   constructor(){
     this.crearPersonaje();
     this.crearEnemigos();
    }
  }
  
  dibujar(){
    this.Persoanje.dibujar();
    
    for(let i=0; i<10,i++){
      this.enemigos[i].dibujar();
  }
  
  iniciar(){
  
  }
  
  crearEnemigo(){
    this.enemigos = []
    for(let i=0; i<10,i++){
      this.enemigos[i] = new enemigo();
    }
  }
  
  crearPersonaje(){
    this.personaje = new personaje();
  }
  
  personajeGano(){
  
  }
  
  personajePerdio(){
  
  }
}
