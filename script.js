let start = 0;
let end = 0;
let condition = true;

function forward() {
    $('.menu-small').addClass('active');
    anime({
        targets: '.menu-small',
        translateX: ['-100%', '0%'],
        easing: 'easeInOutQuad',
        duration: 400,
        loop: false
    });
    condition = false;
}

function backward() {
    anime({
        targets: '.menu-small',
        translateX: ['0%', '-100%'],
        easing: 'easeInOutQuad',
        duration: 400,
        loop: false,
        complete: function() {
            $('.menu-small').removeClass('active');
        }
    });
    condition = true;
}

$('.menu_small_icon').click(function () {
    if (condition) {
        forward();
    } else {
        backward();
    }
});

$(document).on('touchstart', function (event) {
    start = event.originalEvent.touches[0].pageX;
});

$(document).on('touchend', function (event) {
    end = event.originalEvent.changedTouches[0].pageX;
    if (end - start >= 100 && condition) {
        forward();
    } else if (start - end >= 100 && !condition) {
        backward();
    }
});

$(document).ready(function () {
    $('.row3').bxSlider();
});
