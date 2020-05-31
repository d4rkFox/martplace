$(function () {
    $('.weekly__wrapper').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                },
            },
        ],
    })

    $(".weekly__star").rateYo({
        starWidth: "14px",
        ratedFill: "#ffc000",
        rating: 3.6,
        readOnly: true,
    });

    $(".product__star,.followers__star").rateYo({
        starWidth: "12px",
        ratedFill: "#ffc000",
        rating: 4.2,
        readOnly: true,
    });

    $(".production__star").rateYo({
        starWidth: "15px",
        ratedFill: "#ffc000",
        rating: 4.2,
        readOnly: true,
        spacing: "2px"
    });

    $('.followers__wrapper').slick({
        prevArrow: '<button type="button" class="slick-btn slick-btn__bg slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-btn__bg slick-next"></button>',
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    variableWidth: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    variableWidth: false,
                },
            },
        ],
    });



    $('.product__filter-btn').on('click', function () {
        $('.product__dropdown-list')
            .slideToggle({
                duration: 200,
                easing: "linear",
            })
    });


    $(".js-range-slider").ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 400,
        from: 30,
        to: 300,
        step: 10,
        prefix: "$"
    });

    $(".header__btn").on('click', function () {
        $('.header__box').toggleClass('header__box--active')
        $('.header__logo-link').toggleClass('header__logo-link--active')
    });

    $(".menu__btn-wrapper").on('click', function () {
        $(".menu__list").slideToggle()
    });

    var mixer = mixitup('.product__inner-items');
});

