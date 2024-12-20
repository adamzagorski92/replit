console.log("Newsletter validation data");

let newsletterForm = document.getElementById('newsletter-form');
let allAgreeChx = document.getElementById('all-agree');

const validate = (event) => {
    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let errors = document.getElementById('errors');

    errors.innerHTML =  '';

    // Warunek sprawdza, czy pole jest uzupełnione
    // funckaj trim() ucina białe znaki
    if (txtName.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imię i Nazwisko!';

        errors.appendChild(liError);
    }

    if (txtEmail.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz Adres E-mail!';

        errors.appendChild(liError);
    }

    if (!txtEmail.value.includes('@') ) {
        let liError = document.createElement('li');
        liError.innerText = 'Adres e-mail musi zawierać znak @!';

        errors.appendChild(liError);
    }
    if (!agree1.checked ) {
        let liError = document.createElement('li');
        liError.innerText = 'Nie wyraziłeś zgody - 1';

        errors.appendChild(liError);
    }

    if (errors.children.length>0) {
        event.preventDefault();
        errors.classList.add('errors-box');
    }

}

const allAgree = (event) => {
let agree1 = document.getElementById('agree-1');
let agree2 = document.getElementById('agree-2');

//Napierw trzeba pobrać aktualny stan checkboxa (zaznaczony czy nie?)
agree1.checked = event.target.checked;
agree2.checked = event.target.checked;

// Następnie wyłączyć mozliwość zmiany agree-1 i agree-2 gdy są zaznaczone
agree1.disabled = event.target.checked;
agree2.disabled = event.target.checked;

}

newsletterForm.addEventListener('submit', validate);
allAgreeChx.addEventListener('change', allAgree);
