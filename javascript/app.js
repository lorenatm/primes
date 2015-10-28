$(document).scroll(function () {
    var scroll = $(this).scrollTop();

    if (scroll >= 600) {
        
    	$("header").css("background-color", "#0DC0C0");
    } else {
       $("header").css("background-color", "transparent");
    }
});