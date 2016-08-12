jQuery(function($) {
    $(".feedback .owl-carousel,.blog .owl-carousel, .fire_offer .owl-carousel").owlCarousel({
        responsiveClass:true,
        dots:true,
        dotsEach: true,
        responsive:{
            0 : {items:1},
            600 : {items:2},
            993 : {items:3}
        }
    });
    $(".partners .owl-carousel").owlCarousel({
        dots:true,
        dotsEach: true,
        responsiveClass:true,
        responsive:{
            0:{items:1},
            321:{items:2},
            600:{items:3},
            993:{items:5}
        }
    });
    $(".catalog .owl-carousel").owlCarousel({
        items:1,
        dots:false,
    });
    // nav
    $('.slider_nav').click(function() {
        if ($(this).hasClass('right') == true){
            side = 'next';
        } else {
            side = 'prev';
        };
        $(this).siblings('.owl-carousel').trigger(side+'.owl.carousel');
        //owl.trigger('next.owl.carousel');
    })

    $('.mobile_nav').click(function(){
        $('.mobile_nav .action_block').toggleClass('animate_open animate_close')
    });



    //burger animation
    var delay = 500;
    $(".mobile_nav").on('click', function () {
        if ($(this).hasClass('state_1') && $(this).hasClass('state_2')) {
            $(".mobile_nav").removeClass('state_2');
            setTimeout(function() {
                $(".mobile_nav").removeClass('state_1');
            }, delay)
        } else if ($(this).hasClass('state_1') ==false && $(this).hasClass('state_2') == false) {
            $(".mobile_nav").addClass('state_1');
            setTimeout(function() {
                $(".mobile_nav").addClass('state_2');
            }, delay)
        }
    });
});


//Banner background slider

function setBgHeight() {
    $('.banner .bg_slide').css({
        'height': $('.banner').height() + 'px'
    });
};
setBgHeight();
$(window).resize(setBgHeight);
$('.banner .slide_img div').each(function () {
    $('.banner .nav_slider ul').append('<li></li>');
});
function bg_slide(index) {
    var element = '.banner .slide_img div:eq('+index+')',
        url = "url(" +  $(element).data('background') + ")";
    $('.banner .bg_slide').css('background-image', url);
    $('.banner .bg_slide').animate({
        right: '0%',
    }, 1000, function () {
        $('.banner').css('background-image', url);
        $('.banner .bg_slide').css('right', '-100%')
    } );
};
$('.banner .nav_slider ul li').click(function () {
    if ($(this).hasClass('active')){
        return
    } else{
        var index = $(this).index();
        $('.banner .nav_slider ul li').removeClass('active');
        $(this).addClass('active');
        setBgHeight();
        bg_slide(index);
    }
});

