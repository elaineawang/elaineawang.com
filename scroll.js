$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $("body").addClass("color");
    } else {
        $("body").removeClass("color");
    }
});