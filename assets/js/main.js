$(document).ready(function(){

	$("a.fancy").fancybox();

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-150
        }, 1000);
        return false;
      }
    }
  });

  $(".mobile-menu-icon").click(function(){
    $(".nav.mobile").toggleClass("opened");
  });

  var myHeight=$(window).height();
  $("#map").css("height",myHeight-185);

});
