/*
Funcion de abrir una ventana con una anchura y altura dados

Alejandro Gutierrez Lozano
*/

function abrirVentana () {
	alturaV = parseInt(document.getElementById('altura').value);
	anchuraV = parseInt(document.getElementById('anchura').value);
	var ventana = window.open('','',"width=" + anchuraV + ",height=" + alturaV + "");
	ventana.document.open();
	ventana.document.write('<html><head><script type="text/javascript"></script><title>Ventana</title>Ventana</head>'+
		'<body><p>Altura: '+alturaV+'<br/>Anchura: '+anchuraV+'</p><input type="button" value="cerrar ventana" onclick="cerrarVentanas();"/></html>');
	ventana.document.close();
}