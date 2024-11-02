$(function () {
    var mymap = L.map('mapid').setView([32.4279, 53.6880], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(mymap);

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("محل انتخاب شده: " + e.latlng.toString())
            .openOn(mymap);
    }

    mymap.on('click', onMapClick);

    let head = $(".acc .head")
    head.append("<i class='fas fa-angle-down'></i>")
    head.click(function () {
        $('.acc .head i').removeClass('fa-angle-up').addClass("fa-angle-down")
        if ($(this).next().is(":hidden")) {
            $(this).children("i").removeClass("fa-angle-down").addClass("fa-angle-up")
        } else {
            $(this).children("i").removeClass("fa-angle-up").addClass("fa-angle-down")
        }
        $(this).next().slideToggle(300).parent().siblings().children(".body").slideUp(300)
    })

})