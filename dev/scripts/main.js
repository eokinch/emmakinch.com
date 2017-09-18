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
	})

	navIcon.on('mouseenter', function(){
		openNav();
	});

	navIcon.on('click', function(){
		toggleNav();
	});

	nav.on('mouseleave', function(){
		closeNav();
	});

	window.onscroll = function() {
		closeNav();
	}
}

$(function(){
	navFunction();
});