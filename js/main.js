$("document").ready(function(){
    // topbutton
    $(window).scroll(function(){
        // let pos = $(window).scrollTop();
        // if(pos > 500) {
        //     $(".qnav").fadeIn();
        // }else{
        //     $(".qnav").fadeOut();
        // }

        $(".topbutton").click(function(){
            $("html, body").stop().animate({
                scrollTop: 0
            }, 1000, function(){

            })
        })
    })

    // header gnb script
    var gnb = function(){
        var item = $(".header-gnb > .gnb-depth-1 > .depth-1");
        var header = $(".header");
        var win = $(window);
        var w = win.width();

        if (w>1280) {
            item.on("mouseenter", function(e){
                header.css({height:250})
            })
            header.on("mouseleave", function(e){
                header.css({height:80})
            })
        }        
    }
    $(function(){
        gnb();
    })

    let mobileGnb = $('.mobile-gnb');
    initMobileGnb(mobileGnb);

    function initMobileGnb(mobileGnb){
        let html = $('html');
        let sidebarButton = mobileGnb.find('.sidebar-btn');
        let mobileMenu = mobileGnb.find('.depth-1');

        sidebarButton.on('click', function(){
            if(mobileGnb.hasClass('open')){
                mobileGnbClose(mobileGnb);
            }else{
                mobileGnbOpen(mobileGnb);
            }
        })       
        
        function mobileGnbOpen(gnb){
            gnb.addClass('open');
            html.addClass('not-scroll');
        }
        function mobileGnbClose(gnb){
            gnb.removeClass('open');
            html.removeClass('not-scroll');
        }
    }

    $(".mobile-gnb .sidebar .gnb-depth-1>li").click(function(){
        let $this = $(this);
        $this.find("> ul").stop().slideToggle();
    })

    // slide script
    $('.main-slider').slick({
        slide: 'div',
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        draggle: true,
        fade: true,
        arrows: false,
    })

    // location map
    new daum.roughmap.Lander({
		"timestamp" : "1677940568871",
		"key" : "2dx9k",
		"mapHeight" : "160",
        "margin": "0",
	}).render();

    new daum.roughmap.Lander({
		"timestamp" : "1678667221353",
		"key" : "2e2cb",
		// "mapWidth" : "1060",
		"mapHeight" : "410"
	}).render();


    // sub-3 tab
    $(".tab-pane").hide();
    $(".tab-menu li:first").addClass("active").show();
    $(".tab-pane:first").show();

    $(".tab-menu li").click(function(){
        $(".tab-menu li").removeClass("active");
        $(this).addClass("active");
        $(".tab-pane").hide();
        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();
        return false;
    })
});

