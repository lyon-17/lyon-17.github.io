function random(){
	return Math.round(Math.random()*100);
}

function crearMatriz () {
	var contenido = document.getElementById('contenido');
	contenido.innerHTML = ('');
	var row = parseInt(document.getElementById('row').value);
	var col = parseInt(document.getElementById('col').value);

	if(isNaN(row) || isNaN(col)){
		contenido.innerHTML = ('Valores no numericos');
		return;
	}

	var matriz = [];
	var max = 0;
	var min = 100;
	for (var i = 0 ; i < row;  i++) {
		matriz[i] = [];
		for ( var j = 0 ; j < col; j++) {
			var number = random();
			matriz[i][j] = number;
			if(number > max)
				max = number;
			if(number < min)
				min = number;
		}
	}
	var a = 0;
	var b = 0;
	for ( i = 0 ; i < row ; i++) {
		for( j = 0 ; j < col ; j++) {
			contenido.innerHTML = (contenido.innerHTML +matriz[i][j] +' ');
		};
		contenido.innerHTML = (contenido.innerHTML + '<br/>');
	};
	contenido.innerHTML = (contenido.innerHTML + '<br/>Maximo: ' + max + ' Minimo: ' + min);

}