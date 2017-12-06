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

