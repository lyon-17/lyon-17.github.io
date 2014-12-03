/*
A partir de la página web proporcionada y utilizando las funciones DOM,
mostrar por pantalla la siguiente información:

Número de enlaces de la página
Dirección a la que enlaza el penúltimo enlace
Numero de enlaces que enlazan a http://prueba
Número de enlaces del tercer párrafo

Alejandro Gutierrez Lozano
*/
window.onload = function() {
	var enlaces = document.getElementsByTagName('a');
	var parrafos = document.getElementsByTagName('p');
	var numeroEnlaces = enlaces.length;
	var direccion = enlaces[enlaces.length-2];
	var enlacesAPrueba = 0;
	var enlacesParrafo = 0;

	// Numero de enlaces de la pagina
	console.log("Numero de enlaces: "+numeroEnlaces);

	// Direccion del penultimo enlace
	console.log("Direccion del penultimo enlace: "+direccion);

	// Numero de enlaces que apuntan a http://prueba
	for (var i = enlaces.length - 1; i >= 0; i--) {
		if(enlaces[i]=="http://prueba/" || enlaces[i]=="http://prueba")
			enlacesAPrueba +=1;
	};
	console.log("Enlaces apuntando a prueba: "+enlacesAPrueba);

	// Numero de enlaces del tercer p�rrafo
	var enlacesParrafo = parrafos[2].getElementsByTagName('a');
	console.log("Enlaces del tercer parrafo: "+enlacesParrafo.length);
}