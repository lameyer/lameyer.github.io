$(document).ready(function () {

  $(window).scroll(function () {
    var scrollDist = $(document).scrollTop();
    var transparency = .9;
    if (scrollDist <= 700) {
      transparency = scrollDist / 770;
    }
    $("#header").css({
      "background": "rgba(255, 255, 255, " + transparency + ")"
    });

  });

});
