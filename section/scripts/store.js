$(function () {
    // this code for price range filter------------------------------------------------------------------------------------

    const rangeInput = document.querySelectorAll(".range-input input"),
        priceInput = document.querySelectorAll(".price-input h6"), range = document.querySelector(".slider .progress");
    let priceGap = 110;

    priceInput.forEach(input => {
        input.addEventListener("input", e => {
            let minPrice = parseInt(priceInput[0].value), maxPrice = parseInt(priceInput[1].value);

            if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
                if (e.target.className === "input-min") {
                    rangeInput[0].value = minPrice;
                    range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                } else {
                    rangeInput[1].value = maxPrice;
                    range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                }
            }
        });
    });

    rangeInput.forEach(input => {
        input.addEventListener("input", e => {
            let minVal = parseInt(rangeInput[0].value), maxVal = parseInt(rangeInput[1].value);

            if ((maxVal - minVal) < priceGap) {
                if (e.target.className === "range-min") {
                    rangeInput[0].value = maxVal - priceGap
                } else {
                    rangeInput[1].value = minVal + priceGap;
                }
            } else {
                priceInput[0].innerText = minVal + " " + "تومان";
                priceInput[1].innerText = maxVal + " " + "تومان";
                range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
        });
    });

    // this code for products -----------------------------------------------------------------------------------------------

    function calculateNumberOfPages(productCount, dividedBy = 6) {
        return Math.ceil(productCount / dividedBy);
    }

    function loading(delay1, delay2) {
        $(".loading").fadeIn(delay1, function () {
            $(this).fadeOut(delay2)
        })
    }

    let products = [{
        discount: "10%",
        img_src: "../images/products/product-1.png",
        title: "دستگاه قهوه ترک ساز آرچلیک مدل TKM 3940",
        price_discount: "180,000",
        price: "150,000"
    }, {
        discount: "30%",
        img_src: "../images/products/product-2.png",
        title: "ماگ در دار سیلیکونی با بدنه ی سرامیکی طرح استارباکس",
        price_discount: "190,000",
        price: "110,000"
    }, {
        discount: "15%",
        img_src: "../images/products/product-3.png",
        title: "چای ساز برقی استیل بیشل مدل BLTM009 – bishel‏",
        price_discount: "250,000",
        price: "180,000"
    }, {
        discount: "13%",
        img_src: "../images/products/product-4.png",
        title: "قهوه ساز برقی سینبو مدل SCM 2928 با بدنه سرامیکی",
        price_discount: "175,000",
        price: "163,000"
    }, {
        discount: "19%",
        img_src: "../images/products/product-5.png",
        title: "دانه قهوه ترکیبی FALL Blend اصل کلمبیا مقدار 250 گرم",
        price_discount: "180,000",
        price: "128,000"
    }, {
        discount: "18%",
        img_src: "../images/products/product-6.png",
        title: "پودر قهوه ترک ویژه عربیکا ۷۰ درصد مقدار ۲۵۰ گرم",
        price_discount: "180,000",
        price: "136,000"
    }, {
        discount: "1%",
        img_src: "../images/products/product-7.png",
        title: "بسته 60 عددی شکلات تلخ قهوه ویولتا فرمند ۵۵ گرمی",
        price_discount: "150,000",
        price: "145,000"
    }, {
        discount: "19%",
        img_src: "../images/products/product-5.png",
        title: "دانه قهوه ترکیبی FALL Blend اصل کلمبیا مقدار 250 گرم",
        price_discount: "180,000",
        price: "128,000"
    }, {
        discount: "18%",
        img_src: "../images/products/product-6.png",
        title: "پودر قهوه ترک ویژه عربیکا ۷۰ درصد مقدار ۲۵۰ گرم",
        price_discount: "180,000",
        price: "136,000"
    }, {
        discount: "1%",
        img_src: "../images/products/product-7.png",
        title: "بسته 60 عددی شکلات تلخ قهوه ویولتا فرمند ۵۵ گرمی",
        price_discount: "150,000",
        price: "145,000"
    }, {
        discount: "19%",
        img_src: "../images/products/product-5.png",
        title: "دانه قهوه ترکیبی FALL Blend اصل کلمبیا مقدار 250 گرم",
        price_discount: "180,000",
        price: "128,000"
    }, {
        discount: "18%",
        img_src: "../images/products/product-6.png",
        title: "پودر قهوه ترک ویژه عربیکا ۷۰ درصد مقدار ۲۵۰ گرم",
        price_discount: "180,000",
        price: "136,000"
    }, {
        discount: "1%",
        img_src: "../images/products/product-7.png",
        title: "بسته 60 عددی شکلات تلخ قهوه ویولتا فرمند ۵۵ گرمی",
        price_discount: "150,000",
        price: "145,000"
    }, {
        discount: "19%",
        img_src: "../images/products/product-5.png",
        title: "دانه قهوه ترکیبی FALL Blend اصل کلمبیا مقدار 250 گرم",
        price_discount: "180,000",
        price: "128,000"
    }, {
        discount: "18%",
        img_src: "../images/products/product-6.png",
        title: "پودر قهوه ترک ویژه عربیکا ۷۰ درصد مقدار ۲۵۰ گرم",
        price_discount: "180,000",
        price: "136,000"
    }, {
        discount: "1%",
        img_src: "../images/products/product-7.png",
        title: "بسته 60 عددی شکلات تلخ قهوه ویولتا فرمند ۵۵ گرمی",
        price_discount: "150,000",
        price: "145,000"
    }, {
        discount: "12%",
        img_src: "../images/products/product-8.png",
        title: "دانه قهوه ترکیبی 250 گرم HOUSE Blend 100% Arabica",
        price_discount: "200,000",
        price: "140,000"
    }]
    let pr_container = $(".product-container")
    let pages = []
    for (let i = 0; i < calculateNumberOfPages(products.length); i++) {
        pr_container.append(`<div class="page-${i + 1}"></div>`)
        pages[i] = null
    }
    let counter = 0
    for (let i = 0; i < products.length; i += 6) {
        pages[counter] = products.slice(i, i + 6)
        counter++
    }
    let pg_container = null
    let discount = null
    let img_src = null
    let title = null
    let price_discount = null
    let price = null
    for (let x = 0; x < pages.length; x++) {
        pg_container = $(`.product-container .page-${x + 1}`)
        for (let i = 0; i < pages[x].length; i++) {
            discount = pages[x][i].discount
            img_src = pages[x][i].img_src
            title = pages[x][i].title
            price_discount = pages[x][i].price_discount
            price = pages[x][i].price
            let productTemplate = `<div class="product bg-3 border-radius-24px text-center padding-16px h-100 d-flex flex-column gap-10px position-relative" style="gap: 10px; padding: 16px; border-radius: 24px;"><a href="#"><img class="card-img-top height-185px object-fit-contain" src="${img_src}" alt="" style="height: 185px;"></a><a class="title font-weight-300 lh-base text-decoration-none text-dark font-size-16px" href="#" style="font-size: 16px; font-weight: 300;">${title}</a>
            <div class="h-100 row">
              <div class="col-6 d-flex flex-column align-items-start justify-content-end"><span class="discount font-size-12px position-relative" style="font-size: 12px;">${price_discount}</span><span class="price">
                   ${price}
                  <span class="font-size-12px" style="font-size: 12px;">تومان</span></span></div>
              <div class="col-6 d-flex align-items-end justify-content-end p-0 pe-2">
                <button class="add-basket border-0 bg-1 rounded-6 width-91 height-35 d-flex align-items-center justify-content-center gap-1" type="button" style="width: 91px; height: 35px;"><span class="font-size-13px mt-1 font-weight-300" style="font-size: 13px; font-weight: 300;">افزودن به</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M8.80994 2L5.18994 5.63" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M15.1899 2L18.8099 5.63" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M2 7.84998C2 5.99998 2.99 5.84998 4.22 5.84998H19.78C21.01 5.84998 22 5.99998 22 7.84998C22 9.99998 21.01 9.84998 19.78 9.84998H4.22C2.99 9.84998 2 9.99998 2 7.84998Z" stroke="white" stroke-width="1.5"></path>
                    <path d="M9.75977 14V17.55" stroke="white" stroke-width="1.5" stroke-linecap="round"></path>
                    <path d="M14.3599 14V17.55" stroke="white" stroke-width="1.5" stroke-linecap="round"></path>
                    <path d="M4.91016 18.64C5.23016 20.58 6.00016 22 8.86016 22H14.8902C18.0002 22 18.4602 20.64 18.8202 18.76L20.5002 10" stroke="white" stroke-width="1.5" stroke-linecap="round"></path>
                    <path d="M3.5 10L4.22 14.38" stroke="white" stroke-width="1.5" stroke-linecap="round"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="ds-box bg-white d-flex align-items-center justify-content-center width-43 height-33 rounded-3 position-absolute" style="width: 43px; height: 33px;"><span class="d-inline-block mt-1 green">${discount}</span></div>
          </div>`;
            pg_container.append(productTemplate)
        }
    }
    $(".page-1").addClass("page-active")
    let countOfChile = $(".product-container div[class*='page']").length
    let statusOfPage = $(".product-container div.page-active").index() + 1
    if (statusOfPage === 1) {
        $("footer ul.pagination li.page-item:first-child").addClass("disabled")
    }
    if (statusOfPage === countOfChile) {
        $("footer ul.pagination li.page-item:last-child").addClass("disabled")
    }
    for (let i = countOfChile - 1; i >= 0; i--) {
        let pagination = $(`<li class="page-item"><a class="page-link text-black" href="#">${i + 1}</a></li>`);
        $("footer ul.pagination li.page-item:first-child").after(pagination);
    }
    $("footer ul.pagination li.page-item").eq(statusOfPage).children("a.page-link").addClass("active")

    $(".product-container div[class*='page']").hide().filter(".page-active").show()

    $(".go-next").click(function () {
        let statusOfPage = $(".product-container div.page-active").index() + 1
        $(`.product-container .page-${statusOfPage}`).fadeOut(300).removeClass("page-active").next().fadeIn(300).addClass("page-active").siblings().fadeOut(300).removeClass("page-active")
    })

    $(".go-prev").click(function () {
        let statusOfPage = $(".product-container div.page-active").index() + 1
        $(`.product-container .page-${statusOfPage}`).fadeOut(300).removeClass("page-active").prev().fadeIn(300).addClass("page-active").siblings().fadeOut(300).removeClass("page-active")
    })

    $("footer ul.pagination li.page-item a").click(function () {
        $("footer ul.pagination li.page-item").removeClass("disabled")
        $("html, body").animate({scrollTop: 0}, "slow");
        loading(0, 4000);
        let aIndex = $(this).parent().index()
        $(`.product-container div.page-${aIndex}`).fadeIn(300).addClass("page-active").siblings().fadeOut(300).removeClass("page-active")
        let countOfChile = $(".product-container div[class*='page']").length

        let statusOfPage = $(".product-container div.page-active").index() + 1
        if (statusOfPage === 1) {
            $("footer ul.pagination li.page-item:first-child").addClass("disabled").siblings().removeClass("disabled")
        }
        if (statusOfPage === countOfChile) {
            $("footer ul.pagination li.page-item:last-child").addClass("disabled").siblings().removeClass("disabled")
        }
        $("footer ul.pagination li.page-item").eq(statusOfPage).children("a.page-link").addClass("active").parent().siblings().children("a").removeClass("active")
        return false
    })
})