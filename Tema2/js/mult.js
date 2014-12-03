/*Crea la siguiente página Web donde el botón crea cinco nuevas ventanas ubicadas en la esquina tal
 y como se muestran.
Métodos a utilizar:

miVentana = window.open('','','width=200,height=200');
miVentana.document.open();
miVentana.document.write() 
Añade el esqueleto básico: html, head, title, body, ul...
miVentana.document.close();

Alejandro Gutierrez Lozano
*/
function abrirVentanas () {
	for (var i = 0; i < 5; i++) {
	var ventana = window.open('','','width=200,height=200');
	ventana.document.write('<html><head><script type="text/javascript" src="multEmergente.js"></script><title>Ventana' + (i+1) + '</title>Ventana' + (i+1) +
		'</head><input type="button" value="cerrar ventana" onclick="cerrarVentanas();"/></html>');
	ventana.document.close();
	}
}
