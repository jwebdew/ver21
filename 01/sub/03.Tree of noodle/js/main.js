console.log("Yang");

$(function(){
    /* 헤더 슬라이드 업다운 */
    $('header').mouseenter(function(){
        $('.depth02').stop().slideDown();
    });
    $('header').mouseleave(function(){
        $('.depth02').stop().slideUp();
    });

    /* 풀페이지 설정 */
    var myFullpage = new fullpage('#fullpage', {
        verticalCentered: true,
        sectionsColor: ['#1bbc9b', '#4a5a2d', '#eee', '#fff','#fff','fff',],
        navigation: true,
        scrollingSpeed: 1000
    });

    //슬릭슬라이더 메인비주얼
    $('.main_visual').slick({
        autoplay: true,
        autoplaySpeed: 8000,
        dots: true,
    });


    /* 슬릭슬라이더 */
    $('.cont02').slick({
        infinite: true, 
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 640,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
                }
            },
            {
            breakpoint: 460,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
            }
        ]
                    });        
        
        /* 탭메뉴 */
    $('.tab_menu .left li').click(function(){
        $('.tab_menu .left li').removeClass('on');
        $(this).addClass('on');

        $('.tab_menu .right li').removeClass('on');
        $('.tab_menu .right li').eq($(this).index()).addClass('on');
    });
}); 