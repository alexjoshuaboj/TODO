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

var textoArea = $('#texto-area');

console.log(textoArea.text());


// declaracion del ARRAY guarda los datos

const JSON_ReD = new Array(
    {
        cat_ReD: 'Important',
        tit_ReD: 'Estudiar',
        txt_ReD: 'Estudiar los diferentes tipos de bucles de JAVASCRIPT',
        data_Imp: 1,
    },
    {
        cat_ReD: 'Daily',
        tit_ReD: 'Comer',
        txt_ReD: 'Preparar la comida para todo el dia',
        data_Imp: 2,
    },
    {
        cat_ReD: 'Weekly',
        tit_ReD: 'Limpiar',
        txt_ReD: 'Tienes que limpiar puto cerdo',
        data_Imp: 3,
    },
)

//3 categorias obligatorias 