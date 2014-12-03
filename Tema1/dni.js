var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B','N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var numeroDNI = prompt("indica el numero de DNI");
	if(numeroDNI < 0 || numeroDNI > 99999999){ // muestra un mensaje y no pregunta la letra si el numero no es correcto
		alert("Numero de DNI erróneo");		
	}	
	else{
		var letraDNI = prompt("indica la letra del DNI");
		var comprobarLetra = numeroDNI%23; // averigua la letra del DNI
		if(letraDNI.toUpperCase() !== letras[comprobarLetra]){ // compara la letra escrita y la correcta
				alert("Letra del DNI incorrecta");
		}
		else{
			alert("DNI correcto!");
		}
	}

