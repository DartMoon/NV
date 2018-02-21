'use strict';

AOS.init({
    offset: 300,
    duration: 1000,
    disable: function () {
        var maxWidth = 1024;
        return window.innerWidth < maxWidth;
    }
});

var openBtn = document.querySelector('.openMenu');
var closeBtn = document.querySelector('.closeMenu');

function toggleMenu() {
    var menu = document.querySelector('.menu-wrap');
    var body = document.querySelector('body');

    menu.classList.toggle('menu-wrap_open');
    body.classList.toggle('overflow-hidden');
}

openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
var delay = 1000; // Задержка прокрутки

$(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
});

function initMap() {
    var myLatLng = {lat: -25.363, lng: 131.044};

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 16
    });

    var markerIcon = {
        scaledSize: new google.maps.Size(100, 100),
        size: new google.maps.Size(100, 100),
        url: 'img/marker.png'
    };

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        icon: markerIcon
    });
}


var sliderLevel = document.getElementsByClassName('slider-level');
var sliderTotalArea = document.getElementsByClassName('slider-total-area');
var sliderLivingSpace = document.getElementsByClassName('slider-living-space');

for (var i = 0; i < 2; i++) {
    noUiSlider.create(sliderLevel[i], {
        start: [14],
        connect: true,
        tooltips: [true],
        format: wNumb({
            decimals: 0
        }),
        step: 1,
        range: {
            'min': 2,
            'max': 25
        }
    });
    noUiSlider.create(sliderTotalArea[i], {
        start: [34, 75],
        connect: true,
        tooltips: [true, true],
        step: 1,
        format: wNumb({
            decimals: 0
        }),
        range: {
            'min': 34,
            'max': 75
        }
    });
    noUiSlider.create(sliderLivingSpace[i], {
        start: [20, 65],
        connect: true,
        tooltips: [true, true],
        step: 1,
        format: wNumb({
            decimals: 0
        }),
        range: {
            'min': 20,
            'max': 65
        }
    });
}
















