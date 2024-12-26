console.log('First Ajax workshop - download data after click button')

//Adres URL do API na serwerze: https://akademia108.pl/api/ajax/get-post.php
// Dwie wersje: GET, oraz GETJESON

// pId
// pUserId
// pTitle
// pBody
// hr

$(document).ready(function () {


    $('#get-data').click(function () {

        // Wariant 1 // metoda GET protokołu HTTP, można pobierać dane w formacie JSON i innych typach danych 
        // $.get('https://akademia108.pl/api/ajax/get-post.php')
        //     .done(function (data) {
        //         console.log(data);

        //         let pId = $('<p></p>').text(`Post ID: ${data.id}`);
        //         let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
        //         let pTitle = $('<p></p>').text(`Title: ${data.title}`);
        //         let pBody = $('<p></p>').text(`Body: ${data.body}`);
        //         let hr = $('<hr>');

        //         let jqBody =$('body');

        //         jqBody.append(pId);
        //         jqBody.append(pUserId);
        //         jqBody.append(pTitle);
        //         jqBody.append(pBody);
        //         jqBody.append(hr);
        //     })

        //     .fail(function (error) {
        //         console.error(error);
        //     })

        
        // Wariant 2 // można pobierać tylko dane w formacie JSON
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {
                console.log(data);

                let pId = $('<p></p>').text(`Post ID: ${data.id}`);
                let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
                let pTitle = $('<p></p>').text(`Title: ${data.title}`);
                let pBody = $('<p></p>').text(`Body: ${data.body}`);
                let hr = $('<hr>');

                let jqBody = $('body');

                jqBody.append(pId);
                jqBody.append(pUserId);
                jqBody.append(pTitle);
                jqBody.append(pBody);
                jqBody.append(hr);
            })

            .fail(function (error) {
                console.error(error);
            })

    })



});

