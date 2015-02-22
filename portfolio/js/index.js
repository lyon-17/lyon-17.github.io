

$(function(){
	jQuery.fn.cambioColor = function() {
		this.each(function(){
			elem = $(this);
			elem.css('color','rgba(59,58,62,1)');
			elem.fadeOut(1000, function(){
				$(this).fadeIn(1000);
				elem.css('color','rgba(115,136,117,1)');
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

	$( "#datepicker" ).datepicker({
	inline: false
});
	$("h4").click(function() {
  		$('h3,h1').animate({
		    color: 'rgba(255,255,255,0.6)',
  		});
	});
});