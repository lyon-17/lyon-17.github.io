function crearNotas () {
	var contenido = document.getElementById('contenido');
	contenido.innerHTML = ('');
	var notas = parseInt(document.getElementById('notas').value);
	if(isNaN(notas)===true){
		contenido.innerHTML = ('¡Introduce un numero valido!');
		return;
	}
	var suma = 0;
	var arrayNotas = [notas];
	for (var i = 0 ; i < notas;  i++) {
		arrayNotas.push(Math.round(Math.random()*10));
	};
	for ( i = notas; i > 0; i--) {
		suma += arrayNotas[i];
		contenido.innerHTML = (contenido.innerHTML + arrayNotas[i] + ', ');
	};
	contenido.innerHTML = (contenido.innerHTML + '<br/>media: ' + suma/notas);
}