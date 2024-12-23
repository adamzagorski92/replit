$(document).ready(function () {

    // Definicje nowych elementów HTML
    var newButton = $('<button>')
        .text('Transformation')
        .attr('id', 'new-button')
        .addClass('custom-button');

    var newSquere = $('<div>')
        .addClass('new-squere');

    // Funkcje

    var squereTransform = function () {
        $('.new-squere').animate({
            marginLeft: '100px',
            height: '100px',
            width: '100px'
        }, 3000, function () {
            $(this).css('background-color', 'blue');
            $(this).append('<p>Animacja Zakończona</p>');
            $(this).find('p').css({ opacity: 0 }).animate({
                opacity: 1
            }, 3000);
        });
    };



    // Podpięcie do HTML
    $('body').append(newButton);
    $('body').append(newSquere);

    //Podpięcie funkcji do elementów
    $('#new-button').on('click', squereTransform);


});