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

  // only load images when visible
  var classes = ["moss", "stone-wall", "eilean-donan", "sheep"];
  var bgDivs = [];
  for (var i = 0; i < classes.length; i++) {
    bgDivs.push($("#back"+i));
  }

  $(window).scroll($.throttle(500,function () {
    for (var i = 0; i < classes.length; i++) {
      if (!bgDivs[i].hasClass(classes[i]) &&
        ($(window).scrollTop() + $(window).height()) > (bgDivs[i].offset().top - $(window).height()*.75)) {
        bgDivs[i].addClass(classes[i]);
      }
    }
  }));

  // make fixed background display on iOS
  var userAgent = window.navigator.userAgent;

  if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
     // iPad or iPhone
     $("#background").css({"display": "initial"});
  }

});
