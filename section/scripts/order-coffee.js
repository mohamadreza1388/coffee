$(function () {
    $(".item").click(function () {
        if ($(this).is(".active-item")) {
            $(this).removeClass("active-item")
        } else $(this).addClass("active-item").siblings().removeClass("active-item")

    })
    let rangeInputCount = $(".range-input-box input").length
    $(".range-input-box input").change(function () {
        let value = []
        let total = null
        for (let i = 0; i < rangeInputCount; i++) {
            value[i] = $(".range-input-box input").eq(i).val()
        }
        for (let x = 0; x < value.length; x++) {
            total = total + parseInt(value[x]);
        }
        if (total === 100){
            $(".error1").hide()
        }else $(".error1").show(0,function (){
            $(this).css("display","flex")
        })
    })


})