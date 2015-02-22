/*Imperfecto no borra las cookies*/

function mostrarVentana(universitario) {
	var codigo = "<html>"+
		"<head><title>Cookies</title>"+
		"<style>"+
			"body{"+
			"background-color: rgba(0,0,0,0.7);"+
			" color: white;"+
			"}"+
		"</style>"+
		"<body>"+
		"<p>Nombre: " + universitario.nombre + " </p>"+
        "<p>Primer apellido: " + universitario.apellido + " </p>"+
        "<p>Segundo apellido: " + universitario.apellido2 + " </p>"+
        "<p>Edad: " + universitario.getEdad() + " </p>";

      	ventana = window.open('','','width=500','height=300');
      	ventana.document.open();
      	ventana.document.write(codigo);
      	ventana.document.close();
};

function Universitario (nombre, apellido, apellido2, fechaNac){
	this.nombre = nombre;
	this.apellido = apellido;
	this.apellido2 = apellido2;
	this.fechaNac = fechaNac;
}

Universitario.prototype.mostrar = function() {
	mostrarVentana(this);
};

Universitario.prototype.getEdad = function() {
	var fechaNac = this.fechaNac.split('-');
		// fechaNac[0] -> dia; 
		// fechaNac[1]-> mes;
		// fechaNac[2] -> año
        var fechaAct = new Date(); 
        var diaAct = fechaAct.getDate();
        var mesAct = fechaAct.getMonth();
        var anyoAct = fechaAct.getFullYear();

        var edad = anyoAct-fechaNac[2];

        if(fechaNac[1] > mesAct){
            edad--;
        }
        if(fechaNac[1] == mesAct){
                if(fechaNac[0] > diaAct){
                    edad--;
                }
            }
        if(fechaNac[2] == anyoAct)
        edad = 0;

        return edad;
    }	
/*Fin de prototype universitario*/

/*
Comprueba si un dato es correcto o no.
@patron: Expresion regular
@valor: Valor a comprobar si es correcto
@escritura: Donde se insertara una imagen indicando si es correcto o no
*/


function comprobarDato(patron, valor, escritura){
	var patron = new RegExp(patron);
	var valor = valor;
	var correcto = patron.test(valor);
	if(!correcto)
		escritura.innerHTML = ("<img src='img/mal.png' height='20px' width='20px'>");
	else
		escritura.innerHTML = ("<img src='img/correcto.png' height='20px' width='20px'>");
	return correcto;
}

/*Comprueba nombre*/
	function comprobarNombre(){
		return comprobarDato("^([a-zA-Z]+)$" , document.getElementById('nombre').value, document.getElementById('nombreErroneo'));
		}

/*Comprueba apellido*/
	function comprobarApellido(){
		return comprobarDato("^([a-zA-Z]+)$" , document.getElementById('apellido').value,document.getElementById('apellidoErroneo'));
		}

		/*Comprueba apellido*/
		function comprobarApellido2(){
		return comprobarDato("^([a-zA-Z]+)$" , document.getElementById('apellido2').value,document.getElementById('apellido2Erroneo'));
		}

		/*Comprueba fechas*/
		function comprobarFecha(){
		return comprobarDato("(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}" , document.getElementById('fecha').value,document.getElementById('fechaErroneo'));
		}

		/*Comprueba condiciones*/
		function comprobarCondiciones(){
			var valor = document.getElementById('aceptar').checked;
			var condiciones = document.getElementById('condicionesErroneo');

			if(!valor)
				condiciones.innerHTML = ("Debes aceptar las condiciones de uso");
			else
				condiciones.innerHTML = ("<img src='img/correcto.png' height='20px' width='20px'>");

			return valor;
		}

		/*Valida los datos*/
		function validarDatos() {
		    var camposValidados = [];
		    camposValidados.push(comprobarNombre());
		    camposValidados.push(comprobarApellido());
		    camposValidados.push(comprobarApellido2()); 
		    camposValidados.push(comprobarFecha());
		    camposValidados.push(comprobarCondiciones());

		    var validado = true;

		    for (var i = 0; i < camposValidados.length; i++) {
		        if (!camposValidados[i]) {
		            validado = false;
		            break;
		        }
		    }

		    if (!validado) {
		        return false;
		    }
		    if(validado===true){
		    	console.log('validado' + validado);
		    	crearCookies();
		    	var nombre = document.getElementById('nombre').value;
		    	var apellido = document.getElementById('apellido').value;
		    	var apellido2 = document.getElementById('apellido2').value;
		    	var fecha = document.getElementById('fecha').value;
		    	var uni = new Universitario(nombre, apellido, apellido2,fecha);
		    	uni.mostrar();
		    	crearCookies();
		    }
		    else{
		    	return;
		    }
			}

		function crearCookies(){
			var exp = new Date();
			exp.setTime(exp.getTime() + 1000 * 60 * 60 * 24 * 3);

			document.cookie = "nombre" + "=" + document.getElementById('nombre').value
			document.cookie = "primerApellido" + "=" + document.getElementById('apellido').value
			document.cookie = "segundoApellido" + "=" + document.getElementById('apellido2').value
			document.cookie = "fecha" + "=" + document.getElementById('fecha').value
		}

		function getCookie(key) {

		    var name = key + "=";
		    var ca = document.cookie.split(';');
		    for(var i=0; i<ca.length; i++) {
		        var c = ca[i];
		        while (c.charAt(0)==' ') 
		        	c = c.substring(1);
		        if (c.indexOf(name) != -1) 
		        	return c.substring(name.length,c.length);
		    }
		    return "";
		}

		function limpiar(){
			document.getElementById('nombre').value = "";
			document.getElementById('apellido').value = "";
			document.getElementById('apellido2').value = "";
			document.getElementById('fecha').value = "";

			var cookies = ['nombre','primerApellido','segundoApellido','fecha'];

			for (var i = cookies.length-1; i >= 0; i--) {
				console.log(cookies[i]);
				delete_cookie(i);
			}
		}


		function delete_cookie( name ) {
  		document.cookie = name + '=' + ' expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		}

		window.onload = function (){
			var nombre = getCookie('nombre');
			var apellido = getCookie('primerApellido');
			var apellido2 = getCookie('segundoApellido');
			var fecha = getCookie('fecha');
			document.getElementById('nombre').value = nombre;
			document.getElementById('apellido').value = apellido;
			document.getElementById('apellido2').value = apellido2;
			document.getElementById('fecha').value = fecha;
		}

