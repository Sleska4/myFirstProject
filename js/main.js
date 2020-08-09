$(document).ready(function () {
    let menuBtn = $('.menu-btn');
    menuBtn.on('click',function (e) {
        e.preventDefault();
        $(this).toggleClass('menu-btn-active')
    });

    let hide = $('.hide');
    menuBtn.click(function () {
        hide.toggleClass('menuActive');
        hide.toggleClass('menuNone');
    });

});
