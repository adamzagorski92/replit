console.log('First Ajax workshop - download data')

// Czysty JavaScript oraz fetch()

// adres URL do API na serwerze: https://akademia108.pl/api/ajax/get-post.php

// Stworzenie przycisku do pobierania danych z API
let btnGetData = document.getElementById('get-data');

// console.log(btnGetData);

// funkcja pobierająca dane z API
const getData = () => {
    // funkcja fetch()
    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(res => res.json())
        .then(data => {

            // deklaracja zmiennych, które reprezentują nowo stworzone elementy na stronie, które posłużą do wpisania danych pobranych z API
            let pId = document.createElement('p');
            let pUserId = document.createElement('p');
            let pTitle = document.createElement('p');
            let pBody = document.createElement('p');
            let hr = document.createElement('hr');

            // console.log(data)

            // Wpisywanie tekstu w wyżej zadeklarowane elementy strony
            pId.innerText = `Post ID: ${data.id}`;
            pUserId.innerText = `User ID: ${data.userId}`;
            pTitle.innerText = `Title: ${data.title}`;
            pBody.innerText = `Post ID: ${data.body}`;

            // dopinanie elementów do strony
            document.body.appendChild(pId);
            document.body.appendChild(pUserId);
            document.body.appendChild(pTitle);
            document.body.appendChild(pBody);
            document.body.appendChild(hr);
        })

        // obsługa błędów
        .catch(error => {
            console.error(error);
        })


    // console.log('get data()');
}

// podłączenie funkcji pod przycisk

btnGetData.addEventListener('click', getData);


// PODSUMOWANIE:
// Ogólnie procedura rozwiązywania takich zadań sprowadza się do kilku kroków
// 1. Stwórz wszystkie niezbędne elementy struktury HTML, aby można bylo w nich wyświetlić dane,
// 2. Stwórz funkcję, która pobiera dane z API,
// 3. Przypnij pobrane dane do stworzonych elementów struktury strony,
// 4. Przypnij stworzone elementy do odpowiedniego miejsca w strukturze HTML,
// 5. Obsłuż ewentualne błędy, wynikające z błedów na drodze pobierania danych,
// 6. Zastanów się nad eventem, który inicjuje funkcję i podbnij ją pod to działanie użytkownika
// PS: wybieraj intuicyjne/naturalne sposoby aktywacji funkcji, aby użytkownik wiedział co robić!
