$(document).ready(function () {


	var s = skrollr.init();


	// agenda tabs and highlighted speakers tabs
	$('.myTab a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});


	//load google map API
	//	var mapOptions = {
	//		zoom: 8,
	//		center: new google.maps.LatLng(-34.397, 150.644)
	//	};
	//	map = new google.maps.Map(document.getElementById('map-canvas'),
	//		mapOptions);

	//enable tooltip
	$(".team-member").tooltip();
	var viewport_height = $(window).height();
	$('#landing-page').css('height', viewport_height);

});

$(window).resize(function () {
	var viewport_height = $(window).height();
	$('#landing-page').css('height', viewport_height);
});


//	$('#THEME .section-name').css('visibility','hidden');


$(window).scroll(function () {

});

$('#wen').mousemove(function () {
	$('#wen img').attr('src', '/static/img/wen-green.png');
});
$('#wen').mouseout(function () {
	$('#wen img').attr('src', '/static/img/wen.png');
});


$('#rong').mousemove(function () {
	$('#rong img').attr('src', '/static/img/rong-green.png');
});
$('#rong').mouseout(function () {
	$('#rong img').attr('src', '/static/img/rong.png');
});


$('#ke').mousemove(function () {
	$('#ke img').attr('src', '/static/img/ke-green.png');
});
$('#ke').mouseout(function () {
	$('#ke img').attr('src', '/static/img/ke.png');
});


$('#jiao').mousemove(function () {
	$('#jiao img').attr('src', '/static/img/jiao-green.png');
});
$('#jiao').mouseout(function () {
	$('#jiao img').attr('src', '/static/img/jiao.png');
});


$('#mei').mousemove(function () {
	$('#mei img').attr('src', '/static/img/mei-green.png');
});
$('#mei').mouseout(function () {
	$('#mei img').attr('src', '/static/img/mei.png');
});

$('#shang').mousemove(function () {
	$('#shang img').attr('src', '/static/img/shang-green.png');
});
$('#shang').mouseout(function () {
	$('#shang img').attr('src', '/static/img/shang.png');
});


animateWhenReachIn('#THEME .section-name', 'animate fadeIn', '5s', 300,0);
animateWhenReachIn('#THEME .section-brief', 'animate fadeInUp', '1s', 0,0);
animateWhenReachIn('#THEME .section-content', 'animate fadeInUp', '1s', 0,0);
animateWhenReachIn('#PANELS .section-name', 'animate fadeIn', '5s', 300,0);
animateWhenReachIn('#PANELS .cali-list', 'animate fadeIn', '4s', 0,0);
animateWhenReachIn('#PANELS .panel-content', 'animate fadeInUp', '1s', 0,0);
animateWhenReachIn('#AGENDA .section-name', 'animate fadeIn', '3s', 300,0);
animateWhenReachIn('#AGENDA .cali-list', 'animate fadeIn', '3s', 0,0);
animateWhenReachIn('#AGENDA table', 'animate fadeInUp', '1s', 0,0);
animateWhenReachIn('#TICKETS .in-parallax-text', 'animate fadeInLeft', '1s', 0,0);
animateWhenReachIn('#DIRECTIONS', 'animate fadeIn', '2s', 200,0);
animateWhenReachIn('#ABOUT .in-parallax-text', 'animate fadeInRight', '1s', 0,0);
animateWhenReachIn('#SPONSORSHIP h1', 'animate fadeIn', '2s', 0,0);
animateWhenReachIn('#SPONSORSHIP .fa-google', 'animate zoomIn', '0.5s',0,0);
animateWhenReachIn('#SPONSORSHIP .fa-linux', 'animate zoomIn', '0.5s',0,0);
animateWhenReachIn('#SPONSORSHIP .fa-apple', 'animate zoomIn', '0.5s',0,0);
animateWhenReachIn('#SPONSORSHIP .fa-ge', 'animate zoomIn', '0.5s',0,0);
animateWhenReachIn('#SPONSORSHIP .fa-dropbox', 'animate zoomIn', '0.5s',0,0);
animateWhenReachIn('#SPONSORSHIP .fa-windows', 'animate zoomIn', '0.5s',0,0);
animateWhenReachIn('#pre-footer', 'animate fadeInUp', '1s',0,0);
animateWhenReachIn('footer', 'animate fadeInUp', '1s',0,0);



function animateWhenReachIn(selector, effect, duration, offset,delay) {
	$(document).ready(function () {
		$(selector).css('visibility', 'hidden');
	});
	$(window).scroll(function () {
		if ($(window).scrollTop() > $(selector).offset().top - $(window).height() + offset) {
			$(selector).css('-webkit-animation-duration', duration);
			$(selector).css('-moz-animation-duration', duration);
			$(selector).css('-ms-animation-duration', duration);
			$(selector).css('-o-animation-duration', duration);
			$(selector).css('-webkit-animation-delay', delay);
			$(selector).css('-moz-animation-delay', delay);
			$(selector).css('-ms-animation-delay', delay);
			$(selector).css('-o-animation-delay', delay);
			$(selector).css('visibility', 'visible');
			$(selector).addClass(effect);
		}
	})
};
