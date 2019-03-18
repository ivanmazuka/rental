import $ from 'jquery';

// Scroll check
function checkOffset() {
  if (pageYOffset > 0) {
    $('.up').fadeIn(125);
  } else {
    $('.up').fadeOut(125);
  }
}

$(document).ready(function () {

  // Up!
  $('.up').on('click', () => {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });

  // Onscroll
  $(window).scroll(checkOffset);

  // Smooth scroll
  $('nav').find('a').on('click', function () {
    const destination = $(this).attr('name');

    $('html, body').animate({
      scrollTop: $('.' + destination).offset().top
    }, 500);
  });

  // Sending mails
  $('.catalogue-form').on('submit', (event) => {
    event.preventDefault();

    $('.catalogue-send').val('Отправка...');

    const email = $('.email').val();
    const name = $('.name').val();
    const phone = $('.phone').val();

    // Sending an AJAX request
    $.ajax({
      method: 'POST',
      url: 'script.php',
      data: { email: email, name: name, phone: phone }
    }).done((result) => {
      $('.catalogue-send').val(result);
    }).fail(() => {
      $('.catalogue-send').val('Ошибка!');
    });
  });

});
