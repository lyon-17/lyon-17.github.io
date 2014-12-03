/*Ámbito de variables

Alejandro Gutierrez Lozano
*/
var local="local";
global="global";
funcion();
funcionGlobal="Ahora funcionGlobal estara fuera";
	console.log("local fuera de funcion: "+local); // local
	console.log("global fuera de funcion: "+global);// toca el turno a global
	console.log("funcionGlobal fuera de funcion: "+funcionGlobal); // ahora funcionGlobal estara fuera
function funcion () {
	var funcionLocal="funcionLocal";
	funcionGlobal="funcionGlobal"; // Si se inicializa una variable global dentro de una funcion, se puede usar fuera de ella.
	var local ="Ahora local esta dentro de la funcion"; // Se puede modificar cualquier variable dentro de la funcion. Si es local, solo sera en la funcion
	global="Toca el turno a global"; // En cambio si es global, se modificara para todo el programa.
	console.log("local dentro de funcion: "+local); // Ahora local esta dentro de la funcion
	console.log("funcionLocal dentro de funcion: "+funcionLocal); //funcionLocal
	console.log("global dentro de funcion: "+global); //toca el turno a global 
	console.log("funcionGlobal dentro de funcion: "+funcionGlobal);//funcionglobal
}