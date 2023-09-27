
//2차메뉴 : 싱글드롭다운
$(function(){
    $(".depth01>li").mouseover(function(){
        $(this).children(".depth02").stop().slideDown(400);
    });
    $(".depth01>li").mouseleave(function(){
        $(this).children(".depth02").stop().slideUp(400);
    });
});

//header fixed
$(function(){
    var windowObj = $(window);
    var header = $("header");
    var headerTop = header.offset().top;

    windowObj.scroll(function(){
        if(headerTop < windowObj.scrollTop()) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });
});

//메인비주얼 슬라이드
$(function(){
    $('.main_visual').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
        // autoplay:true,
        autoplaySpeed:3000
      });
});

//cont01 슬라이드
$(function(){
    $('.box_wrap').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: "unslick"
            }
            //1024일 때부터 슬라이드 해제
          ]
      });
});