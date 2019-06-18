

$(document).ready(function () {


    $(function () {
        $('.pettySlider .carouselControl .next').on('click', function () {
            if ($('.pettySlider .carousel li.current').next().length) {
                $('.pettySlider .carousel li.current').removeClass('current').next().addClass('current');
            } else {
                $('.pettySlider .carousel li:last-child').removeClass('current');
                $('.pettySlider .carousel li:first-child').addClass('current');
            }
        });

        $('.pettySlider .carouselControl .prev').on('click', function () {
            if ($('.pettySlider .carousel li.current').prev().length) {
                $('.pettySlider .carousel li.current').removeClass('current').prev().addClass('current');
            } else {
                $('.pettySlider .carousel li:first-child').removeClass('current');
                $('.pettySlider .carousel li:last-child').addClass('current');
            }
        });

        $('.pettySlider .carousel li').css({
            'transition': $('.carousel').attr('data-fadIn')
        })
    });


});