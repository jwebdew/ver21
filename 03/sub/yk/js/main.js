//header scroll
$(function(){
    var widowObj = $(window);
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

//gnb
$(function(){
    $(".xi-drag-handle").click(function(){
        $(".gnb, .m_gnb").stop().animate({left:'0'}, 500);
    });
    $(".xi-close").click(function(){
        $(".gnb, .m_gnb").stop().animate({left:'-100%'}, 500);
    });

    $(".m_depth01>li>a").click(function(){
        if($(this).next().css("display") == "none") {
            $(".m_depth02").slideUp(500);
            $(this).next().slideDown(500);
        }
        else {
            $(this).next().slideUp(500);
        }
    });
});
