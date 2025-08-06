$(".nav").hover(function () {
    // over
    $(this).find(".subMenu").stop().slideDown()

}, function () {
    // out
    $(".subMenu").stop().slideUp()
}
);