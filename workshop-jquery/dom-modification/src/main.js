$(document).ready(function () {

    // Tworzenie elementów
    var newMigrateUpBtn = $('<button>')
        .text('Migrate element Up')
        .attr('id', 'migrate-up')

    var newMigrateDownBtn = $('<button>')
    .text('Migrate element Down')
    .attr('id', 'migrate-down')

// Funkcje

    const paragraphCreator = (count) => {
        for (let i = 0; i < count; i++) {
            let paragraph = $('<p>')
                .text(`To jest paragraf ${i + 1}`)
                .attr('id', `paragraph-${i + 1}`);
            $('.p-container').append(paragraph);
        }
    };

    const migrateParagraphUp = (e) => {
        const container = $('.p-container');
        const lastParagraph = container.find('p:last');
        container.prepend(lastParagraph);
    }

    const migrateParagraphDown = (e) => {
        const container = $('.p-container');
        const firstParagraph = container.find('p:first');
        container.append(firstParagraph);
    }

    // Podpinanie elementów
    $('.button-container').append(newMigrateUpBtn);
    $('.button-container').append(newMigrateDownBtn);
    paragraphCreator(5);
    $('#migrate-up').on('click', migrateParagraphUp);
    $('#migrate-down').on('click', migrateParagraphDown);
    $('section#bg').css('background-image', 'url("src/gta-692.jpg")');


})