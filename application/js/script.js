// ПРОВЕРКА СКРОЛЛА
function checkOffset() {
    if (pageYOffset > 0) {
        $('.up').fadeIn(125);
    } else {
        $('.up').fadeOut(125);
    }
}

$(document).ready(function () {

    // НАВЕРХ
    $('.up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    });

    // ВЫЗОВ ФУНКЦИИ ПРИ СКРОЛЛЕ
    $(window).scroll(function () {
        checkOffset();
    });

    // СКРОЛЛ К МАЯКУ
    $('nav').find('a').on('click', function () {
        var destination = $(this).attr('name');
        $('html, body').animate({
            scrollTop: $('.' + destination).offset().top
        }, 500)
    });

    // ОТПРАВКА ПИСЕМ
    $('.catalogue-form').on('submit', function (event) {
        event.preventDefault();
        $('.catalogue-send').val('Отправка...');
        var email = $('.email').val();
        var name = $('.name').val();
        var phone = $('.phone').val();
        $.ajax({
            method: 'POST',
            url: 'php/script.php',
            data: {email: email, name: name, phone: phone}
        }).done(function (result) {
            $('.catalogue-send').val(result);
        }).fail(function () {
            $('.catalogue-send').val('Ошибка!');
        });
    });

});
