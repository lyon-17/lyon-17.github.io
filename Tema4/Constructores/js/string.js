window.onload = function(){
String.prototype.truncar = function(number,cadena) {
	if(number < 0)
		return this;
	if(cadena){
		return this.substr(0,number)+cadena;
	}
	return this.substr(0,number);
}

var contenido = document.getElementById('contenido');
var cadena ="hello world!";

contenido.innerHTML = ('cadena: '+ cadena + '<br/>cadena truncada: ' + cadena.truncar(4,'hell'));
}