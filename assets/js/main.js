"use strict";


jQuery(document).ready(function ($) {

    jQuery(window).load(function () {
        jQuery(".loaded").fadeOut();
        jQuery(".preloader").delay(1000).fadeOut("slow");
    });
    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });

    $('ul.navbar-nav li').hover(function () {
        $(this).children('ul').stop(true, false, true).fadeToggle(300);
    });
    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

    $("").localScroll();

    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();


    /*---------------------------------------------*
     * Counter 
     ---------------------------------------------*/

    $('.statistic-counter').counterUp({
        delay: 10,
        time: 2000
    });



    /* ---------------------------------------------------------------------
     Carousel
     ---------------------------------------------------------------------= */

    $('.main_home_slider').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        navText: [
            "<i class='lnr lnr-chevron-left'></i>",
            "<i class='lnr lnr-chevron-right'></i>"
        ],
        autoplayHoverPause: true

    });

    $('.main_team').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: true,
        nav: true,
        navText: [
            "<i class='lnr lnr-chevron-left'></i>",
            "<i class='lnr lnr-chevron-right'></i>"
        ],
        autoplayHoverPause: true

    });

    $('.main_work1_content').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: true,
        nav: true,
        navText: [
            "prew",
            "next"
        ],
        autoplayHoverPause: true

    });
    $('.main_work1_team').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        navText: [
            "prew",
            "next"
        ],
        autoplayHoverPause: true

    });


// main-menu-scroll

    jQuery(window).scroll(function () {
        var top = jQuery(document).scrollTop();
        var height = 5;
        //alert(batas);

        if (top > height) {
            jQuery('.navbar-fixed-top').addClass('menu-scroll');
        } else {
            jQuery('.navbar-fixed-top').removeClass('menu-scroll');
        }
    });

// scroll Up

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });



//    $('#menu').slicknav();

//    $('#mixcontent').mixItUp({
//        animation: {
//            animateResizeContainer: false,
//            effects: 'fade rotateX(-45deg) translateY(-10%)'
//        }
//    });


/*네비게이션 눌럿을 때 animateScroll plugin 동작구문*/
$('.navbar-nav li:nth-child(1) a').click(function(){
        $('#home').animatescroll({easing:'easeInQuart'});
    })
    $('.navbar-nav li:nth-child(2) a').click(function(){
        $('#service').animatescroll({easing:'easeInQuart'});
    })
    $('.navbar-nav li:nth-child(3) a').click(function(){
        $('#shoes').animatescroll({easing:'easeInQuart'});
    })
    $('.navbar-nav li:nth-child(4) a').click(function(){
        $('#contact').animatescroll({easing:'easeInQuart'});
    })

// waypoint plugin 동작구문
// about us title
$('.wp0').waypoint(function(direction){
        if(direction==='down'){
            $('.wp0').addClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'80%'
    })
    $('.wp0').waypoint(function(direction){
        if(direction==='up'){
            $('.wp0').removeClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'70%'
    })

// about us 첫번째 이미지
$('.wp1').waypoint(function(direction){
        if(direction==='down'){
            $('.wp1').addClass('animate__animated animate__fadeInLeft');
        }
    },{
        offset:'80%'
    })
    $('.wp1').waypoint(function(direction){
        if(direction==='up'){
            $('.wp1').removeClass('animate__animated animate__fadeInLeft');
        }
    },{
        offset:'80%'
    })
// about us 첫번째 내용
$('.wp2').waypoint(function(direction){
        if(direction==='down'){
            $('.wp2').addClass('animate__animated animate__fadeInLeft');
        }
    },{
        offset:'80%'
    })
    $('.wp2').waypoint(function(direction){
        if(direction==='up'){
            $('.wp2').removeClass('animate__animated animate__fadeInLeft');
        }
    },{
        offset:'80%'
    })

// about us 두번째 사진
$('.wp3').waypoint(function(direction){
        if(direction==='down'){
            $('.wp3').addClass('animate__animated animate__fadeInRight');
        }
    },{
        offset:'80%'
    })
    $('.wp3').waypoint(function(direction){
        if(direction==='up'){
            $('.wp3').removeClass('animate__animated animate__fadeInRight');
        }
    },{
        offset:'100%'
    })
// about us 두번째 내용
$('.wp4').waypoint(function(direction){
        if(direction==='down'){
            $('.wp4').addClass('animate__animated animate__fadeInRight');
        }
    },{
        offset:'80%'
    })
    $('.wp4').waypoint(function(direction){
        if(direction==='up'){
            $('.wp4').removeClass('animate__animated animate__fadeInRight');
        }
    },{
        offset:'100%'
    })

// about us 세번쨰 사진
$('.wp5').waypoint(function(direction){
        if(direction==='down'){
            $('.wp5').addClass('animate__animated animate__fadeInLeft');
        }
    },{
        offset:'80%'
    })
    $('.wp5').waypoint(function(direction){
        if(direction==='up'){
            $('.wp5').removeClass('animate__animated animate__fadeInLeft');
        }
    },{
        offset:'100%'
    })
// about us 세번쨰 내용
$('.wp6').waypoint(function(direction){
        if(direction==='down'){
            $('.wp6').addClass('animate__animated animate__fadeInLeft');
        }
    },{
        offset:'80%'
    })
    $('.wp6').waypoint(function(direction){
        if(direction==='up'){
            $('.wp6').removeClass('animate__animated animate__fadeInLeft');
        }
    },{
        offset:'100%'
    })

// shoes title
$('.wp7').waypoint(function(direction){
        if(direction==='down'){
            $('.wp7').addClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'80%'
    })
    $('.wp7').waypoint(function(direction){
        if(direction==='up'){
            $('.wp7').removeClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'100%'
    })

// contact title
$('.wp8').waypoint(function(direction){
        if(direction==='down'){
            $('.wp8').addClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'90%'
    })
    $('.wp8').waypoint(function(direction){
        if(direction==='up'){
            $('.wp8').removeClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'100%'
    })

// contact 주소
$('.wp9').waypoint(function(direction){
        if(direction==='down'){
            $('.wp9').addClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'90%'
    })
    $('.wp9').waypoint(function(direction){
        if(direction==='up'){
            $('.wp9').removeClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'100%'
    })

// contact 건의사항
$('.wp10').waypoint(function(direction){
        if(direction==='down'){
            $('.wp10').addClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'90%'
    })
    $('.wp10').waypoint(function(direction){
        if(direction==='up'){
            $('.wp10').removeClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'100%'
    })


    //End
});



