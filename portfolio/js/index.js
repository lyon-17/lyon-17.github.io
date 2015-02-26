

$(function(){
	jQuery.fn.cambioColor = function(opciones) {

		var configuracion ={
			velocidad: 500,
			colorInicial: 'rgba(0,0,255,1)',
			colorFinal: 'rgba(255,0,0,1)'
		}
		jQuery.extend(configuracion,opciones);
		this.each(function(){
			elem = $(this);
			elem.css('color',configuracion.colorInicial);
			elem.fadeOut(500, function(){
				$(this).fadeIn(configuracion.velocidad);
				$(this).css('color',configuracion.colorFinal);
			});
		});
	return this;
	}; 

	$('article').mouseenter(function(event){
		event.preventDefault();
		$('p',this).css('background-color','red');
		$('p',this).fadeIn(1000);
	});
	$('article').mouseout(function(event){
		event.preventDefault();
		$('p',this).css('background-color','blue');
		$('p',this).fadeOut(1000);
	});

	$('h4').delay(2000).cambioColor();
	$('h1').delay(2000).cambioColor({
		velocidad: 3000,
		colorInicial: 'rgba(255,0,0,0.8)',
		colorFinal: 'rgba(0,255,0,0.8)',
	});

	$("h4").click(function() {
  		$('h3,h1').animate({
		    color: 'rgba(255,255,0,0.6)',
  		});
	});

	$('#tabs').tabs();

	$( "#fechaInicio" ).datepicker({
    numberOfMonths: 1,
    minDate: 0,
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
    dateFormat: 'dd/mm/yy',
    onClose: function( selectedDate ) {
      $( "#fechaFin" ).datepicker( "option", "minDate", selectedDate );
    }
  });

	$( "#fechaFin" ).datepicker({
    numberOfMonths: 1,
    minDate: 0,
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
    dateFormat: 'dd/mm/yy',
    onClose: function(selectedDate) {
      $( "#fechaInicio" ).datepicker("option", "maxDate", selectedDate);
    }
  });
});