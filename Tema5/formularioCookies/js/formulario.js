/*No funciona en chrone*/

/*Comprueba nombre*/
		function comprobarNombre(){
			 var patronNombre = new RegExp("^[a-zA-Z]+$");
			 var nombre = document.getElementById('nombreErroneo');
			var valor = document.getElementById('nombre').value;

			if(valor === "")
				nombre.innerHTML = ("<img src='img/mal.png' height='20px' width='20px'>");
			var bool = patronNombre.test(valor);
			if(bool === false)
				nombre.innerHTML = ("<img src='img/mal.png' height='20px' width='20px'>");
			else
				nombre.innerHTML = ("<img src='img/correcto.png' height='20px' width='20px'>");
			return bool;
		}

		/*Comprueba apellidos*/
		function comprobarApellidos(){
			var patronApellidos = new RegExp("([a-zA-Z]+\\s)([a-zA-Z]+)");
			var apellidos = document.getElementById('apellidosErroneo');
			var valor = document.getElementById('apellidos').value;
			var bool = patronApellidos.test(valor);

			if(valor === ""){
				apellidos.innerHTML = ("<img src='img/correcto.png' height='20px' width='20px'>");
			return true;
			}

			if(bool === false)
				apellidos.innerHTML = ("<img src='img/mal.png' height='20px' width='20px'>");
			else
				apellidos.innerHTML = ("<img src='img/correcto.png' height='20px' width='20px'>");
			return bool;
		}

		/*Comprueba fechas*/
		function comprobarFecha(){
			var patronFecha = new RegExp("(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}");
			var valor = document.getElementById('fecha').value;
			var fecha = document.getElementById('fechaErroneo');

			if(valor === "")
				fecha.innerHTML = ("<img src='img/mal.png' height='20px' width='20px'>");
			var bool = patronFecha.test(valor);
			if(bool === false)
				fecha.innerHTML = ("<img src='img/mal.png' height='20px' width='20px'>");
			else
				fecha.innerHTML = ("<img src='img/correcto.png' height='20px' width='20px'>");
			return bool;
		}

		/*Comprueba DNI*/
		function comprobarDNI(){
			var patronDNI = new RegExp("(\\d{8}\\D)");
			var valor = document.getElementById('dni').value;
			var dni = document.getElementById('DNIErroneo');

			if(valor === "")
				dni.innerHTML = ("<img src='img/mal.png' height='20px' width='20px'>");
			var bool = patronDNI.test(valor);
			if(bool === false)
				dni.innerHTML = ("<img src='img/mal.png' height='20px' width='20px'>");
			else
				dni.innerHTML = ("<img src='img/correcto.png' height='20px' width='20px'>");
			return bool;
		}

		/*Comrpueba Email*/
		function comprobarEmail(){
			var patronEmail = new RegExp("^[a-zA-Z.0-9\-]+@[a-zA-Z]+(?:\.[a-zA-Z]+){1,2}$");
			var valor = document.getElementById('email').value;
			var email = document.getElementById('emailErroneo');

			if(valor === "")
				email.innerHTML = ("<img src='img/mal.png' height='20px' width='20px'>");
			var bool = patronEmail.test(valor);
			if(bool === false)
				email.innerHTML = ("<img src='img/mal.png' height='20px' width='20px'>");
			else
				email.innerHTML = ("<img src='img/correcto.png' height='20px' width='20px'>");
			return bool;
		}

		/*Comprueba sexo*/
		function comprobarSexo () {
			var sexo = document.getElementById('sexoErroneo');
			sexo.innerHTML = ("<img src='img/correcto.png' height='20px' width='20px'>");
			return true;
		}


		/*Comprueba telefono*/
		function comprobarTelefono(){
			var patronTelefono = new RegExp("^\\d{9}$");
			var valor = document.getElementById('tel').value;
			var telefono = document.getElementById('telefonoErroneo');

			if(valor === ""){
				telefono.innerHTML = ("<img src='img/correcto.png' height='20px' width='20px'>");
				return true;
			}
			var bool = patronTelefono.test(valor);
			if(bool === false)
				telefono.innerHTML = ("<img src='img/mal.png' height='20px' width='20px'>");
			else
				telefono.innerHTML = ("<img src='img/correcto.png' height='20px' width='20px'>");
			return bool;
		}

		/*Comprueba numero de cuenta*/
		function comprobarNumero(){
			var patronNumero = new RegExp("^[0-9]{13,16}$");
			var valor = document.getElementById('cuenta').value;
			var numero = document.getElementById('cuentaErroneo');

			if(valor === ""){
				numero.innerHTML = ("<img src='img/correcto.png' height='20px' width='20px'>");
				return true;
			}
			var bool = patronNumero.test(valor);
			if(bool === false)
				numero.innerHTML = ("<img src='img/mal.png' height='20px' width='20px'>");
			else
				numero.innerHTML = ("<img src='img/correcto.png' height='20px' width='20px'>");

			return bool;
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

		function buscarSexo(){
			sexo = document.getElementsByName('sexo');
			for (var i = 0.; i < sexo.length; i++) {
				console.log(sexo[i].value);
				if(sexo[i].checked === true){
					return sexo[i].value;
				}
			}
		}

		/*Valida los datos*/
		function validarDatos() {
		    var camposValidados = [];
		    camposValidados.push(comprobarNombre());
		    camposValidados.push(comprobarApellidos());
		    camposValidados.push(comprobarFecha());
		    camposValidados.push(comprobarDNI());
		    camposValidados.push(comprobarEmail());
		    camposValidados.push(comprobarSexo());
		    camposValidados.push(comprobarTelefono());
		    camposValidados.push(comprobarNumero());
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

		    return true;
			}

		function crearCookies(){
			var exp = new Date();
			exp.setTime(exp.getTime() + 1000 * 60 * 60 * 24 * 3);

			document.cookie = "nombre" + "=" + document.getElementById('nombre').value + " expires " + exp;
			document.cookie = "apellidos" + "=" + document.getElementById('apellidos').value + " expires " + exp;
			document.cookie = "fecha" + "=" + document.getElementById('fecha').value + " expires " + exp;
			document.cookie = "dni" + "=" + document.getElementById('dni').value + " expires " + exp;
			document.cookie = "email" + "=" + document.getElementById('email').value + " expires " + exp;
			document.cookie = "telefono" + "=" + document.getElementById('tel').value + " expires " + exp;
			document.cookie = "sexo" + "=" + buscarSexo() + " expires " + exp;
			document.cookie = "cuenta" + "=" + document.getElementById('cuenta').value + " expires " + exp;
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
		function ventanaCookies(){
			if(validarDatos()===false){
				return;
			}
			crearCookies();

			var nombre = getCookie('nombre');
			var apellidos = getCookie('apellidos');
			var fecha = getCookie('fecha');
			var dni = getCookie('dni');
			var email = getCookie('email');
			var telefono = getCookie('telefono');
			var sexo = getCookie('sexo');
			var cuenta = getCookie('cuenta');

			var error = "";

		var codigo = "<html>"+
		"<head><title>Cookies</title>"+
		"<body>"+
		"<p>Nombre: " + nombre + " </p>"+
        "<p>Apellidos: " + apellidos + " </p>"+
        "<p>Fecha: " + fecha + " </p>"+
        "<p>DNI: " + dni + " </p>"+
        "<p>email: " + email + " </p>"+
        "<p>Sexo: " + sexo + " </p>"+
        "<p>Telefono: " + telefono + " </p>"+
        "<p>Cuenta: " + cuenta + " </p>";

      	ventana = window.open('','','width=500','height=300');
      	ventana.document.open();
      	ventana.document.write(codigo);
      	ventana.document.close();
		}
		

		function cargarEventoSubmit() {
    	document.forms[0].onsubmit = validarDatos;
		}

		function cargarBlur(){
			document.getElementById("nombre").addEventListener('blur', function(){comprobarNombre();}, false);
			document.getElementById("apellidos").addEventListener('blur', function(){comprobarApellidos();}, false);
			document.getElementById("fecha").addEventListener('blur', function(){comprobarFecha();}, false);
			document.getElementById("dni").addEventListener('blur', function(){comprobarDNI();}, false);
			document.getElementById("email").addEventListener('blur', function(){comprobarEmail();}, false);
			document.getElementById("tel").addEventListener('blur', function(){comprobarTelefono();}, false);
			document.getElementById("grupoSexo").addEventListener('blur', function(){comprobarSexo();}, false);
			document.getElementById("cuenta").addEventListener('blur', function(){comprobarNumero();}, false);
			document.getElementById("aceptar").addEventListener('blur', function(){comprobarCondiciones();}, false);
		}

		window.onload = function () {
				cargarBlur();
				cargarEventoSubmit();
		}