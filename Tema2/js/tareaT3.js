/*
Abre dos ventanas
 1. Datos de la ventana (URL, navegador, protocolo...)
 2. Portal del iesgrancapitan.
*/
function abrir () {
	var ventana = window.open('','','');  //Abre una ventana nueva en blanco
	var javaE = ventana.navigator.javaEnabled(); //Comprueba si la ventana en blanco tiene java activado
	if(javaE===true)
		texto = 'Java SI disponible en esta ventana';
	else
		texto = 'Java NO disponible en esta ventana';
	ventana.document.write(
	 '<h1>Ventana nueva</h1><br/><h2>URL completa: '+ location.href +
	 '<br/>Protocolo utilizado: '+location.protocol +
	 '<br/>Nombre en codigo del navegador: '+ navigator.appCodeName +
	 '<br/>' + texto);
	var ventana2 = window.open('http://www.iesgrancapitan.org/portal/','','width=800,height=600');//Abre otra ventana con dicha direccion
	
}
/*
Comprueba si una fecha es correcta
@dia : Dia de la fecha
@mes : Mes de la fecha
@anyo : Año de la fecha
*/
function comprobarFecha(dia,mes,anyo){
	if(isNaN(dia) || isNaN(mes) || isNaN(anyo) || dia < 1 || dia > 31 || mes < 1 || mes > 12 || anyo < 1)
		return false;
}

/*
Carga el contenido de la pagina

@nombre : Nombre enviado por el formulario
@dia : Dia pasado por el formulario
@mes : Mes pasado por el formulario
@anyo : Año pasado por el formulario
*/
function cargaContenido(nombre,dia,mes,anyo){
	
	var nombre = document.getElementById('nombre').value;
	//Obtengo el valor numerico de dia/mes/año.
	var dia = parseInt(document.getElementById('dia').value);
	var mes = parseInt(document.getElementById('mes').value);
	var anyo = parseInt(document.getElementById('anyo').value);
	var contenido = document.getElementById('contenido');
	
	if(comprobarFecha(dia,mes,anyo)===false){ //Comprueba que los valores introducidos son reales
		contenido.innerHTML = ('ERROR, indique una fecha correcta');
		return;
	}
	//Aqui inserta todo el contenido
	contenido.innerHTML = ('Buenos dias '+ nombre + //nombre
		'<br/>tu nombre tiene ' + nombre.length + //longitud de tu nombre
		' caracteres<br/>La primera letra \'e\' de tu nombre esta en la posicion ' + (nombre.indexOf('e')+1) + //posicion de la primera 3 (0 si no tienes)
		'<br/>La ultima letra \'e\' de tu nombre esta en la posicion ' + (nombre.lastIndexOf('e')+1) + //posicion de la ultima e (0 si no hay)
		'<br/>Tu nombre menos las 3 primeras letras es: ' + nombre.substr(3) +//El nombre menos las tres primeras
		'<br/>Tu nombre todo en mayusculas es: ' + nombre.toUpperCase() + //Todo en mayusculas
		'<br/>Tu edad es: '+ buscarEdad(dia,mes,anyo) + //Busca tu edad
		' años<br/>Naciste un feliz '+ buscarDia(dia,mes,anyo) +' del año ' + anyo + //Busca el dia y año
		'<br/>El coseno de 90 es ' + Math.cos(90) + //Coseno de 90
		'<br/>El numero mayor de (65,22,69,99,12) es: ' + Math.max(65,22,69,99,12) + //Mayor de todos ellos
		'<br/>Ejemplos de numero al azar entre 1 y 10: ' + Math.round(Math.random()*10)); //Numero entre 1 y 10
	
}
/*
Averigua la edad, en funcion de la fecha dada por parametro

@dia: Dia dado
@mes: Mes dado
@anyo: Año dado


*/
function buscarEdad(dia,mes,anyo){
	var fechaAct = new Date(); // Defino la fecha actual con la funcion date
	var diaAct = fechaAct.getDate();
	var mesAct = fechaAct.getMonth();
	var anyoAct = fechaAct.getFullYear();

	var edad = anyoAct-anyo;

	if(mes > mesAct){
		edad--;
	}
	if(mes == mesAct){
			if(dia > diaAct){
				edad--;
			}
		}
	if(anyo == anyoAct)
	edad = 0;

return edad;
}

/*
Busca el dia de la semana en funcion de un dia,mes y año dado

@dia : dia del mes
@mes : mes 
@anyo : año
*/

function buscarDia(dia,mes,anyo){
	var fechaB = new Date(anyo,mes-1,dia);
	
	var diaB = fechaB.getDate();
	var mesB = fechaB.getMonth();
	var anyoB = fechaB.getFullYear();
	var semanaB = fechaB.getDay();

	switch(semanaB){ //Segun el dia de la semana, devuelvo su valor (del 0-6 _ domingo-sabado)
		case 0:
		semanaB = 'domingo';
		break;
		case 1:
		semanaB = 'lunes';
		break;
		case 2:
		semanaB = 'martes';
		break;
		case 3:
		semanaB = 'miercoles';
		break;
		case 4:
		semanaB = 'jueves';
		break;
		case 5:
		semanaB = 'viernes';
		break;
		case 6:
		semanaB = 'sabado';
		break;
	}
	return semanaB;

}
