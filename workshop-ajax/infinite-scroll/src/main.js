console.log('Infinite Scroll -Workshop')

let endOfThePage = 0;

let preloading = false; // zabezpieczenie przed podwójnym pobranym danych

// pokazuje preloader
const showPreloader = () => {
    let preloader = document.getElementById('preloader');
    console.log('showPreloader()');
    preloader.style.display = 'block';
    preloading = true;
};

//ukrywa preloader
const hidePreloader = () => {
    let preloader = document.getElementById('preloader');
    console.log('hidePreloader()');
    preloader.style.display = 'none';
    preloading = false;
};

// funckja pobierania danych
const getData = () => {

    if (!preloading) {

        showPreloader();
        fetch('https://akademia108.pl/api/ajax/get-users.php')
            .then(res => res.json())
            .then(data => {

                let body = document.body;
                let hr = document.createElement('hr');
                body.appendChild(hr);

                for (let user of data) {
                    let pId = document.createElement('p');
                    let pName = document.createElement('p');
                    let pWebsite = document.createElement('p');

                    pId.innerText = `User ID: ${user.id}`;
                    pName.innerText = `User ID: ${user.name}`;
                    pWebsite.innerHTML = `User ID: ${user.website} <br />-------`;

                    body.appendChild(pId);
                    body.appendChild(pName);
                    body.appendChild(pWebsite);

                    hidePreloader();
                }
            })
            .catch(error => {
                console.error(error);
            })
    }
}


// funckja inicjująca
const scrollToEndOfPage = () => {

    let d = document.documentElement; // pobranie dokumentu

    // heigh of an element's content, including content enot visible on the screen
    let scrollHeight = d.scrollHeight; // pobranie długości scrolla

    // number of pixels that an element's content is scrolled vertically
    let scrollTop = d.scrollTop; // pobranie długości przewiniętego scrolla

    // inner heigh of an element in pixels
    let clientHeight = d.clientHeight; // pobranie wysokości okna przeglądarki

    console.log(`Scroll Height: ${scrollHeight}`);
    console.log(`Scroll Top: ${scrollTop}`);
    console.log(`Client Height: ${clientHeight}`);
    console.log('===============');

    // sum of pixels. This variable need to conditional
    let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);

    console.log(`Sum scroll: ${sumScrollTopClientHeight}`)

    if (sumScrollTopClientHeight >= scrollHeight) {

        endOfThePage += 1;

        console.log(`Scrolled to the ened of page: ${endOfThePage}`)
        getData();
    }


}

// Podpięcie funkcji do funkcji, która sprawdza czy jestem już na końcu ekeranu
window.addEventListener('scroll', scrollToEndOfPage);