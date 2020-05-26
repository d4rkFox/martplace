$(function () {
    $('.weekly__wrapper').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
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

    $('.followers__wrapper').slick({
        prevArrow: '<button type="button" class="slick-btn slick-btn__bg slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-btn__bg slick-next"></button>',
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
    });

  

    $('.product__filter-btn').on('click', function () {
        $('.product__dropdown-list')
        .slideToggle({
            duration: 200,
            easing: "linear",
        })
    });

    
    var mixer = mixitup('.product__inner-items');
});

