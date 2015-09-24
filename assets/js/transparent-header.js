$(document).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $("#nav-wrap").removeClass("topHeader").addClass("nav-wrap");
    } else {
        $("#nav-wrap").removeClass("nav-wrap").addClass("topHeader");
    }
});