	
	function limita(maximo){
		var elemento = document.getElementById('texto');
		var informacion = document.getElementById('caracteres');
		var disponibles = maximo - (elemento.value.length);
		if(disponibles > 0)
			informacion.innerHTML = "Puedes escribir hasta " + disponibles + " caracteres";
		else
			informacion.innerHTML = "No puedes escribir mas caracteres";
		if(elemento.value.length >= maximo)
			return false;
		else
			return true;
	}

		