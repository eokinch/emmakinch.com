'use strict';

var navFunction = function navFunction() {
	var nav = $('.header-nav');
	var navIcon = $('.mobile-nav');
	var navItem = $('.header-nav li a');
	var navOpen = false;

	function openNav() {
		nav.css('left', '0px');
		navOpen = true;
	}

	function closeNav() {
		nav.css('left', '-200px');
		navOpen = false;
	}

	function toggleNav() {
		if (navOpen === true) {
			closeNav();
		} else {
			openNav();
		}
	}

	navIcon.on('click', function () {
		toggleNav();
	});

	navItem.on('click', function () {
		closeNav();
	});

	if(window.innerWidth > 768){

	    hamburgerIcon.on('mouseenter', function(){
	        openNav();
	    });

	    nav.on('mouseleave', function(){
	        closeNav();
	    });
	}

	window.onscroll = function () {
		closeNav();
	};
};

$(function () {
	navFunction();
});