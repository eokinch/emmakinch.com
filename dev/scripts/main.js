var navFunction = function() {
	$('.mobile-nav').on('click', function() {
		$(this).toggleClass('active');
		 $('.header-nav').toggleClass('open');
	});

	window.onscroll = function() {
		$('.mobile-nav').removeClass('active');
		$('.header-nav').removeClass('open');
	}
}

var smoothScroll = function() {
	$('.header-nav li a').click(function(){
	     $('html, body').animate({
	         scrollTop: $( $(this).attr('href') ).offset().top
	     }, 2000);
	     return false;
 	});
}



$(function(){
	navFunction();
	smoothScroll();
	
});