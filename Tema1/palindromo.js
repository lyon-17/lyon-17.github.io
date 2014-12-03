/* 
Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo,
es decir, si se lee de la misma forma desde la izquierda y desde la derecha.
Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".

Alejandro Gutierrez Lozano
komachi027@gmail.com
*/

var cadena=prompt("Indica una cadena");
if(comprobarCadena(cadena)!=false)
	alert("Son palindromos");
else
	alert("No son palindromos");

function comprobarCadena (cadena) {
	var cadena = cadena.replace(" ","");
	var letras=cadena.split("");
	var letrasReves=cadena.split("").reverse();
	for (var i = letras.length - 1; i >= 0; i--) {
		if(letras[i]===letrasReves[i]){
		}
		else
			return false;
	}
}