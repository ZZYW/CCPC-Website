var viewportWidth, viewportHeight;
// calls functions when html is setup.
$(document).ready(function () {


	//videoembeder
	vimeoEmbedder();

	if($('#directions-content').length || $('#ABOUTPAGE').length){
		console.log("get rid of nav skroll effect");
		 $('nav').removeAttr('data-0');
   		 $('nav').removeAttr('data-600');
	}

	viewportHeight = $(window).height();
	viewportWidth = $(window).width();

	if (viewportWidth > 992) {
		var s = skrollr.init();
	}else{
		console.log("this is mobile/tablet, disable skrollr.js");
	}

	//enable tooltip
	$(".team-member").tooltip();
	$(".panel-advisor").tooltip();

	//	load google map API
	var myLatlng_LA = new google.maps.LatLng(40.807092, -73.963984);
	var myLatlng_IAB = new google.maps.LatLng(40.807762, -73.959725);

	var mapOptions = {
		zoom: 16,
		center: new google.maps.LatLng(40.80735, -73.9615)
	};

	var map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);

	var marker = new google.maps.Marker({
		position: myLatlng_LA,
		map: map,
		title: 'Lerner Auditorium'
	});

	var marker = new google.maps.Marker({
		position: myLatlng_IAB,
		map: map,
		title: 'IAB 417'
	});

	centerHeadline();
	//agenda tabs and highlighted speakers tabs
	$('.myTab a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});


	if (viewportHeight > 600) {
		$('#landing-page').css('height', viewportHeight);
	}

	//language switch buttons
	$("#english-button").click(function () {
		if ($(this).hasClass('o2')) {
			$(this).toggleClass('o2');
			$("#chinese-button").toggleClass('o1');

			$('.english').css('display', 'block');
			$('.chinese').css('display', 'none');
		} else {}
	});

	$("#chinese-button").click(function () {
		if ($(this).hasClass('o1')) {} else {
			$(this).toggleClass('o1');
			$("#english-button").toggleClass('o2');

			$('.english').css('display', 'none');
			$('.chinese').css('display', 'block');
		}
	});

	$('body').css('height', $('#theBottom').offset().top);
});








////////////////////////////////////////////////event listeners start here

$(window).resize(function () {
	viewportHeight = $(window).height();
	viewportWidth = $(window).width();
	centerHeadline();
	if (viewportHeight > 600) {
		$('#landing-page').css('height', viewportHeight);
	}

});



if (viewportWidth > 992) {
	animateWhenReachIn('#THEME .section-name', 'animate fadeIn', '5s', 300, 0);
	animateWhenReachIn('#THEME .section-brief', 'animate fadeInUp', '1s', 0, 0);
	animateWhenReachIn('#THEME .section-content', 'animate fadeInUp', '1s', 0, 0);
	animateWhenReachIn('#PANELS .section-name', 'animate fadeIn', '5s', 300, 0);
	animateWhenReachIn('#PANELS .cali-list', 'animate fadeIn', '4s', 0, 0);
	animateWhenReachIn('#PANELS .panel-content', 'animate fadeInUp', '1s', 0, 0);
	animateWhenReachIn('#AGENDA .section-name', 'animate fadeIn', '3s', 300, 0);
	animateWhenReachIn('#AGENDA .cali-list', 'animate fadeIn', '3s', 0, 0);
	animateWhenReachIn('#AGENDA table', 'animate fadeInUp', '1s', 0, 0);
	animateWhenReachIn('#TICKETS .in-parallax-text', 'animate fadeInLeft', '1s', 0, 0);
	animateWhenReachIn('#DIRECTIONS', 'animate fadeIn', '2s', 200, 0);
	animateWhenReachIn('#map-canvas', 'animate fadeInRight', '2s', 200, 0);
	animateWhenReachIn('#address-info', 'animate fadeInLeft', '2s', 200, 0);
	animateWhenReachIn('#ABOUT .in-parallax-text', 'animate fadeInRight', '1s', 0, 0);
	animateWhenReachIn('#SPONSORSHIP h3', 'animate zoomIn', '2s', 0, 0);
	animateWhenReachIn('#SPONSORSHIP img', 'animate zoomIn', '0.5s', 0, 0);
	animateWhenReachIn('#pre-footer', 'animate fadeInUp', '1s', 0, 0);
	animateWhenReachIn('footer', 'animate fadeInUp', '1s', 0, 0);

}



function centerHeadline(){
	$('#landing-page-container').css('margin-top',viewportHeight/2 - $('#landing-page-container').height()/2);
}


//  function definitions start here 
function animateWhenReachIn(selector, effect, duration, offset, delay) {
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