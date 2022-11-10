$(document).ready(function () {
    $('.timeline').slick({
        slidesToShow: 3,
        slidesToScoll: 1,
        arrows: true,
        dots: false,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        focusOnSelect: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        touchMove: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        prevArrow: '<button class="slick-prev"></button>',
        nextArrow: '<button class="slick-prev"></button>',
    });

    $('.slick-slide').on('mouseover', itemHover);
    $('.slick-track').on('mouseout', itemLeave);
    function itemHover(e) {
        $('.slick-slide').removeClass('slick-current slick-active slick-center small')
        $(this).prev().addClass('slick-active');

        $(this).addClass('slick-current slick-active slick-center');
        $(this).next().addClass('slick-active');


        $('.slick-current').prev().prev().addClass('small')
        $('.slick-current').next().next().addClass('small')
    }
    $('.slick-slide').on('afterChange', function (event, slick, currentSlide) {
        console.log("Hello");
        // $('.screen-mobile-slider').slick('slickGoTo', currentSlide, false);
    });
    function itemLeave(e) {


    }
    $('.slick-current').prev().prev().addClass('small')
    $('.slick-current').next().next().addClass('small')
    $('.timeline').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        

        $('.slick-slide').removeClass('small')

    });
    $('.timeline').on('afterChange', function (event, slick, currentSlide) {
        $('.slick-current').prev().prev().addClass('small')
        $('.slick-current').next().next().addClass('small')
    });

});