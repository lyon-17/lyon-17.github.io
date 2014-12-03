/*
6. Implementa OrdenaTres que pida tres números y los muestre ordenados de menor a 
mayor

Alejandro Gutierrez Lozano
*/
function ordenar () {
	var contenido = document.getElementById('contenido');
	contenido.innerHTML = ('');
	var numero1 = parseInt(document.getElementById('numero1').value);
	var numero2 = parseInt(document.getElementById('numero2').value);
	var numero3 = parseInt(document.getElementById('numero3').value);
	if(isNaN(numero1) || isNaN(numero2) || isNaN(numero3)){
		contenido.innerHTML = ('escribe tres numeros');
		return;
	}

	var mayor = Math.max(numero1,numero2,numero3);
	var menor = Math.min(numero1,numero2,numero3);

	if(mayor === numero1 && menor === numero2)
		contenido.innerHTML = ('Numeros ordenados de menor a mayor: '+menor + ' ' + numero3 + ' ' + mayor);
	else if(mayor === numero1 && menor === numero3)
		contenido.innerHTML = ('Numeros ordenados de menor a mayor: '+menor + ' ' + numero2 + ' ' + mayor);
	else if(mayor === numero2 && menor === numero1)
		contenido.innerHTML = ('Numeros ordenados de menor a mayor: '+menor + ' ' + numero3 + ' ' + mayor);
	else if(mayor === numero2 && menor === numero3)
		contenido.innerHTML = ('Numeros ordenados de menor a mayor: '+menor + ' ' + numero1 + ' ' + mayor);
	else if(mayor === numero3 && menor === numero1)
		contenido.innerHTML = ('Numeros ordenados de menor a mayor: '+menor + ' ' + numero2 + ' ' + mayor);
	else
		contenido.innerHTML = ('Numeros ordenados de menor a mayor: '+menor + ' ' + numero1 + ' ' + mayor);
}