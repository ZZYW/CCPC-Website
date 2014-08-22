$(document).ready(function () {

	var s = skrollr.init();

	// agenda tabs and highlighted speakers tabs
	$('.myTab a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});




	//enable tooltip
	$(".team-member").tooltip();


	var viewport_height = $(window).height();

	$('#landing-page').css('height', viewport_height);

	$(window).resize(function () {
		var viewport_height = $(window).height();
		$('#landing-page').css('height', viewport_height);
	});
	//nav bar display and hide
	$(window).scroll(function () {
		var langindg_page_height = $('#landing-page').height();
		var scrollTop = $(window).scrollTop();
		if (scrollTop >= langindg_page_height) {
			$('nav').css('display', 'block');
		} else {
			$('nav').css('display', 'none');
		}

	});



	//smooth scrolling js code
	$(function () {
		$('a[href*=#]:not([href=#])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});
	//smooth js ends here



})


//google map api

//function initialize() {
//	var mapOptions = {
//		center: new google.maps.LatLng(-34.397, 150.644),
//		zoom: 8
//	};
//	var map = new google.maps.Map(document.getElementById("map-canvas"),
//		mapOptions);
//}
//
//
//google.maps.event.addDomListener(window, 'load', initialize);