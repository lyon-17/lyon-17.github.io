/*Variables locales/globales

Alejandro Gutierrez Lozano*/

var local="local";
global="global";
funcion();
	console.log("local fuera de funcion: "+local);// local
	// console.log("funcionLocal dentro de funcion: "+funcionLocal); No se puede realizar porque la variable es inexistente fuera de la funcion
	console.log("global fuera de funcion: "+global); //global
	console.log("funcionGlobal dentro de funcion: "+funcionGlobal);//funcionglobal
function funcion () {
	var funcionLocal="funcionLocal";
	funcionGlobal="funcionGlobal"; // Si se inicializa una variable global dentro de una funcion, se puede usar fuera de ella.
	console.log("local dentro de funcion: "+local);//local
	console.log("funcionLocal dentro de funcion: "+funcionLocal);//funcionlocal
	console.log("global fuera de funcion: "+global);//global
	console.log("funcionGlobal dentro de funcion: "+funcionGlobal);//funcionglobal
}
