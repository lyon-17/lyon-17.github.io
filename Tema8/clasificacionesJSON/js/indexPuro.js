window.onload=function() {
	document.getElementById("Aceites").addEventListener("click",function() {
		pedirDatos("Aceites");
	},false);

	document.getElementById("Jamones").addEventListener("click",function() {
		pedirDatos("Jamones");
	},false);

	document.getElementById("Vinos").addEventListener("click",function() {
		pedirDatos("Vinos");
	},false);
}

function cargarJson(data,alimento) {

	var text = '<h1>' + alimento +'</h1>';
	text +="<table>";
	text +='<tr><th>Tipo</th><th>Descripcion</th></tr>';

	var datos = data.alimentos[alimento];

	for (i = 0; data.alimentos[alimento].length > i; i++){
		text +='<tr>';
		text += '<td>' + data.alimentos[alimento][i].tipo + '</td>';
		text += '<td>' + data.alimentos[alimento][i].descripcion + '</td>';
		text += '</tr>';
	}

	document.getElementById('json').innerHTML = text;
}

function descargarJson(data,alimento) {
	document.location = 'data:text/json;charset=utf-8,,' + encodeURIComponent(JSON.stringify(data.alimentos[alimento]));
}

function operar(XHR,item) { 
				if(XHR.readyState==4 && XHR.status==200){
						result = JSON.parse(XHR.responseText);
						setTimeout(cargarJson(result,item));
						setTimeout(descargarJson(result,item));
				}
}