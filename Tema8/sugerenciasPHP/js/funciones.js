//Para crear XMLHttpRequest

function objetoXHR(){
	if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	}
	else if (window.ActiveXObject){
		var versionesIE = new Array ('Msxm12.XMLHTTP.5.0','Msxm12.XMLHTTP.4.0','Msxm12.XMLHTTP.3.0','Msxm12.XMLHTTP','Microsoft.XMLHTTP');

		for (var i = 0; i < versionesIE.length; i++){
			// Se intenta crear el objeto en IE
			try{
				return new ActiveXObject(versionesIE[i]);
			}
			catch(errorControlado){

			}
		}
	}
	// Error, el navegador no puede crear el objeto
	throw new Error('No se pudo crear el objeto XMLHttpRequest');
}

function textoDIV(nodo,texto){
	while(nodo.firstChild)
		nodo.removeChild(nodo.firstChild); //eliminamos los hijos de ese objeto
		//Cuando no tenga hijos, le agregamos uno con el texto
		nodo.appendChild(document.createTextNode(texto));
}