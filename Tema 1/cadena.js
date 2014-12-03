/*
Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
sólo por minúsculas o por una mezcla de ambas.

Alejandro Gutierrez Lozano
Komachi027@gmail.com
*/

var cadena=prompt("Indica una cadena");
alert(comprobarCadena(cadena));
function comprobarCadena (cadena) {
	if (cadena.toUpperCase()===cadena)
		return "La cadena esta formada solo por mayusculas";
	else if (cadena.toLowerCase()===cadena)
		return "La cadena esta formada solo por minusculas";
	else
		return "La cadena contiene minusculas y mayusculas";
}