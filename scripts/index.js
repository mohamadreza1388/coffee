$(function () {

    // function log($value) {
    //     console.log($value)
    // }

    $("body").removeClass("d-none")

    $(".translate-effect").hover(function () {
        $(this)
            .animate({"left": "8px"}, 150)
            .animate({"left": "-8px"}, 150)
            .animate({"left": "4px"}, 150)
            .animate({"left": "-4px"}, 150)
            .animate({"left": "0"}, 150)
    }, function () {
        $(this).stop(true).css("left", "0")
    })

    $(".translate-effect2").hover(function () {
        $(this)
            .animate({"top": "8px", "left": "5px"}, 150)
            .animate({"top": "-8px", "left": "-5px"}, 150)
            .animate({"top": "4px", "left": "3px"}, 150)
            .animate({"top": "-4px", "left": "-3px"}, 150)
            .animate({"top": "0", "left": "0"}, 150)
    }, function () {
        $(this).stop(true).css("top", "0")
    })

    $("main .img").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
        let imgSrc = $(this).children("img").attr("src")
        $(this).closest(".right").siblings(".left").children("img").fadeOut(200, function () {
            $(this).attr("src", imgSrc).fadeIn(200)
        })
    })

    let date = new Date()
    let seconds = date.getSeconds()
    let minutes = date.getMinutes()
    let hour = date.getHours()
    setInterval(function () {
        let out_seconds = seconds--
        if (seconds === 0) {
            seconds = 60;
            minutes--
        }
        if (minutes === 0) {
            minutes = 60;
            hour--
        }
        let out_minutes = minutes
        let out_hour = hour + 1
        $("#second .number").text(out_seconds)
        $("#minutes .number").text(out_minutes)
        $("#hour .number").text(out_hour)
    }, 1000)

    $('#special-sale .owl-carousel').owlCarousel({
        rtl: true, nav: false, dots: false, item: 1, loop: true, responsive: {
            0: {
                items: 1
            }, 768: {
                items: 2
            }, 992: {
                items: 3
            }
        }
    })

    $('#latest-articles .carousel').slick({
        rtl: true, slidesToShow: 4, slidesToScroll: 1, responsive: [{
            breakpoint: 992, settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 768, settings: {
                slidesToShow: 1
            }
        }]
    })

    $(".bars-btn").click(function () {
        $(".overlay").css("right", "0")
        $(".right-menu").css("right", "0")
    })

    $(".close-btn").click(function () {
        $(".overlay").css("right", "-100%")
        $(".right-menu").css("right", "-100%")
        return false
    })

    $(".overlay").click(function () {
        $(".overlay").css("right", "-100%")
        $(".right-menu").css("right", "-100%")
    })

    $(".right-menu .search-form").click(function () {
        $(".overlay").css("right", "0")
        $(".right-menu").css("right", "0")
        return false
    })

    // $(".right-menu .menu-list a").click(function () {
    //     location.href = $(this).attr("href")
    // })

    $(".inp-box i").click(function () {
        if ($(this).next().attr("type") === "password") {
            $(this).next().attr("type", "text")
            $(this).removeClass("fa-eye").addClass("fa-eye-slash")
        } else if ($(this).next().attr("type") === "text") {
            $(this).next().attr("type", "password")
            $(this).addClass("fa-eye").removeClass("fa-eye-slash")
        }
    })

    $(".login .email").on("input", function () {
        let inpEmailVal = $(this).val()
        let suffix = inpEmailVal.trim().endsWith("@gmail.com")
        if (suffix === true) {
            $(this).attr("type", "email")
        } else {
            $(this).attr("type", "text")
        }
    })

})