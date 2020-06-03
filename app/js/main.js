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
        prefix: "$",
        decorate_both: true // false,
    });

    $(".header__btn").on('click', function () {
        $('.header__box').toggleClass('header__box--active'),
            $('.header__logo-link').toggleClass('header__logo-link--active')
    });

    $(".menu__btn-wrapper").on('click', function () {
        $(".menu__list").slideToggle()
    });

    $('.filter__list').on('click', function () {
        $('.production__content').addClass('production__content--active'),
            $('.production__photo').addClass('production__photo--active'),
            $('.filter__col').removeClass('filter__col--active'),
            $('.filter__line').addClass('filter__line--active'),
            $('.production__photo-img').addClass('production__photo-img--active'),
            $('.production__desc').addClass('production__desc--active'),
            $('.production__rating').addClass('production__rating--active'),
            $('.production__list').addClass('production__list--active')
    });

    $('.filter__grid').on('click', function () {
        $('.production__content').removeClass('production__content--active'),
            $('.production__photo').removeClass('production__photo--active'),
            $('.filter__line').removeClass('filter__line--active'),
            $('.filter__col').addClass('filter__col--active'),
            $('.production__photo-img').removeClass('production__photo-img--active'),
            $('.production__desc').removeClass('production__desc--active'),
            $('.production__rating').removeClass('production__rating--active'),
            $('.production__list').removeClass('production__list--active')
    });

    $('.categories__title').on('click', function () {
        $('.categories__list').slideToggle()
    });

    $('.sort__title').on('click', function () {
        $('.sort__list').slideToggle()
    });

    $('.price__title').on('click', function () {
        $('.price__list').slideToggle()
    });

    $('.home').on('click', function () {
        $('.home').toggleClass('home--active');
    });

    $('.products-menu').on('click', function () {
        $('.products-menu').toggleClass('products-menu--active');
    });

    $('.wordpress').on('click', function () {
        $('.wordpress').toggleClass('wordpress--active');
    });

    $('.pages').on('click', function () {
        $('.pages').toggleClass('pages--active');
    });

    // $(window).resize(function () {
    //     if($(window).width() <= 1200){
    //         $('.production__content').addClass('production__content--media');
    //     };
    //     if($(window).width() >= 1200){
    //         $('.production__content').removeClass('production__content--media');
    //     };
    // });

    var mixer = mixitup('.product__inner-items');
});