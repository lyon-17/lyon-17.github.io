function Persona(nombre,apellido,dni){
	this.nombre = nombre;
	this.apellido = apellido;
	this.dni = dni;

	Persona.prototype.mostrar = function() {
		return ('Nombre: ' + this.nombre + ' Apellido: ' + this.apellido + ' dni: '+this.dni);
	}
}
	
	Array.prototype.apilar = function(elemento) {
		console.log(elemento);
		this.unshift(elemento);
	}
	Array.prototype.extraer = function(){
		return this.shift().mostrar();
	}
	Array.prototype.cima = function(){
		return this[0].mostrar();
	}

var arrayPersonas = [];

function crearPersona(nombre,apellido,dni){
	var nombreP = document.getElementById('nombre').value;
	var apellidoP = document.getElementById('apellido').value;
	var dniP = document.getElementById('dni').value;
		arrayPersonas.apilar(new Persona(nombreP,apellidoP,dniP));
}
window.onload= function(){

var contenido = document.getElementById('contenido');

}

function mostrarPila () {

	var ventana = window.open('','','he');
	ventana.document.write('<head><title>mostrar pila</title></head><h1>Pila de personas</h1>');
	if(arrayPersonas.length===0){
		ventana.document.write('No hay ninguna persona');
	}
	for (var i = 0; i < arrayPersonas.length; i++) {
		ventana.document.write('<br/>' + 'Posicion en la pila: ' + (i+1) + ' ' + arrayPersonas[i].mostrar());
	};
	ventana.document.close();
	var contenido = document.getElementById('contenido');
	contenido.innerHTML = ('');
		for (var i = 0; i < arrayPersonas.length; i++) {
			contenido.innerHTML += ('<br/>' + 'Posicion en la pila: ' + (i+1) + ' ' + arrayPersonas[i].mostrar());
		}
	}

function mostrarCima(){
	if(arrayPersonas.length===0){
		contenido.innerHTML = ('No hay ninguna persona');
	return;
}
	contenido.innerHTML = ('La cima de la pila es: ' + arrayPersonas.cima());
}
function extraerElemento(){
	if(arrayPersonas.length===0){
		contenido.innerHTML = ('No hay ninguna persona');
	return;
}
	contenido.innerHTML = ('Ha sido eliminado el elemento: ' + arrayPersonas.extraer());
}