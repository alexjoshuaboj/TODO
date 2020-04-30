var faq = $('.faq h2');

faq.on('click', function () {
    //more easy
    /* $(this).next().slideToggle(400); */

    //relative easy
    $('.faq p').slideUp(400);
    $('.faq h2').removeClass('titulo');
    /* $('.faq h2').css('background-color', 'tomato') */

    let contenido = $(this).next();

    if (contenido.css('display') === 'none') {
        contenido.slideDown(400);
        /* $(this).css('background-color', 'lightgrey') */
        $(this).addClass('titulo');
    } else {
        contenido.slideUp(400);
    }
})