$(function(){
$('.slider-products__wrapper').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
})

var mixer = mixitup('.product__inner-items');

$('.product__filter').on('click', function(){
    $('.product__dropdown-list').slideToggle({
        duration: 200,
        easing: "linear", 
    });
});
});

