'use strict';

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


function initMap() {
    var myLatLng = {lat: -25.363, lng: 131.044};

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 4
    });

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Hello World!'
    });
}

var sliderLevel = document.getElementById('slider-level');
var sliderTotalArea = document.getElementById('slider-total-area');
var sliderLivingSpace = document.getElementById('slider-living-space');

noUiSlider.create(sliderLevel, {
    start: [14],
    connect: true,
    tooltips: [ true ],
    step: 1,
    range: {
        'min': 1,
        'max': 24
    }
});
noUiSlider.create(sliderTotalArea, {
    start: [45, 80],
    connect: true,
    tooltips: [true, true ],
    step: 1,
    range: {
        'min': 38,
        'max': 100
    }
});
noUiSlider.create(sliderLivingSpace, {
    start: [15, 80],
    connect: true,
    tooltips: [ true , true],
    step: 1,
    range: {
        'min': 20,
        'max': 55
    }
});




