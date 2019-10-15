$(function () {
  $('#_header').load("header.html", "", function (response, status, request) {
    $('#_header').html(response);
  });

  $('.footers').load("footer.html", "", function (response, status, request) {
    $(this).html(response);
  });

  $(document).ready(function () {
    $("#_header").on("click", ".hamburger", function () {
      $(this).toggleClass("is-active");
      $('.nav-mobile,.flex-nav').toggleClass('active')
    });

    $("#_header").on("click", ".show-menu", function () {
      if ($(this).text() == '+') {
        $(this).parent().parent().parent().find('.show-menu').text('+');
        $(this).text('-');
        $(this).parent().parent().parent().find('dd').stop().slideUp();
        $(this).parent().parent().find('dd').stop().slideDown();
      } else {
        $(this).text('+');
        $(this).parent().parent().find('dd').stop().slideUp();
      }
    });

    $('.show-menu').click(function () {
      if ($(this).text() == '+') {
        $(this).parent().parent().parent().find('.show-menu').text('+');
        $(this).text('-');
        $(this).parent().parent().parent().find('dd').stop().slideUp();
        $(this).parent().parent().find('dd').stop().slideDown();
      } else {
        $(this).text('+');
        $(this).parent().parent().find('dd').stop().slideUp();
      }
    })

    /** pc hover */
    $("#_header").on("mouseenter", ".nav-right li", function () {
      console.log($('nav').width())
      var nav_w = $('nav').width()
      $('.nav-line').attr('class','nav-line line'+$(this).index())
    });

  })
})

