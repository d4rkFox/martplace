$(function () {
    $('.slider-products__wrapper').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    })

    $(".slider-products__star").rateYo({
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

    $('.followers__wrapper').slick({
        prevArrow: '<button type="button" class="slick-btn slick-btn__bg slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-btn__bg slick-next"></button>',
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
    });

    var mixer = mixitup('.product__inner-items');

    $('.product__dropdown-btn').on('click', function () {
        $('.product__dropdown-list').slideToggle({
            duration: 200,
            easing: "linear",
        });
    });


});

