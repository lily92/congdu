$(document).ready(function () {
    $("body").delegate(".hamburger", "click", function () {
      $(this).toggleClass("is-active");
      $('.nav-mobile').toggleClass('active')
    });
  })