// calls functions when html is setup.
$(document).ready(function () {
    
    $('.section-name').addClass("animated fadeIn");
    $('.section-name').css('-moz-animation-duration', '10s');
    $('.section-name').css('-ms-animation-duration', '10s');
    $('.section-name').css('-o-animation-duration', '10s');
    
    $('.section-content').addClass("animated fadeIn");
    $('.section-content').css('-moz-animation-duration', '20s');
    $('.section-content').css('-ms-animation-duration', '20s');
    $('.section-content').css('-o-animation-duration', '20s');


    var s = skrollr.init();
   
    //enable tooltip
    $(".team-member").tooltip();


    var viewport_height = $(window).height();




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


});








////////////////////////////////////////////////event listeners start here

$(window).resize(function () {
    var viewport_height = $(window).height();
});




animateWhenReachIn('#team', 'animated fadeIn', '2s', 200, 0);
animateWhenReachIn('#photo-wall', 'animated fadeInUp', '1s', 0, 0);
animateWhenReachIn('footer', 'animated fadeInUp', '1s', 0, 0);



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