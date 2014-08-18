//ajax dynamic data pulling





// agenda tabs and highlighted speakers tabs
$('.myTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});



//enable tooltip
$(".team-member").tooltip(
);


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