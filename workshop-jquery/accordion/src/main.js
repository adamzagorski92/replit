$(document).ready(function () {

    $('.accordion-item').click(function () {
        console.log($(this).hasClass('open'))

        if ($(this).hasClass('open')) {
            $(this).removeClass('open')
            $(this).find('.paragraph').slideUp();
        } else {
            $(this).addClass('open')
            $(this).find('.paragraph').slideDown();
        };

    });

})