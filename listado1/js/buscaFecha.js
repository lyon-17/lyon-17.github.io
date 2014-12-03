/*
8. Implementa ComprobacionFecha que solicite el día, el mes y el año e indique si la 
fecha es correcta. Si lo fuera, ha de mostrar el día después.

Alejandro Gutierrez Lozano
*/
function diaSiguiente(anyo,mes,dia){
	var fecha = new Date(anyo,mes-1,dia+1);
	console.log(fecha.getDate());
	console.log(fecha.getMonth());
	console.log(fecha.getFullYear());

	contenido.innerHTML = contenido.innerHTML + ('El dia siguiente sera: '+fecha.toDateString());
}
function comprobarFecha () {
	var contenido = document.getElementById('contenido');
	contenido.innerHTML = ('');
	var dia = parseInt(document.getElementById('dia').value);
	var mes = parseInt(document.getElementById('mes').value);
	var anyo = parseInt(document.getElementById('anyo').value);

	if(mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12)
		if(dia > 31){
			contenido.innerHTML = ('Datos incorrectos');
		return;}
	if (mes === 2 && dia > 28){
		contenido.innerHTML = ('Datos incorrectos');
		return;}
	if(mes === 2 || mes === 4 || mes === 6 || mes === 9 || mes === 11)
		if( dia > 30){
		contenido.innerHTML = ('Datos incorrectos');
			return;}
		contenido.innerHTML = ('Datos correctos<br/>');
		diaSiguiente(anyo,mes,dia);
}