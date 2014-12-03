function random () {
	return Math.round(Math.random()*100);
}

function creamayorSecuencia(){
	var contenido = document.getElementById('contenido');
	contenido.innerHTML = ('');
	var secuenciaNumeros = [];
	var secuenciaActual = [];
	var secuenciaFinal = [];
	var text = 'Secuencia: ';
	var pos = 0;
	var number = parseInt(document.getElementById('number').value);
	for (var i = 0; i < number; i++) {
		secuenciaNumeros.push(random());
	};
	for (i = 0; i < secuenciaNumeros.length; i++) {
		text += ' '+ secuenciaNumeros[i] + ' ';
		contenido.innerHTML = text;
	}
	for (i = 0; i < secuenciaNumeros.length; i++) {
		//si la longitud = 0, añade el numero
		if(secuenciaActual.length === 0){
			secuenciaActual.push(secuenciaNumeros[i]);
		}
		//de otro modo:
		else{
			// si el numero en la posicion 0 es menor que el de secuenciaNumeros, lo añade
			if(secuenciaActual[secuenciaActual.length-1 ] < (secuenciaNumeros[i])){
				secuenciaActual.push(secuenciaNumeros[i]);
			}
			else{
				if(secuenciaActual.length >= secuenciaFinal.length){
					secuenciaFinal = secuenciaActual;
					pos = (i - secuenciaFinal.length) + 1;
				}
				secuenciaActual = [];
			}
		}
	}
	text += '<br/>Secuencia mas larga: ';
	for (i = 0; i < secuenciaFinal.length; i++) {
		text += ' '+ secuenciaFinal[i] + ' ';
		contenido.innerHTML = text;
	}
	contenido.innerHTML = (contenido.innerHTML + '<br/>Tamaño: '+ secuenciaFinal.length +' Primer numero en la posicion: ' + pos);
}