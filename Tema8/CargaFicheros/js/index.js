function iniciar () {
	//objeto XHR
	miXHR = new objetoXHR();
	var url = document.getElementById('url').value;

	//cargar fichero
	cargarAsync(url);
}

function cargarAsync(url){
	if(miXHR){

		//si existe xhr
		miXHR.open('GET',url,true);
		miXHR.onreadystatechange = estadoPeticion;
		miXHR.send(null);
	}
}

function estadoPeticion(){
	switch(this.readyState){
		case 0: 
			textoDIV(document.getElementById('estado'),'estado 0: sin iniciar');
			break;
		case 1:
			textoDIV(document.getElementById('estado'),'estado 1: Cargando');
			break;
		case 2: 
			textoDIV(document.getElementById('estado'),'estado 2: Cargando');
			break;
		case 3: 
			textoDIV(document.getElementById('estado'),'estado 3: Interactivo');
			break;
		case 4:
			textoDIV(document.getElementById('estado'),'estado 4: Completado');
			textoDIV(document.getElementById('estadoTexto'),this.status);
			if(this.status === 200){
				//Si devuelve OK
				textoDIV(document.getElementById('texto'), this.responseText);
			}
				//textoDIV(document.getElementById('estadoText'),this.status);
			//break;
	}
}