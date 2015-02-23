

$(function(){
	jQuery.fn.cambioColor = function(opciones) {

		var configuracion ={
			velocidad: 500,
			colorInicial: 'rgba(75,76,77,1)',
			colorFinal: 'rgba(115,136,117,1)'
		}
		jQuery.extend(configuracion,opciones);
		this.each(function(){
			elem = $(this);
			elem.css('color',configuracion.colorInicial);
			elem.fadeOut(1000, function(){
				$(this).fadeIn(1000);
				elem.css('color',configuracion.colorFinal);
			});
		});
	return this;
	}; 

	$('article').mouseenter(function(event){
		event.preventDefault();
		$('p',this).css('background-color','rgba(43,43,41,0.9)');
		//$('p',this).css('width','25%');
		$('p',this).fadeIn(500);
	});
	$('article').mouseout(function(event){
		event.preventDefault();
		$('p',this).css('background-color','none');
		$('p',this).fadeOut(1000);
	});

	$('#tabs').tabs();
	$('h4').cambioColor();
	$('h1').cambioColor({
		velocidad: 1000,
		colorInicial: 'rgba(73,73,113,0.8)',
		colorFinal: 'rgba(113,156,73,0.8)',
	});

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
      $( "#fechaIni" ).datepicker("option", "maxDate", selectedDate);
    }
  });

	$("h4").click(function() {
  		$('h3,h1').animate({
		    color: 'rgba(255,255,255,0.6)',
  		});
	});
});