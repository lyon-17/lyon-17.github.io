/*
1.Al mover el ratón en cualquier punto de la ventana del navegador,
se muestre la posición del puntero respecto del navegador y respecto de la página.

2.Al pulsar cualquier tecla, el mensaje mostrado debe cambiar para
indicar el nuevo evento y su información asociada.

3.Añadir la siguiente característica al script: cuando se pulsa un botón del ratón,
el color de fondo del cuadro de mensaje debe ser amarillo (#FFFFCC) y cuando se pulsa una tecla,
el color de fondo debe ser azul (#CCE6FF). Al volver a mover el ratón, el color de fondo vuelve a ser blanco.

Alejandro Gutierrez Lozano
*/
window.onload = function() {
	function moverRaton(elEvento){
		var evento = elEvento || window.event;
		document.getElementById('info').style.backgroundColor = '#FFFFCC';
		var coorRatonX = evento.clientX;
		var coorRatonY = evento.clientY;
		var coorScreenX = evento.pageX;
		var coorScreenY = evento.pageY;
		muestraInformacion(['Coordenadas' ,
		'raton X: ' + coorRatonX + ' raton Y: ' + coorRatonY ,
		' pagina X: ' + coorScreenX + ' pagina Y: ' + coorScreenY]);
	}
	function clickTeclado(elEvento){
 		var evento = elEvento || window.event;
 		var caracter = evento.charCode || evento.keyCode;
 		document.getElementById('info').style.backgroundColor = '#CCE6FF';
 		var teclaP = evento.keyCode;
 		muestraInformacion(['Tecla' , 'Tecla pulsada: ' + teclaP , 'Caracter: ' + String.fromCharCode(caracter)]);
	}
	document.onmousemove = moverRaton;
	document.onkeypress = clickTeclado;
}
function muestraInformacion(mensaje) {
	document.getElementById("info").innerHTML = '<h1>'+mensaje[0]+'</h1>';
	for(var i=1; i<mensaje.length; i++) {
		document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
	}
}

 