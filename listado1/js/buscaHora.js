
function horaSiguiente(hora,minuto,segundo){
	var fecha = new Date();
	fecha.setUTCSeconds(segundo+1);
	fecha.setUTCMinutes(minuto);
	fecha.setUTCHours(hora);

	contenido.innerHTML = contenido.innerHTML + ('el segundo siguiente sera: '+fecha.toTimeString());
}
function comprobarHora () {
	var contenido = document.getElementById('contenido');
	contenido.innerHTML = ('');
	var hora = parseInt(document.getElementById('hora').value);
	var minuto = parseInt(document.getElementById('minuto').value);
	var segundo = parseInt(document.getElementById('segundo').value);

	if(hora > 24){
			contenido.innerHTML = ('Datos incorrectos');
		return;
	}
	if (minuto > 60){
		contenido.innerHTML = ('Datos incorrectos');
		return;
	}
	if(segundo > 60){
		contenido.innerHTML = ('Datos incorrectos');
			return;
	}
		contenido.innerHTML = ('Datos correctos<br/>');
		horaSiguiente(hora,minuto,segundo);
}