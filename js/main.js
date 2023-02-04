$(function () {
    $('#img').draggable()


    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('nav').addClass('fixed')
        } else {
            $('nav').removeClass('fixed')
            
        }
    })
})