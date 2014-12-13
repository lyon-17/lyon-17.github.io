/*Variables cambiando de tipo

Alejandro Gutierrez Lozano*/

var numero=1;
var cadena="hola";
var bool=true;
var nulo=null;
var unde=undefined;
var array=[1,2];
var objeto={};
var notNumber=NaN;

console.log("cadena a numero: "+parseInt(cadena));//NaN
console.log("undefined a numero: "+parseInt(unde));//NaN
console.log("Array a numero: "+parseInt(array));//1
console.log("true a numero: "+parseInt(bool));//NaN
// console.log("undefined a string: "+unde.toString()); no se puede realizar
console.log("objeto a string: "+objeto.toString());//[object Object]
var objeto = objeto.toString()+"hola";
console.log("objeto a string + hola: "+objeto);//[object Object]hola
console.log("Array a string: "+array.toString());//1,2