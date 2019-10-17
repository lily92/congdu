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
        var li_con_width = $(this).width();
        var li_width =  $(this).outerWidth();
        var li_pad_width =( li_width - li_con_width) /2 
        var li_index = $(this).index();
        var li_index0_width = $('.nav-right li:eq(0)').outerWidth()
        var left = 0;
        if( li_index > 0){
          left =  li_width * (li_index-1) + li_index0_width + li_pad_width
        }
        $('.nav-line').css({'left':left})
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

    /*选中*/
    var li_con_width =$('.nav-right li:eq('+index+')').width();
    var li_width = $('.nav-right li:eq('+index+')').outerWidth();
    var li_pad_width =( li_width - li_con_width) /2 
    var li_index =$('.nav-right li:eq('+index+')').index();
    var li_index0_width = $('.nav-right li:eq(0)').outerWidth()
    var left = 0;
    if( li_index > 0){
      left =  li_width * (li_index-1) + li_index0_width + li_pad_width
    }
    $('.nav-line').css({'left':left})

  });
}

function setSilder(index, subIndex) {
  if (subIndex>=0) {
    $('.slider-list li:eq(' + index + ') ').find('dl dd:eq(' + subIndex + ')').addClass('cur')
  }
  $('.slider-list li:eq(' + index + ') ').addClass('active')
  $('.slider-list li:eq(' + index + ') ').find('dl').slideDown()

}



