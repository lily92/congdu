$(document).ready(function () {
  $('.head').load("header.html", "", function (response, status, request) {
    $(this).html(response);
  });

  $('.footers').load("footer.html", "", function (response, status, request) {
    $(this).html(response);
  });

  

    $("body").delegate(".hamburger", "click", function () {
      $(this).toggleClass("is-active");
      $('.nav-mobile').toggleClass('active')
    });
  })