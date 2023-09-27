
//main_menu
$(function(){
    $(".menu_icon").click(function(){
        $(".menu").stop().animate({top:'0'}, 300);
        $(".menu_icon").css("display","none");
        $(".close_icon").css("display","block");
    });
    $(".close_icon").click(function(){
        $(".menu").stop().animate({top:'-100%'}, 300);
        $(".menu_icon").css("display","block");
        $(".close_icon").css("display","none");
    });
});

//contact me hover effect
$(function(){
    $(".resume, .call, .mail, .kakao").mouseover(function(){
        $(".rotate").css("transform","rotate(0deg)")
    });
    $(".resume, .call, .mail, .kakao").mouseleave(function(){
        $(".rotate").css("transform","rotate(5deg)")
    });
});
