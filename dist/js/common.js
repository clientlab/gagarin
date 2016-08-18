jQuery(function($) {
    //SLIDER INIT
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

    function navChange() {
        $('#card .active .block:eq(0)').css('float', 'left');
        $('#card .active .block:eq(1)').css('float', 'right');
    }
    $("#card .owl-carousel").owlCarousel({
        responsiveClass:true,
        dots:false,
        callbacks:true,
        responsive:{
            0:{items:1},
            768:{items:2},
            993:{items:2}
        },
        onDragged: navChange,
    });


    //SLIDER NAV


    $('.slider_nav').click(function() {
        if ($(this).hasClass('right') == true){
            side = 'next';
        } else {
            side = 'prev';
        };
        $(this).siblings('.owl-carousel').trigger(side+'.owl.carousel');
        navChange();
    });

    $('.mobile_nav').click(function(){
        $('.mobile_nav .action_block').toggleClass('animate_open animate_close');
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
    $('select.brand, #mark').each(function () {
        $(this)[0].selectedIndex = "-1";
    });


    var options = [
        {label: 'Option 1', title: 'Option 1', value: '1', selected: true},
        {label: 'Option 2', title: 'Option 2', value: '2'},
        {label: 'Option 3', title: 'Option 3', value: '3', selected: true},
        {label: 'Option 4', title: 'Option 4', value: '4'},
        {label: 'Option 5', title: 'Option 5', value: '5'},
        {label: 'Option 6', title: 'Option 6', value: '6', disabled: true}
    ];

    $('select.brand, #mark').multiselect({
        maxHeight: 200,
        buttonWidth: '100%',
        buttonClass: 'select',
        onDropdownShow: function(event) {
            var menu = $(event.currentTarget).find(".dropdown-menu");
            var width = menu.parent().width();
            menu.css("width", width);
        },
        nonSelectedText: 'Выберете марку',
        allSelectedText: 'Выбрано всё',
        nSelectedText: 'вариантов выбранно',
        onChange: function() {
            console.log($('select.brand, #mark').val());
            $('select.model, #model').multiselect('enable');
            $('select.model, #model').multiselect('dataprovider', options);
        }
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
        nonSelectedText: 'Выберете марку',
        allSelectedText: 'Выбрано всё',
        nSelectedText: 'вариантов выбранно',
        disabledText: 'Выберете модель',
        includeSelectAllOption: true,
        selectAllText: 'Выбрать всё',
    });
    $('select.model, #model').multiselect('disable');


    $('.years select').multiselect({
        maxHeight: 200,
        buttonWidth: '100%',
        buttonClass: 'select',
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
        onDropdownShow: function(event) {
            var menu = $(event.currentTarget).find(".dropdown-menu");
            var width = menu.parent().width();
            menu.css("width", width);
        },
        nonSelectedText: 'Кузов',
        allSelectedText: 'Выбрано всё',
        nSelectedText: 'вариантов выбранно',
        includeSelectAllOption: true,
        selectAllText: 'Выбрать всё',
    });
    $('.engine select').multiselect({
        maxHeight: 200,
        buttonWidth: '100%',
        buttonClass: 'select',
        onDropdownShow: function(event) {
            var menu = $(event.currentTarget).find(".dropdown-menu");
            var width = menu.parent().width();
            menu.css("width", width);
        },
        nonSelectedText: 'Двигатель',
        allSelectedText: 'Выбрано всё',
        nSelectedText: 'вариантов выбранно',
        includeSelectAllOption: true,
        selectAllText: 'Выбрать всё',
    });
    //Catalog reset filter value
    $('.catalog .filter a.reset').on('click', function() {
        event.preventDefault();
        $('select').multiselect('deselectAll', false);
        $('select').multiselect('updateButtonText');
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
});

//YandexMap
$('#YanMap').each(function () {
    var myMap;
    ymaps.ready(init);
    function init () {
        myMap = new ymaps.Map("YanMap", {
            center: [54.70522149, 20.49810486],
            zoom: 16,
        });
        myMap.behaviors.disable(['scrollZoom']);
        myMap.controls.add('zoomControl', { left: 11, top: 32 })
        myPlacemark = new ymaps.Placemark(
            [54.70522149, 20.49810486],
            {
                hintContent: ''
            }, {
                iconLayout: 'default#image',
            });
        myMap.geoObjects.add(myPlacemark);
    };
});


$( "#brand input" ).change(function() {
    alert( "Handler for .change() called." );
});


var options = [
    {label: 'Option 1', title: 'Option 1', value: '1', selected: true},
    {label: 'Option 2', title: 'Option 2', value: '2'},
    {label: 'Option 3', title: 'Option 3', value: '3', selected: true},
    {label: 'Option 4', title: 'Option 4', value: '4'},
    {label: 'Option 5', title: 'Option 5', value: '5'},
    {label: 'Option 6', title: 'Option 6', value: '6', disabled: true}
];


