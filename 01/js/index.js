
/* 메인 txt 타이핑 효과 */
    var typingBool = false; 
    var typingIdx=0; 
    var liIndex = 0;
    var liLength = $(".typing-txt>ul>li").length;
    var del = -1;
    var repeatInt= null;
    var tyInt = null;

var typingTxt = $(".typing-txt>ul li").eq(liIndex).text();
  //인덱스로 구분해서 한줄씩 가져오기
typingTxt=typingTxt.split(""); 
  //한글자씩 잘라서 배열하기

if(typingBool==false){ 
    typingBool=true; 
    tyInt = setInterval(typing,200); 
} 
function typing(){ 
  if(typingIdx<typingTxt.length){ 
   //타이핑 되는 텍스트 길이만큼 반복하기
   $(".typing").append(typingTxt[typingIdx]); 
     typingIdx++; 
    if(typingIdx == typingTxt.length){
        clearInterval(tyInt);
         setTimeout(function(){
           tyInt = setInterval(typing,200);
         },1000);
       }
   } else{ 
       if(-typingTxt.length-1 < del ){
         //한문장이 끝나면
          $(".typing").html(typingTxt.slice(0, del))
          del--;
          //한글자씩 지우기
       }else{
         if(liIndex >= liLength-1){
              liIndex=0;
         }else{
           liIndex++;
         }
         //변수초기화 
         typingIdx=0;
         del= -1;
         typingTxt = $(".typing-txt>ul li").eq(liIndex).text(); 
       }
    } 
}  

/* 헤더 각 항목 클릭시 해당 위치로 이동 */
$(document).ready(function(){
  $('#btn1').click(function(){//about me로 이동
    var offset = $('#div1').offset();
    $('html').animate({scrollTop : offset.top}, 500);
  });
  $('#btn2').click(function(){//Projects로 이동
    var offset = $('#div2').offset();
    $('html').animate({scrollTop : offset.top}, 500);
  });
  $('#btn3').click(function(){//Graphic으로 이동
    var offset = $('#div3').offset();
    $('html').animate({scrollTop : offset.top}, 500);
  });
  $('#btn4').click(function(){//Contact로 이동
    var offset = $('#div4').offset();
    $('html').animate({scrollTop : offset.top}, 500);
  });
});

/* 스크롤다운시 헤더색상변화 */
$(function(){
    var $header = $('header')
    var $page = $('.page-start');//색상변할 부분
    var $window = $(window);
    var pageOffsetTop = $page.offset().top;

    $window.resize(function(){
        pageOffsetTop = $page.offset().top;
    });

    $window.on('scroll', function(){ //스크롤시
        var scrolled = $window.scrollTop() >= pageOffsetTop;
        $header.toggleClass('down', scrolled);
      });
});

/* about me 스크롤효과 */
$(function(){
    $(window).scroll(function(){
        $('.about h2, .about_l img, about_l p, .profile').each(function(i){
            var scrollWindow = $(window).scrollTop() + $(window).height();
            var scrollObject = $(this).offset().top + $(this).outerHeight();
            console.log(scrollWindow);
            console.log(scrollObject);

            if (scrollWindow >= scrollObject) {
                $('.about h2').animate({//about me
                    'left' : '0',
                    'opacity' : '1'
                }, 1000);
                 
                $('.about_l img').animate({'opacity' : '1'}, 800);
                $('.about_l p').delay(300).animate({'opacity' : '1'}, 800);
                $('.profile:nth-of-type(1)').delay(500).animate({'opacity' : '1'}, 800);
                $('.profile:nth-of-type(2)').delay(800).animate({'opacity' : '1'}, 800);
                $('.profile:nth-of-type(3)').delay(1200).animate({'opacity' : '1'}, 800);
                $('.profile:nth-of-type(4)').delay(1600).animate({'opacity' : '1'}, 800);
                $('.profile:nth-of-type(5)').delay(2000).animate({'opacity' : '1'}, 800);
             }
        });
    });//scroll end
});//jquery end

