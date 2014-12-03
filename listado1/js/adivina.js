/*
1. Implementa el juego “Adivínalo”. Consiste en que el usuario ha de adivinar un número 
entre el 1 y el 100. Mostrará un mensaje:
a. Para indicar si has acertado (en una nueva ventana)
b. Para indicar si la solución es mayor o es menor.
Al finalizar, se le preguntará al usuario si quiere repetir el juego.

Alejandro Gutierrez Lozano
*/

	var adivina = Math.round(Math.random()*100); // crea el numero
	
/*
Genera un numero aleatorio nuevo
*/
	function nuevoNumero(){
		adivina = Math.round(Math.random()*100);
	}
/*
Comprueba el numero insertado y el numero a adivinar
@adivina numero a adivinar, generado aleatoriamente
*/
	function comprobar(adivina) {

		var contenido = document.getElementById('contenido');
		var numero = parseInt(document.getElementById('numero').value);

		console.log(numero); // sirve de guia.

		if(isNaN(numero) || numero < 1 || numero > 100) //Compruebo los limites
			contenido.innerHTML = ('Numero erroneo o fuera de rango');

		else if(adivina > numero)
			contenido.innerHTML = ('El numero escogido es menor');
		else if (adivina < numero)
			contenido.innerHTML = ('El numero escogido es mayor');
		else{
			contenido.innerHTML = ('¡ Has acertado !');
			var ventana = window.open('','','width=300 height=200');
		ventana.document.write('<h1>Enhorabuena, has acertado!</h1>');
		if(confirm('Quieres jugar de nuevo')) //Creo un dialogo si quiere (o no) jugar de nuevo
			 nuevoNumero();	
		}
	}