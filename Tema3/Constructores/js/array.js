Array.prototype.add = function(elemento,duplicado) {
	if(duplicado===false){
		for (var i = 0; i < this.length; i++) {
			if(this[i]===elemento)
				return;
		}
	}
	this[this.length] = elemento;
}

var contenido = document.getElementById('contenido');
var array = [1,2,3,4,5];

