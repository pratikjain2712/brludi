$(function() {
  "use strict";
  $(".offcanvas-collapse").toggleClass("open");

  $('[data-toggle="offcanvas"]').on("click", function() {
    $(".offcanvas-collapse").toggleClass("open");
  });
});
