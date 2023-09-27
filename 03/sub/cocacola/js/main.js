
//SupahScroll
// $(function(){
//    class SupahScroll {
//  constructor(options) {
//    this.opt = options || {}
//    this.el = this.opt.el ? this.opt.el : '.supah-scroll'
//    this.speed = this.opt.speed ? this.opt.speed : 0.8
//    this.init()
//  }
       
//  init() {
//    this.scrollY = 0
//    this.supahScroll = document.querySelectorAll(this.el)[0]
//    this.supahScroll.classList.add('supah-scroll')
//    this.events()
//    this.update()
//    this.animate()
//  }
 
//  update() {
//    if (this.supahScroll === null) return
//    document.body.style.height = `${this.supahScroll.getBoundingClientRect().height}px`
//  }
 
//  pause() {
//    document.body.style.overflow = 'hidden'
//    cancelAnimationFrame(this.raf)
//  }
 
//  play() {
//    document.body.style.overflow = 'inherit'
//    this.raf = requestAnimationFrame(this.animate.bind(this))
//  }
 
//  destroy() {
//    this.supahScroll.classList.remove('supah-scroll')
//    this.supahScroll.style.transform = 'none'
//    document.body.style.overflow = 'inherit'
//    window.removeEventListener('resize', this.update)
//    cancelAnimationFrame(this.raf)
//    delete this.supahScroll
//  }

//  animate() {
//    this.scrollY += (window.scrollY - this.scrollY) * this.speed
//    this.supahScroll.style.transform = `translate3d(0,${-this.scrollY}px,0)`
//    this.raf = requestAnimationFrame(this.animate.bind(this))
//  }
 
//  scrollTo(y) {
//    window.scrollTo(0, y)
//  }
 
//  staticScrollTo(y) {
//    cancelAnimationFrame(this.raf)
//    this.scrollY = y
//    window.scrollTo(0, y)
//    this.supahScroll.style.transform = `translate3d(0,${-y}px,0)`
//    this.play()
//  }
 
//  events() {
//    window.addEventListener('load', this.update.bind(this))
//    window.addEventListener('resize', this.update.bind(this))
//  }
// }

// /*------------------------------
// Initialize
// ------------------------------*/
// const supahscroll = new SupahScroll({
//  el: 'main',
//  speed: 0.1
// })
// });


//헤더 2차메뉴
$(function(){
    $(".depth01>li").mouseover(function(){
        $(this).children(".depth02").stop().slideDown(500, 'easeOutElastic');
        $(this).addClass("active");
    });
    $(".depth01>li").mouseleave(function(){
        $(this).children(".depth02").stop().slideUp(500, 'easeOutElastic');
        $(this).removeClass("active");
    });
});

//헤더 스크롤
$(function(){
    var windowObj = $(window);
    var header = $("header");
    var headerTop = header.offset().top;

    windowObj.scroll(function(){
        if(headerTop < windowObj.scrollTop()) {
            header.addClass("fixed");
        }else {
            header.removeClass("fixed");
        }
    });
});

//아코디언 메뉴
$(function(){
    $(".xi-bars").click(function(){
        $(".mobile").stop().animate({left:'0'}, 300, 'easeOutElastic');
    });
    $(".xi-close").click(function(){
        $(".mobile").stop().animate({left:'-100%'}, 300, 'easeOutElastic')
    });

    $(".m_depth01>li>a").click(function(){
        if($(this).next().css("display") == "none") {
            $(".m_depth02").slideUp(300);
            $(this).next().slideDown(300, 'easeOutElastic');
            $(".m_depth01>li").removeClass("on");
            $(this).parent().addClass("on");
            // $(".xi-minus-min").addClass("on");
            $(this).children(".xi-plus-min").hide();
            $(this).children(".xi-minus-min").show();
        }else if ($(this).next().css("display") == "block") {
            $(this).next().slideUp(300, 'easeOutElastic');
            $(".m_depth01>li").removeClass("on");
            $(this).children(".xi-plus-min").show();
            $(this).children(".xi-minus-min").hide();
        }
    });
});

//cont01 bg효과
$(function(){
    $(".cont01 .cont01_right .about li").mouseover(function(){
        $(".over").fadeIn(300);
    });
    $(".cont01 .cont01_right .about li").mouseleave(function(){
        $(".over").fadeOut(300);
    });

    $(document).foundation();  
      $(document).animateScroll();
    

      var doc = document.documentElement;
      doc.setAttribute('data-useragent', navigator.userAgent);
});