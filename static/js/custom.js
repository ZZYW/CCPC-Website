$(document).ready(function () {
	// agenda tabs and highlighted speakers tabs
	$('.myTab a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});



	//enable tooltip
	$(".team-member").tooltip();



	var viewport_height = $(window).height();
	$('#landing-page').css('height', viewport_height-75);


	$(window).resize(function () {
		var viewport_height = $(window).height();
		$('#landing-page').css('height', viewport_height-75);
	});

	$(window).scroll(function () {
		var langindg_page_height = $('#landing-page').height();
		var scrollTop = $(window).scrollTop();

		
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			//pass
		} else {
			if (scrollTop >= langindg_page_height) {
				$('nav').addClass('navbar-fixed-top');
			}else{
				$('nav').removeClass('navbar-fixed-top');
			}
		}



	});


})




//smooth scrolling js code
//$(function() {
//  $('a[href*=#]:not([href=#])').click(function() {
//    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//      var target = $(this.hash);
//      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//      if (target.length) {
//        $('html,body').animate({
//          scrollTop: target.offset().top
//        }, 1000);
//        return false;
//      }
//    }
//  });
//});
//smooth js ends here