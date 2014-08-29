$(document).ready(function () {

//    if("the top of the element gets the bottom of viewport"){
//    $('#THEME .section-name').addClass('animated bounceOutLeft');
//    }
    
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

    $(window).resize(function () {
        var viewport_height = $(window).height();
        $('#landing-page').css('height', viewport_height);
    });

    //smooth scrolling js code
    //	$(function () {
    //		$('a[href*=#]:not([href=#])').click(function () {
    //			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //				var target = $(this.hash);
    //				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //				if (target.length) {
    //					$('html,body').animate({
    //						scrollTop: target.offset().top
    //					}, 1000);
    //					return false;
    //				}
    //			}
    //		});
    //	});
    //smooth js ends here




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







})