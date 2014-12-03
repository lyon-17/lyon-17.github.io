/*Operadores ===, !==

Alejandro Gutierrez Lozano
*/

var a=true;
var b=false;
var c=0;
var d=1;
var e=-1;
var f=null;
var g=undefined;
var h=NaN;

console.log("true===1: "+a===d);//false
console.log("true===0: "+a===c);//false
console.log("1!==-1: "+d!==e);//true
console.log("NaN===true: "+a===h);//false
console.log("true===false: "+a===b);//false
console.log("NaN!==null: "+f!==h);//true