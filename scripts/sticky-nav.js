// Make navigation sticky
$(document).ready(function() {
    $('nav').css({
        'position': 'fixed',
        'top': '0',
        'left': '0',
        'right': '0',
        'z-index': '1000'
    });
    
    //Got help from my brother to fix the issue (THe issue was that the nav bar would cover up fixed elements below it)
    var navbarHeight = $('nav').outerHeight();
    $('body').css('padding-top', navbarHeight);
});
