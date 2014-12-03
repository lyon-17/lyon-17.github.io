/*undefined/null/Infinity/-Infinity

Alejandro Gutierrez Lozano
*/

var a = 10/0; // esta operacion da infinito
var b = a+"hola"; 
var c = 0/0; // Esta operacion da error
var d = Math.SQRT-2; // Error
var e = -16/0; // -infinito
var f; //variable sin inicializar
var g={}; // crear objeto
console.log("10/0: "+a);//Infinity
console.log("10/0+hola: "+b);//Infinityhola
console.log("0/0: "+c);//NaN
console.log("raiz de -2: "+d);//NaN
console.log("-16/0: "+e);//-Infinity
console.log("var f: "+f);//undefined
console.log("var g={}: "+g);//[object Object]
var g=null; //asignar null
console.log("var g=null: "+g);// null