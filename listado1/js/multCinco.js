/*
3. Implementa MultiplosDeCinco que pida 7 números e indique si alguno es múltiplo de 
5.

Alejandro Gutierrez Lozano
*/

function comprobar () {

	var numero1 = parseInt(document.getElementById('numero1').value);
	var numero2 = parseInt(document.getElementById('numero2').value);
	var numero3 = parseInt(document.getElementById('numero3').value);
	var numero4 = parseInt(document.getElementById('numero4').value);
	var numero5 = parseInt(document.getElementById('numero5').value);
	var numero6 = parseInt(document.getElementById('numero6').value);
	var numero7 = parseInt(document.getElementById('numero7').value);

	var contenido = document.getElementById('contenido');
	contenido.innerHTML = ('');

	if(numero1%5===0)
		contenido.innerHTML = ('El primer numero es multiplo por 5<br/>');
	if(numero2%5===0)
		contenido.innerHTML = contenido.innerHTML + ('El segundo numero es multiplo de 5<br/>');
	if(numero3%5===0)
		contenido.innerHTML = contenido.innerHTML + ('El tercer numero es multiplo de 5<br/>');
	if(numero4%5===0)
		contenido.innerHTML = contenido.innerHTML + ('El cuarto numero es multiplo de 5<br/>');
	if(numero5%5===0)
		contenido.innerHTML = contenido.innerHTML + ('El quinto numero es multiplo de 5<br/>');
	if(numero6%5===0)
		contenido.innerHTML = contenido.innerHTML + ('El sexto numero es multiplo de 5<br/>');
	if(numero7%5===0)
		contenido.innerHTML = contenido.innerHTML + ('El septimo numero es multiplo de 5<br/>');
	contenido.innerHTML = contenido.innerHTML + ('Los otros numeros no son multiplos de 5');

}