/*
A partir de la página web proporcionada, completar el código JavaScript para que:

1.Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
2.Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
3.Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
4.Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista: propiedad innerHTML)

Alejandro Gutierrez Lozano
*/

function muestraEscode(i){
		var enlaces = document.getElementById('enlace_'+i);
		var parrafos = document.getElementById('contenidos_'+i);
			if(parrafos.style.display == 'none'){
				enlaces.innerHTML = 'Ocultar contenidos';
				parrafos.style.display = 'block';
			}
			else{
				parrafos.style.display = 'none';
			enlaces.innerHTML = "Muestra contenido";
			}
	}