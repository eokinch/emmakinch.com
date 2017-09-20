const navFunction = function() {
	const nav = $('.header-nav');
	const navIcon = $('.mobile-nav');
	const navItem = $('.header-nav li a');
	let navOpen = false;

	function openNav() {
		nav.css('left', '0px');
		navOpen = true;
	}

	function closeNav() {
		nav.css('left', '-200px');
		navOpen = false;
	}

	function toggleNav() {
		if(navOpen === true) {
			closeNav();
		}else {
			openNav();
		}
	}


	navItem.on('click', function(){
		closeNav();
	});

	navIcon.on('click', function(){
		toggleNav();
	});

	if(window.innerWidth > 768) {
	    navIcon.on('mouseenter', function() {
	        openNav();
	    });
	}

	nav.on('mouseleave', function(){
	    closeNav();
	});

	

	window.onscroll = function() {
		closeNav();
	}
}

$(function(){
	navFunction();
	$('a').click(function(){
	     $('html, body').animate({
	         scrollTop: $( $(this).attr('href') ).offset().top
	     }, 2500);
	     return false;
 	});
});