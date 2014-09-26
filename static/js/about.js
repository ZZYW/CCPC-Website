// calls functions when html is setup.
$(document).ready(function () {
    
    $('nav').removeAttr('data-0');
    $('nav').removeAttr('data-600');


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