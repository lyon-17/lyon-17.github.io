
window.onload = function(){
var contenido = document.getElementById('contenido');
contenido.innerHTML = ('');
function Coche(marca, modelo, anyo){
	this.marca = marca;
	this.modelo = modelo;
	this.anyo = anyo;
}

var coche1 = new Coche('bmw','serie7',1977);
var coche2 = new Coche('Seat','Córdoba',1993);
var coche3 = new Coche('Ferrari','Testarossa',1984);
var coche4 = new Coche('Fiat','500',1996);
contenido.innerHTML = ('<table border="1px solid black"><tr><td>Marca</td><td>Modelo</td><td>año fabricacion</td></tr><tr><td>'+coche1.marca+'</td><td>'+coche1.modelo+'</td><td>'+coche1.anyo+'</td></tr><tr><td>'+coche2.marca+'</td><td>'+coche2.modelo+'</td><td>'+coche2.anyo+'</td></tr><tr><td>'+coche3.marca+'</td><td>'+coche3.modelo+'</td><td>'+coche3.anyo+'</td></tr><tr><td>'+coche4.marca+'</td><td>'+coche4.modelo+'</td><td>'+coche4.anyo+'</td></tr></table>');
}