/*
Identificación válida de variables (caracteres no admitidos)

Alejandro Gutierrez Lozano
*/

var number = 2;// Puede empezar por cualquier letra
//var 47138 = 12; // No puede empezar la variable por un numero
//var %^ = 4; No admite ningun caracter especial salvo "$"y "_"
var $na = "na";//Puede empezar con "$" seguido de letras
var _12 = true;//"_" seguido de numeros
var $_;//"$" seguido de "$" o "_"
console.log("number: "+number);//2
console.log("47138: "+47138); //mostrara todos numeros como mensaje
console.log("$na: "+$na);//na
console.log("_12: "+_12);//true
console.log("$_: "+$_);// undefined





