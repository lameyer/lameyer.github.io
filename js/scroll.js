$(document).ready(function () {

  // fade in header as scroll down
  $(window).scroll(function () {
    var scrollDist = $(document).scrollTop();
    var transparency = .9;
    if (scrollDist <= 700) {
      transparency = scrollDist / 770;
    }
    $("header").css({
      "background": "rgba(255, 255, 255, " + transparency + ")"
    });

  });

  // animate scroll to anchor from nav bar
  $("header a").click(function() {
    var anchor = $(this).attr("href")
    $('html,body').animate({scrollTop: $(anchor).offset().top - $("header").height()},'slow');
    return false;
  });

  // make fixed background display on iOS
  var userAgent = window.navigator.userAgent;

  if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
     // iPad or iPhone
     $("#background").css({"display": "inital"});
  }

});
