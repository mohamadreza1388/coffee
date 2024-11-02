$(function () {
    $('.comment-wrapper').slick({
        rtl: true, slidesToShow: 3, slidesToScroll: 1, responsive: [{
            breakpoint: 992, settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 768, settings: {
                slidesToShow: 1
            }
        }]
    })
})