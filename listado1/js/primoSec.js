/*
5. Implenta NumerosPrimosEnSecuencia que pida un número e indique cuántos números 
primos existen entre el 1 y dicho número.

No funciona bien

Alejandro Gutierrez Lozano
*/
function primo() {

 var numero=parseInt(document.getElementById('numero').value);
 var contenido = document.getElementById('contenido');
 var a = 0;
 var total = 0;

	for (var i = 0; i <= numero; i++) {
		for (var j = 1; j <= i ; j++) {
			if (i % j === 0)
				a++;
			if(a === 2){
				total++;
				a = 0;
			}
		}
		console.log(total);
		contenido.innerHTML = ('Entre el 1 y el numero escogido hay ' + total + ' numeros primos');
	}
}