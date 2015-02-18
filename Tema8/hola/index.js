function iniciar () {
	//objeto XHR
	miXHR = new objetoXHR();

	//cargar fichero
	cargarAsync('hola.txt');
}

function cargarAsync(url){
	if(miXHR){
		alert('Comenzando peticion ajax');

		//si existe xhr
		miXHR.open('GET',url,true);
		miXHR.onreadystatechange = estadoPeticion;
		miXHR.send(null);
	}
}

function estadoPeticion(){
	switch(this.readyState){
		case 0: 
			console.log('sin iniciar');
			break;
		case 1:
		case 2: 
			console.log('Cargando');
			break;
		case 3: 
			console.log('Interactivo');
			break;
		case 4:
			console.log('Completado');
			if(this.status === 200){
				//Si devuelve OK
				textoDIV(document.getElementById('texto'), this.responseText);
				alert('Termino la peticion de AJAX');
			}
	}
}