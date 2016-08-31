jQuery(function($) {
    //SLIDER INIT
    $(".feedback .owl-carousel, .fire_offer .owl-carousel").owlCarousel({
        responsiveClass:true,
        dots:true,
        dotsEach: true,
        loop:false,
        rewind: true,
        margin: 15,
        responsive:{
            0 : {items:1},
            600 : {items:2},
            993 : {items:3}
        }
    });
    $('.blog .owl-carousel').owlCarousel({
        responsiveClass:true,
        loop:false,
        rewind: true,
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
        loop:true,
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
        loop:false,
    });
    $('#investors .slider .preview .owl-carousel').clone().appendTo('#investors .slider .view .owl-carousel');
    $('#blog .slider .preview .owl-carousel').clone().appendTo('#blog .slider .view .owl-carousel');
    $('#investors .slider .view .owl-carousel, #blog .news .slider .view .owl-carousel').owlCarousel({
        items:1,
        dots:false,
        margin:0,
        loop:false,
        rewind: true,
        touchDrag:false,
        mouseDrag:false
    });
    $('#investors .slider .preview .owl-carousel, #blog .news .slider .preview .owl-carousel').owlCarousel({
        dots:false,
        margin:10,
        loop:false,
        rewind: true,
        responsive: {
            0: {items: 2},
            321: {items: 3},
            600: {items: 4},
            993: {items: 6},
        }
    });
    $(".banner .owl-carousel").owlCarousel({
        items:1,
        dots:true,
        dotsEach: true,
    });

    $('.banner img').each(function () {
       var src = $(this).attr('src'),
           url = 'url('+src+')',
           bg = $(this).parents('.bg');
        console.log(url);
        bg.css('background-image',url);
    });
    $('.banner .owl-dots').wrapAll('<div class="container">');

    $('.slider .preview .owl-carousel .image').click(function () {
        var index = $(this).parents('.owl-item').index(),
            slider = $(this).parents('.slider');
        $(this).parents('.owl-carousel').find('.image').removeClass('active');
        $(this).addClass('active');
        slider.find('.view .owl-carousel').trigger('to.owl.carousel', [index]);
    });
    function navChange() {
        $('#card .active .block:eq(0)').css('float', 'left');
        $('#card .active .block:eq(1)').css('float', 'right');
    };

    $("#card .owl-carousel").owlCarousel({
        responsiveClass:true,
        dots:false,
        callbacks:true,
        loop:false,
        rewind: true,
        responsive:{
            0:{items:1},
            768:{items:2},
            993:{items:2}
        },
        onDragged: navChange,
    });
    navChange();


    //SLIDER NAV
    $('.slider_nav').click(function() {
        var owl = $(this).siblings('.owl-carousel');
        if ($(this).hasClass('right') == true){
            side = 'next';
        } else {
            side = 'prev';
        };
        owl.trigger(side+'.owl.carousel');
        navChange();
    });


    //catalog photo link
    $('.catalog .image .owl-item img').click(function () {
        var elem = $(this).parents('.image').parent().siblings().find('a').attr('href');
        window.open(elem);
    });
    //blog link
    $('.blog .block, .blog li').click(function () {
        var elem = $(this).find('a').attr('href');
        window.open(elem);
    });
    //hot offer link
    $('.fire_offer .image').click(function () {
        var elem = $(this).siblings('.description').find('a').attr('href');
        console.log(elem.html());
        window.open(elem);
    });



    //hovers
    $('.catalog .image img').hover(
        function () {
            var elem = $(this).parents('.image').parent().siblings().find('a');
            elem.addClass('hovered');
        },
        function () {
            var elem = $(this).parents('.image').parent().siblings().find('a');
            elem.removeClass('hovered');
        }
    );

    
    //burger animation

    $('.mobile_nav').click(function(){
        $('.mobile_nav .action_block').toggleClass('animate_open animate_close');
    });
    
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
    $('select.brand, #mark, .years').each(function () {
        $(this)[0].selectedIndex = "-1";
    });


    var options = [
        {label: 'Option 1', title: 'Option 1', value: '1'},
        {label: 'Option 2', title: 'Option 2', value: '2'},
        {label: 'Option 3', title: 'Option 3', value: '3'},
        {label: 'Option 4', title: 'Option 4', value: '4'},
        {label: 'Option 5', title: 'Option 5', value: '5'},
        {label: 'Option 6', title: 'Option 6', value: '6'}
    ];

    function changeColor(option) {
        var elem = option.parent().siblings('.btn-group').children('button');
        elem.css('color','#4b4b4b');
    }
    $('select.brand, #mark').multiselect({
        maxHeight: 200,
        buttonWidth: '100%',
        buttonClass: 'select',
        onDropdownShow: function(event) {
            var menu = $(event.currentTarget).find(".dropdown-menu");
            var width = menu.parent().width();
            menu.css("width", width);
        },
        nonSelectedText: 'Марка автомобиля',
        allSelectedText: 'Выбрано всё',
        nSelectedText: 'вариантов выбранно',
        onChange: function(option) {
            changeColor(option);
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
        disabledText: 'Модели',
        includeSelectAllOption: true,
        selectAllText: 'Выбрать всё',
        onChange: function(option) {
            changeColor(option);
        }
    });
    $('select.model, #model').multiselect('disable');
    $('.years select.by').multiselect({
        maxHeight: 200,
        buttonWidth: '100%',
        buttonClass: 'select',
        onDropdownShow: function(event) {
            var menu = $(event.currentTarget).find(".dropdown-menu");
            var width = menu.parent().width();
            menu.css("width", width);
        },
        nonSelectedText: 'Год от',
        allSelectedText: 'Выбрано всё',
        nSelectedText: 'вариантов выбранно',
        onChange: function(option) {
            changeColor(option);
        }
    });
    $('.years select.too').multiselect({
        maxHeight: 200,
        buttonWidth: '100%',
        buttonClass: 'select',
        onDropdownShow: function(event) {
            var menu = $(event.currentTarget).find(".dropdown-menu");
            var width = menu.parent().width();
            menu.css("width", width);
        },
        nonSelectedText: 'Год до',
        allSelectedText: 'Выбрано всё',
        disabledText: 'Год до',
        nSelectedText: 'вариантов выбранно',
        onChange: function(option) {
            changeColor(option);
        }
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
        onChange: function(option) {
            changeColor(option);
        }
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
        onChange: function(option) {
            changeColor(option);
        }
    });
    //Catalog reset filter value
    $('.catalog .filter a.reset').on('click', function() {
        event.preventDefault();
        $('select').multiselect('deselectAll', false);
        $('select').multiselect('updateButtonText');
        $('select.brand, #mark').each(function () {
            $(this)[0].selectedIndex = "-1";
        });
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


//hover_block
    function setHoverTop(elem) {
        console.log(elem.height());
        elem.css({
            'top':  -(elem.height() + 27) + 'px',
            'left': 0
        });
    }
    $('.hover_block').each(function () {
        var elem = $(this);
        setHoverTop(elem);
    });
    $('.hover_block').parent().hover(function () {
        var elem = $(this).find('.hover_block');
        setHoverTop(elem);
    })

//modal img
function overflow() {
    $('body').toggleClass('overflow');
};
function closePopup() {
    overflow();
    $('#popup').css('display', 'none');
    $('#popup .modal-content .modal-img').css('display','none');
    $('#popup .modal-content .modal-form form').css('display','none');
    $('#popup .modal-content .modal-form .thx').css('display','none');
};
function displayPopup() {
    $('#popup').css('display', 'flex');
};
$('#card .slider .block').click(function () {
    var url = $(this).children('img').attr('src');
    $('#popup .modal-content .modal-img').css('display','block');
    $('#popup .modal-content .modal-img img').attr('src',url);
    overflow();
    displayPopup();
});
$('.popup_open').click(function () {
    event.preventDefault();
    $('#popup .modal-content .modal-form').css('display','block');
    $('#popup .modal-content .modal-form form').css('display','block');
    overflow();
    displayPopup();
});
$('#popup').click(function () {
    if ($(event.target).closest("#popup .modal-content").length) return;
    closePopup();
    event.stopPropagation();
});
function thx() {
    $('#popup .modal-content .modal-form').css('display','block');
    $('#popup .modal-content .modal-form form').css('display','none');
    $('#popup .modal-content .modal-form .thx-1').css('display','block');
    displayPopup();
};

//error img
$('img').error(function(){
    $(this).attr('src', 'img/staff/error.png');
})


