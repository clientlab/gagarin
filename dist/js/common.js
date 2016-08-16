jQuery(function($) {
    $(".feedback .owl-carousel, .fire_offer .owl-carousel").owlCarousel({
        responsiveClass:true,
        dots:true,
        dotsEach: true,
        responsive:{
            0 : {items:1},
            600 : {items:2},
            993 : {items:3}
        }
    });
    $('.blog .owl-carousel').owlCarousel({
        responsiveClass:true,
        dots:false,
        responsive:{
            0 : {items:1},
            600 : {items:2},
            993 : {items:3}
        }
    });
    $(".partners .owl-carousel").owlCarousel({
        dots:false,
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
    $("#card .owl-carousel").owlCarousel({
        responsiveClass:true,
        dots:false,
        responsive:{
            0:{items:1},
            768:{items:2},
            993:{items:2}
        }
    });
    // nav
    $('#card .active .block:eq(0)').css('float', 'left');
    $('#card .active .block:eq(1)').css('float', 'right')
    $('.slider_nav').click(function() {
        if ($(this).hasClass('right') == true){
            side = 'next';
        } else {
            side = 'prev';
        };
        $(this).siblings('.owl-carousel').trigger(side+'.owl.carousel');
        $('#card .active .block:eq(0)').css('float', 'left');
        $('#card .active .block:eq(1)').css('float', 'right')
    });

    $('.mobile_nav').click(function(){
        $('.mobile_nav .action_block').toggleClass('animate_open animate_close')
    });



    //burger animation
    var delay = 500;
    $(".mobile_nav").on('click', function () {
        if ($(this).hasClass('state_1') && $(this).hasClass('state_2')) {
            $('.nav_bar .navigation').removeClass('open');
            $(".mobile_nav").removeClass('state_2');
            setTimeout(function() {
                $(".mobile_nav").removeClass('state_1');
            }, delay)
        } else if ($(this).hasClass('state_1') ==false && $(this).hasClass('state_2') == false) {
            $(".mobile_nav").addClass('state_1');
            setTimeout(function() {
                $(".mobile_nav").addClass('state_2');
            }, delay)
            $('.nav_bar .navigation').addClass('open');
        }
    });

    //select
    $('select.brand, #mark').multiselect({
        maxHeight: 200,
        buttonWidth: '100%',
        buttonClass: 'select',
        disableIfEmpty: true,
        onDropdownShow: function(event) {
            var menu = $(event.currentTarget).find(".dropdown-menu");
            var width = menu.parent().width();
            menu.css("width", width);
        },
        nonSelectedText: 'Выберете марку',
        allSelectedText: 'Выбрано всё',
        nSelectedText: 'вариантов выбранно',
    });
    $('select.model, #model').multiselect({
        maxHeight: 200,
        buttonWidth: '100%',
        buttonClass: 'select',
        disableIfEmpty: true,
        onDropdownShow: function(event) {
            var menu = $(event.currentTarget).find(".dropdown-menu");
            var width = menu.parent().width();
            menu.css("width", width);
        },
        nonSelectedText: 'Выберете модель',
        allSelectedText: 'Выбрано всё',
        nSelectedText: 'вариантов выбранно',
    });
    $('.years select').multiselect({
        maxHeight: 200,
        buttonWidth: '100%',
        buttonClass: 'select',
        disableIfEmpty: true,
        onDropdownShow: function(event) {
            var menu = $(event.currentTarget).find(".dropdown-menu");
            var width = menu.parent().width();
            menu.css("width", width);
        },
        nonSelectedText: 'Выберете год',
        allSelectedText: 'Выбрано всё',
        nSelectedText: 'вариантов выбранно',
    });
    $('.body select').multiselect({
        maxHeight: 200,
        buttonWidth: '100%',
        buttonClass: 'select',
        disableIfEmpty: true,
        onDropdownShow: function(event) {
            var menu = $(event.currentTarget).find(".dropdown-menu");
            var width = menu.parent().width();
            menu.css("width", width);
        },
        nonSelectedText: 'Кузов',
        allSelectedText: 'Выбрано всё',
        nSelectedText: 'вариантов выбранно',
    });
    $('.engine select').multiselect({
        maxHeight: 200,
        buttonWidth: '100%',
        buttonClass: 'select',
        disableIfEmpty: true,
        onDropdownShow: function(event) {
            var menu = $(event.currentTarget).find(".dropdown-menu");
            var width = menu.parent().width();
            menu.css("width", width);
        },
        nonSelectedText: 'Двигатель',
        allSelectedText: 'Выбрано всё',
        nSelectedText: 'вариантов выбранно',
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
$('.banner .nav_slider ul li:eq(0)').addClass('active');
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

$('.catalog .engine input, .catalog .body input, .catalog .mark input').click(function () {
    $(this).attr('checked', !$(this).attr('checked'));
})
$('.catalog .filter a').click(function () {
    event.preventDefault();
    $('.catalog .filter .price input, .catalog .filter .years input').val('');
    $('.catalog .filter input[type=checkbox]').attr('checked', false);
})
var myMap;
ymaps.ready(init);
function init () {
    myMap = new ymaps.Map("YanMap", {
        center: [43.28061610, 76.91219323],
        zoom: 16,
        //  controls: ['smallMapDefaultSet'],
    });
    myMap.behaviors.disable(['scrollZoom']);
    myMap.controls.add('zoomControl', { left: 11, top: 32 })


    myPlacemark = new ymaps.Placemark(
        [43.28137644, 76.91263848],
        {

            hintContent: ''
        }, {
            iconLayout: 'default#image',
        });
    myMap.geoObjects.add(myPlacemark);
};

