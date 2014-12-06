/*
Crear un script que informe al usuario en que zona de la pantalla ha pulsado el ratón.
Las zonas definidas son las siguientes: izquierda arriba, izquierda abajo, derecha arriba y derecha abajo.
Para determinar el tamaño de la ventana del navegador, utilizar la función tamanoVentanaNavegador() proporcionada.

Alejandro Gutierrez Lozano
*/

function informacion(elEvento) {
  var evento = elEvento || window.event;

  var dimensiones = tamanoVentanaNavegador();
  var pantallaX = dimensiones[0];
  var pantallaY = dimensiones[1];
  var coorX = evento.clientX;
  var coorY = evento.clientY;
  if(pantallaX/2 < coorX && pantallaY/2 < coorY)
    muestraInformacion(['Abajo Derecha']);
    else if(pantallaX/2 > coorX && pantallaY/2 < coorY)
      muestraInformacion(['Abajo Izquierda']);
    else if(pantallaX/2 > coorX && pantallaY/2 > coorY)
      muestraInformacion(['Arriba Derecha']);
    else
      muestraInformacion(['Arriba Izquierda']);

  console.log("Coordenada X: "+coorX+" coordenada Y: "+coorY);
  console.log("pantalla X: "+pantallaX/2+" pantalla Y: "+pantallaY/2);
}

function muestraInformacion(mensaje) {
  document.getElementById("info").innerHTML = '<h1>'+mensaje[0]+'</h1>';
  for(var i=1; i<mensaje.length; i++) {
    document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
  }
}

function tamanoVentanaNavegador(){
  // Adaptada de http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
  var dimensiones = [];
  
  if(typeof(window.innerWidth) == 'number') {
    // No es IE
    dimensiones = [window.innerWidth, window.innerHeight];
  } else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
    //IE 6 en modo estandar (no quirks)
    dimensiones = [document.documentElement.clientWidth, document.documentElement.clientHeight];
  } else if(document.body && (document.body.clientWidth || document.body.clientHeight)) {
    //IE en modo quirks
    dimensiones = [document.body.clientWidth, document.body.clientHeight];
  }
  
  return dimensiones;
}

document.onclick = informacion;
