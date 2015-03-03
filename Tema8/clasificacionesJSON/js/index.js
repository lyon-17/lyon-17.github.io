function cargarAlimento(alimento) {
	$.getJSON("data/alimentos.json",function(data) {
		cargarJson(data,alimento);
	} )
}
function descargarAlimento(alimento) {
	$.getJSON("data/alimentos.json",function(data) {
		descargarJson(data,alimento);
	} )
}

function cargarJson(data,alimento) {

	var text = '<h1>' + alimento +'</h1>';
	text +="<table>";
	text +='<tr><th>Tipo</th><th>Descripcion</th></tr>';

	var datos = data.alimentos[alimento];
	$.each(data.alimentos[alimento],function(i) {
		text +='<tr>';
		text += '<td>' + data.alimentos[alimento][i].tipo + '</td>';
		text += '<td>' + data.alimentos[alimento][i].descripcion + '</td>';
		text += '</tr>';
	});

	$("#json").html(text);
}

function descargarJson(data,alimento) {

	document.location = 'data:text/json;charset=utf-8,,' + encodeURIComponent(JSON.stringify(data.alimentos[alimento]));
}