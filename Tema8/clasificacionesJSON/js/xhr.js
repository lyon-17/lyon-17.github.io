/**
	Returns a new XHR object if possible
*/
function getXHR() {
	if(window.XMLHttpRequest)
		return new XMLHttpRequest();
	else if(window.ActiveXObject) {
		var ieVersions = new Array('Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0','Msxml2.XMLHTTP.3.0', 'Msxml2.XMLHTTP', 'Microsoft.XMLHTTP');

		for(var i=0; i<ieVersions.length;i++) {
				return new ActiveXObject(ieVersions[i]);
		}
	}
}

function pedirDatos(item) {
	var XHR = getXHR();
	if(XHR) {
		XHR.onreadystatechange = function() { operar(XHR,item); };
		XHR.open("GET","data/alimentos.json",true);
		XHR.send();
	}
}