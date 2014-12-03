/*
4. Implenta NumeroPrimo que pida un número e indique si es primo o no

Alejandro Gutierrez Lozano
*/

function primo() {

 var numero=parseInt(document.getElementById('numero').value);
 var contenido = document.getElementById('contenido');
 var a = 0;

	for (var i = 0; i <= numero; i++) {
		if(numero%i===0) //Si es primo solo entra dos veces. Divisible por 0 y el mismo
			a++;
	}
	if (a===2) // Si solo es divisible por 0 y el mismo, es primo
		contenido.innerHTML = ('El numero es primo');
	else // En caso contrario no es primo
		contenido.innerHTML = ('El numero no es primo');
}