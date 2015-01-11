window.onload = function () {
	
	var html = document.documentElement;
	console.log("Accede al elemento html -> document.documentElement: " + html);
	
	var body = html.lastChild;
	console.log("Accede al body mediante lastChild -> html.lastChild: " + body);
	
	var head = html.childNodes[0];
	console.log("Accede al head mediante la lista childNodes -> html.childNodes[0]: " + head);
	
	var Nhijos = body.childNodes.length;
	console.log("Averigua el numero de hijos de body -> body.childnodes.length: " + Nhijos);
	
	var p = document.createElement('p');
	p.appendChild(document.createTextNode('Hola a todos'));
	body.appendChild(p);
	console.log('Añadele un parrafo con el texto "Hola a todos" : p = document.createElement("p") -> p.appendChild(document.createTextNode("Hola a todos") -> body.appendChild(p)');

	var lista = document.createElement('ol');
	var elemento = document.createElement('li');
	var elemento2 = document.createElement('li');
	elemento.appendChild(document.createTextNode('Alejandro Gutierrez Lozano'));
	elemento2.appendChild(document.createTextNode('Daniel Gutierrez Lozano'));
	lista.appendChild(elemento);
	lista.appendChild(elemento2);
	document.body.insertBefore(lista, document.body.firstChild);
	console.log('añade al principio del body una lista con los nombres de las parejas');

	body.childNodes[6].remove();
	console.log("Elimina el ultimo parrafo del documento original -> body.childNodes[6].remove()");
	}