/*
Mediante prototype, agrega los métodos sumar, restar, trasponer y multiplicar a la clase ArraysMatematicos. Recuerda que el estado deun array deberían de ser los elementos.
Recuerda las restricciones y posibilidades de un Array:
Sobre las dimensines de los arrays implicados (unidimensional, bidimensional...)
Sobre las longitudes de los arrays implicados (1 en adelante)
Sobre los contenidos de los arrays implicados (numéricos)
Podemos rellenar un Array con valores aleatorios o directamente desde teclado.
Una vez creada la clase, demuestra su funcionamiento en una página bien diseñada. Evita las cajas de texto y hazla lo más dinámicaposible.

o directamente desde teclado...
  ___________.._______
 | .__________))______|
 | | / /      ||
 | |/ /       ||
 | | /        ||.-''.
 | |/         |/  _  \
 | |          ||  `/,|
 | |          (\\`_.'
 | |         .-`--'.
 | |        /Y . . Y\
 | |       // |   | \\
 | |      //  | . |  \\
 | |     ')   |   |   (`
 | |          ||'||
 | |          || ||
 | |          || ||
 | |          || ||
 | |         / | | \
 """"""""""|_`-' `-' |"""|
 |"|"""""""\ \       '"|"|
 | |        \ \        | |
 : :         \ \       : :  
 . .          `'       . .
*/

function Matriz(filas,columnas){
	this.filas = filas;
	this.columnas = columnas;
}


	Matriz.prototype.setColumnas = function(columnas) {
		this.columnas = columnas;
	}

	Matriz.prototype.setFilas = function(filas) {
		this.filas = filas;
	}

	Matriz.prototype.getFilas = function() {
		return this.filas;
	}

	Matriz.prototype.getColumnas = function() {
		return this.columnas;
	}


	Matriz.prototype.sumar = function(matriz2) {
		if(matriz.getColumnas() !== matriz2.getColumnas() || matriz.getFilas() !== matriz2.getFilas()){
			return null;
		}
		var matrizSumar = new Matriz(matriz.getColumnas(),matriz.getFilas());
		for (var i = 0 ; i < row;  i++) {
			matrizSumar[i] = [];
			for ( var j = 0 ; j < col; j++) {
				matrizSumar[i][j] = matriz[i][j] + matriz2[i][j];
			}
		}
		mostrarResultado(matrizSumar);
	}

	Matriz.prototype.restar = function(matriz2) {
		if(matriz.getColumnas() !== matriz2.getColumnas() || matriz.getFilas() !== matriz2.getFilas()){
			return null;
		}
		var matrizResta = new Matriz(matriz.getColumnas(),matriz.getFilas());
		for (var i = 0 ; i < row;  i++) {
			matrizResta[i] = [];
			for ( var j = 0 ; j < col; j++) {
				matrizResta[i][j] = matriz[i][j] - matriz2[i][j];
			}
		}
		mostrarResultado(matrizResta);
	}

//End of prototype array

	var matriz,matriz2,row,col,row2,col2,contenido;

	window.onload = function(){
	contenido = document.getElementById('contenido');
	contenido.innerHTML = ('');

	resultado = document.getElementById('resultado');
	resultado.innerHTML = ('');
	}

function crearMatriz () {
	contenido.innerHTML = ('');
	row = parseInt(document.getElementById('row1').value);
	col = parseInt(document.getElementById('col1').value);
	row2 = parseInt(document.getElementById('row2').value);
	col2 = parseInt(document.getElementById('col2').value);

	if(isNaN(row) || isNaN(col) || isNaN(row2) || isNaN(col2)){
		contenido.innerHTML = ('Valores no numericos');
		return;
	}
	matriz = new Matriz(row,col);
	matriz2 = new Matriz(row2,col2);
	//create the first matrix
	for (var i = 0 ; i < row;  i++) {
		matriz[i] = [];
		for ( var j = 0 ; j < col; j++) {
			matriz[i][j] = Math.round(Math.random()*100);
		}
	}
	//create the second matrix
	for (var i = 0 ; i < row;  i++) {
		matriz2[i] = [];
		for ( var j = 0 ; j < col; j++) {
			matriz2[i][j] = Math.round(Math.random()*100);
		}
	}
	//show the first matrix
	mostrarMatriz(matriz);
	//show the second matrix
	mostrarMatriz(matriz2);
}

function mostrarMatriz(matriz){
	var mostrar;
	mostrar = '<br/><table>';
	for (var i = 0; i < matriz.getFilas(); i++) {
		mostrar += '<tr>';
			for (var j = 0; j < matriz.getColumnas(); j++) {
				mostrar += ('<td>' + matriz[i][j] + '</td>');
			}
			mostrar += '</tr>';
		}
		mostrar += '</table>';
		contenido.innerHTML += mostrar;
		resultado.innerHTML = ('');
}

function mostrarResultado(matriz){
	var mostrar;
	resultado.innerHTML = ('');
	mostrar = '<br/><table>';
	for (var i = 0; i < matriz.getFilas(); i++) {
		mostrar += '<tr>';
			for (var j = 0; j < matriz.getColumnas(); j++) {
				mostrar += ('<td>' + matriz[i][j] + '</td>');
			}
			mostrar += '</tr>';
		}
		mostrar += '</table>';
		resultado.innerHTML += mostrar;
}

function mostrarTraspuesta(matriz){
	var mostrar;
	resultado.innerHTML = ('');
	mostrar = '<br/><table>';
	for (var i = 0; i < matriz.getFilas(); i++) {
		mostrar += '<tr>';
			for (var j = 0; j < matriz.getColumnas(); j++) {
				mostrar += ('<td>' + matriz[j][i] + '</td>');
			}
			mostrar += '</tr>';
		}
		mostrar += '</table>';
		resultado.innerHTML += mostrar;
}

function sumarMatriz(){
	if(matriz === undefined){
		contenido.innerHTML = ('Debes crear la matriz');
		return;
	}
	matriz.sumar(matriz2);
}

function restarMatriz(){
	if(matriz === undefined){
		contenido.innerHTML = ('Debes crear la matriz');
		return;
	}
	matriz.restar(matriz2);
}

function trasponerMatriz1(){
	if(matriz === undefined){
		contenido.innerHTML = ('Debes crear la matriz');
		return;
	}
	mostrarTraspuesta(matriz);
}

function trasponerMatriz2(){
	if(matriz === undefined){
		contenido.innerHTML = ('Debes crear la matriz');
		return;
	}
	mostrarTraspuesta(matriz2);
}