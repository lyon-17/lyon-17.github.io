/*El operador instanceof

Alejandro Gutierrez Lozano
*/

var numero=1;
var numeroNumber= new Number(12);
var cadena="hola";
var cadenaString=new String("hello");
var bool=true;
var nulo=null;
var unde=undefined;
var array=[1,2];
var objeto={};
var notNumber=NaN;

console.log("Instanceof numero-number: "+(numero instanceof Number)); // false
console.log("Instanceof numeroNumber-number: "+(numeroNumber instanceof Number)); // true
console.log("Instanceof cadena-string: "+(cadena instanceof String)); // false
console.log("Instanceof cadenaString-string: "+(cadenaString instanceof String)); // true
console.log("Instanceof bool-boolean: "+(bool instanceof Boolean)); // false
//console.log("Instanceof nulo-null: "+(null instanceof null)); no se puede realizar.
//console.log("Instanceof unde-undefined: "+(unde instanceof undefined)); no se puede realizar
console.log("Instanceof array-array: "+(array instanceof Array)); // true
console.log("Instanceof objeto-object: "+(objeto instanceof Object)); // true
//console.log("Instanceof notNumber-NaN: "+(notNumber instanceof NaN)); no se puede realizar