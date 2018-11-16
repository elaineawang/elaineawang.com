$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 150) {
        $("body").addClass("color");
    } else {
        $("body").removeClass("color");
    }
});