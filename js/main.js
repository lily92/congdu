 $(function(){
  $('#_header').load("header.html", "", function (response, status, request) {
    $('#_header').html(response);
  });

  $('.footers').load("footer.html", "", function (response, status, request) {
    $(this).html(response);
  });
  
  $(document).ready(function () {
    $("#_header").on("click", ".hamburger", function () {
      $(this).toggleClass("is-active");
      $('.nav-mobile').toggleClass('active')
    });
  })
 })

