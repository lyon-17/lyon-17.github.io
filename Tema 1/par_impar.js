/*
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como
resultado una cadena de texto que indica si el número es par o impar.
Mostrar por pantalla el resultado devuelto por la función.

Alejandro Gutierrez Lozano
komachi027@gmail.com
*/

var numero=prompt("Indica el numero");
var valor = par_impar(numero);
if (valor===true)
	alert("El numero es par");
else
	alert("El numero es impar");
function par_impar (numero) {
	if(numero%2==0)
		return true;
	else
		return false;
}