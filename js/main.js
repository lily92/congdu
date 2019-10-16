$(function () {

  $('.footers').load("footer.html", "", function (response, status, request) {
    $(this).html(response);
    //为返回顶部元素添加点击事件
    $(".footers").on("click", ".btn-top", function () {
      //将当前窗口的内容区滚动高度改为0，即顶部
      $("html,body").animate({ scrollTop: 0 }, "fast");
    });
  });

  $('.slider-list li ').click(function (e) {
    $('.slider-list li ').removeClass('active');
    $('.slider-list li ').find('dl').stop().slideUp();
    $(this).addClass('active');
    $(this).find('dl').stop().slideDown();
  });

  $(document).ready(function () {
    $("#_header").on("click", ".hamburger", function () {
      $(this).toggleClass("is-active");
      $('.nav-mobile,.flex-nav').toggleClass('active');
      if($(this).hasClass('is-active')){
        $('.btn-top').css('z-index','1')
      }else{
        $('.btn-top').css('z-index','2')
      }
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

    $("#_header").on("click", ".trd", function () {
      if ($(this).text() == '+') {
        $(this).parent().parent().parent().find('ul').stop().slideUp();
        $(this).parent().parent().parent().find('.trd').text('+');
        $(this).text('-');
        $(this).parent().parent().find('ul').stop().slideDown();
      } else {
        $(this).text('+');
        $(this).parent().parent().find('ul').stop().slideUp();
      }
    });

    /** pc hover */
    $("#_header").on("mouseenter", ".nav-right li", function () {
      $('.nav-line').attr('class', 'nav-line line' + $(this).index())
    });

    $(window).scroll(function () {
      //创建一个变量存储当前窗口下移的高度
      var scroTop = $(window).scrollTop();
      //如果大于100，则显示顶部元素，否则隐藏顶部元素
      if (scroTop > 100) {
        $('.btn-top').fadeIn(500);
      } else {
        $('.btn-top').fadeOut(500);
      }

      var totalheight = parseFloat($(window).height()) + scroTop;
      var documentheight = parseFloat($(document).height());
      if (documentheight - totalheight <= 200) {
        // 显示白色
        $('.btn-top').addClass('active')
       
      } else {
        // 显示蓝色
        $('.btn-top').removeClass('active')
      }
    }

    );



  })
})

function loadHeader(index) {
  $('#_header').load("header.html", "", function (response, status, request) {
    $('#_header').html(response);
    $('.nav-line').attr('class', 'nav-line line' + index + '')
    $(".nav-right li:eq(" + index + ")").addClass('active')
  });
}

function setSilder(index, subIndex) {
  if (subIndex) {
    $('.slider-list li:eq(' + index + ') ').find('dl dd:eq(' + subIndex + ')').addClass('cur')
  }
  $('.slider-list li:eq(' + index + ') ').addClass('active')
  $('.slider-list li:eq(' + index + ') ').find('dl').slideDown()

}

