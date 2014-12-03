window.onload = function(){
var contenido = document.getElementById('contenido');

function Cliente(nombre, direccion, telefono, nif) {
  this.nombre = nombre;
  this.direccion = direccion;
  this.telefono = telefono;
  this.nif = nif;
}
 
function Elemento(descripcion, cantidad, precio) {
  this.descripcion = descripcion;
  this.cantidad = cantidad;
  this.precio = precio;
}

function Factura(cliente, elementos) {
  this.cliente = cliente;
  this.elementos = elementos;
  this.informacion = {
    total:            0,
    iva:          0,
  }
}

Factura.prototype.calcularImporte = function () {
		var total = 0,
			i;

		for (i = 0; i < this.elementos.length; i++) {
			total += (parseFloat(this.elementos[i].precio) * this.elementos[i].cantidad);
		}

		this.informacion.total = total;
	}

	Factura.prototype.mostrarTotal = function () {
		contenido.innerHTML = ('El importe total es de: '+(this.informacion.total).toFixed(2));
	}


var cliente = new Cliente ("Alejandro","calle libre",686544354,"46068518R");
var productos = [new Elemento("Cereales chocolate",2,1.97),new Elemento('Leche entera',4,0.65)];
var factura = new Factura(cliente,productos);
factura.calcularImporte();
factura.mostrarTotal();
}
