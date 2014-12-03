/*
7. Implementa Decena que solicite un número entre 0 y 10 (9,76876) e indique:
a. Cuántas cifras tiene (7 cifras)
b. Lo muestre del revés

Alejandro Gutierrez Lozano
*/
var cadenaV = '';
function funcion () {
	var contenido = document.getElementById('contenido');
	var numero = parseFloat(document.getElementById('numero').value);
	var numeroC = numero.toString();
	var cifras = numeroC.length-1;
	for (var i = cifras; i >= 0 ; i--) {
		cadenaV = cadenaV + numeroC.charAt(i);
	}
	if(numero > 9.9 || numero <= 0.1){
		contenido.innerHTML = ('Introduce un numero de 0.1 a 9.9');
	return;
}
	contenido.innerHTML = ('Numero de cifras: '+ cifras + '<br/>' + 'Numero del reves ' +cadenaV)
}