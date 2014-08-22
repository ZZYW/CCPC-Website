$(document).ready(function () {

	var s = skrollr.init();

	// agenda tabs and highlighted speakers tabs
	$('.myTab a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});


	//load google map API
	var mapOptions = {
		zoom: 8,
		center: new google.maps.LatLng(-34.397, 150.644)
	};
	map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);


	//enable tooltip
	$(".team-member").tooltip();


	var viewport_height = $(window).height();

	$('#landing-page').css('height', viewport_height);

	$(window).resize(function () {
		var viewport_height = $(window).height();
		$('#landing-page').css('height', viewport_height);
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