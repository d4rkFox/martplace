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
            $('.filter__line').addClass('filter__line--active'),
            $('.filter__col').removeClass('filter__col--active'),
            $('.production__text').removeClass('production__text--active'),
            $('.production__desc .production__plugin').removeClass('production__plugin--active'),
            $('.production__like').removeClass('production__like--active'),
            $('.production__comments').removeClass('production__comments--active'),
            $('.production__price-list .production__basket').removeClass('production__basket--active'),
            $('.production__star-inner .production__basket').addClass('production__basket--active'),
            $('.production__price-list .production__plugin').addClass('production__plugin--active'),
            $('.production__link').addClass('production__link--active'),
            $('.production__rate').addClass('production__rate--active'),
            $('.production__edit').removeClass('production__edit--active'),
            $('.production__desc').addClass('production__desc--active'),
            $('.production__price-list').addClass('production__price-list--active'),
            $('.production__title').addClass('production__title--active'),
            $('.production__photo-img').addClass('production__photo-img--active'),
            $('.production__list').addClass('production__list--active')
    });

    $('.filter__grid').on('click', function () {
        $('.production__content').removeClass('production__content--active'),
            $('.production__photo').removeClass('production__photo--active'),
            $('.filter__line').removeClass('filter__line--active'),
            $('.filter__col').addClass('filter__col--active'),
            $('.production__text').addClass('production__text--active'),
            $('.production__desc .production__plugin').addClass('production__plugin--active'),
            $('.production__like').addClass('production__like--active'),
            $('.production__comments').addClass('production__comments--active'),
            $('.production__price-list .production__basket').addClass('production__basket--active'),
            $('.production__star-inner .production__basket').removeClass('production__basket--active'),
            $('.production__price-list .production__plugin').removeClass('production__plugin--active'),
            $('.production__link').removeClass('production__link--active'),
            $('.production__rate').removeClass('production__rate--active'),
            $('.production__edit').addClass('production__edit--active'),
            $('.production__desc').removeClass('production__desc--active'),
            $('.production__price-list').removeClass('production__price-list--active'),
            $('.production__title').removeClass('production__title--active'),
            $('.production__photo-img').addClass('production__photo-img--active'),
            $('.production__list').removeClass('production__list--active')
    });

    $('.aside__categories .categories__title').on('click', function () {
        $('.categories__list').slideToggle()
    });

    $('.sort__title').on('click', function () {
        $('.sort__list').slideToggle()
    });

    $('.price__title').on('click', function () {
        $('.price__list').slideToggle()
    });

    $('.dropdown-home').on('click', function () {
        $('.dropdown-home .dropdown__button').toggleClass('dropdown__button--active');
        $('.dropdown-home').toggleClass('dropdown-home--active');
    });

    $('.dropdown-products').on('click', function () {
        $('.dropdown-products .dropdown__button').toggleClass('dropdown__button--active');
        $('.dropdown-products').toggleClass('dropdown-products--active');
    });

    $('.dropdown-wordpress').on('click', function () {
        $('.dropdown-wordpress .dropdown__button').toggleClass('dropdown__button--active');
        $('.dropdown-wordpress').toggleClass('dropdown-wordpress--active');
    });

    $('.pages').on('click', function () {
        $('.pages__button').toggleClass('pages__button--active');
        $('.pages').toggleClass('pages--active');
    });

    $('.popular .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.popular').find('.tab-item').removeClass('active-tab').hide();
        $('.popular .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('input[type="checkbox"]').styler();

    $('.login__check').on('click', function () {
        $('.jq-checkbox ').toggleClass('checked');
        $('.jq-checkbox ').addClass('focused');
        
    });

    var mixer = mixitup('.product__inner-items');
});