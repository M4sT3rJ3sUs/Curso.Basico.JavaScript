// Un objeto es una colección de propiedades, y una propiedad es una asociación de key (nombre, o clave) y valores.

var objecto = {}; // Object Literal Syntax 

var miAuto = {
    marca: "Toyota",  // key - value 
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function() {   // Metodo de un objeto (una función dentro de un objeto)
      return `Auto ${this.modelo} ${this.annio}`;
  }
};

miAuto.annio 
miAuto.modelo 

miAuto.detallesDelAuto(); 


// Función constructora 

for (var i = 0; i < 30; i++) {

  var coche = function coche(marca, annio, color) {
      this.marca = marca;
      this.annio = annio;
      this.color = color;
  }
  
  function crearCoche(marca, annio, color) {
      var autoNuevo = new coche(marca, annio, color);
      console.log(autoNuevo);
  }
  
  var aleatorio = Math.random()
      if (aleatorio < 0.25) {
          var posicionMarcas = 0
      }else if (aleatorio < 0.5) {
          var posicionMarcas = 1
      }else if (aleatorio < 0.75) {
          var posicionMarcas = 2
      }else {
      var posicionMarcas = 3
      }
  
  var aleatorio = Math.random()
      if (aleatorio < 0.25) {
          var posicionColores = 0
      }else if (aleatorio < 0.5) {
          var posicionColores = 1
      }else if (aleatorio < 0.75) {
          var posicionColores = 2
      }else {
      var posicionColores = 3
      }
  
  var aleatorio = Math.random()
      if (aleatorio < 0.25) {
          var annioPatente = 2017
      }else if (aleatorio < 0.5) {
          var annioPatente = 2018
      }else if (aleatorio < 0.75) {
          var annioPatente = 2019
      }else {
      var annioPatente = 2020
      }
  
  
  var marcasCoches = ["Ford", "Tesla", "Renault", "Toyota"]
  
  var coloresCoches = ["Rojo", "Verde", "Amarillo", "Negro"]
  
  
      crearCoche(marcasCoches[posicionMarcas], coloresCoches[posicionColores], annioPatente);
  }