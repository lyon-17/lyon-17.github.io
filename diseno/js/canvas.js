window.onload = function () {

 //Icono titulo

	var c=document.getElementById("canvasTitulo");
	var cxt=c.getContext("2d");

	cxt.beginPath();
	cxt.arc(45,45,43,0,Math.PI*2,false);
	cxt.fillStyle = '#5D2D4E';
	cxt.fill();
	cxt.closePath();

	cxt.beginPath();
	cxt.arc(45,45,30,0,Math.PI*2,false);
	cxt.fillStyle = '#5A4C6E';
	cxt.fill();
	cxt.closePath();

	cxt.beginPath();
	cxt.arc(30,30,16,0,Math.PI*2,false);
	cxt.fillStyle = '#5D2D4E';
	cxt.fill();
	cxt.closePath();

	cxt.beginPath();
	cxt.arc(60,60,16,0,Math.PI*2,false);
	cxt.fillStyle = '#5D2D4E';
	cxt.fill();
	cxt.closePath();
}