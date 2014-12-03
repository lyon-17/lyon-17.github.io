/*
2. Implementa DeSieteEnSiete que escriba los números del 100 al 0 de 7 en siete

Alejandro Gutierrez Lozano
*/
function sieteEnSiete () {

	var contenido = document.getElementById('contenido');
	contenido.innerHTML = ('');
	for (var i = 100; i >= 0 ; i--) {
		if(i%7===0)
			contenido.innerHTML = contenido.innerHTML + ' ' + (i);
	}
}

