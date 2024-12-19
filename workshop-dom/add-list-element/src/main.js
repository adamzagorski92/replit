// Lista elementów
var genList = ['item 1', 'item 2', 'item 3'];

// Pobierz element HTML z klasą 'container'
let container = document.querySelector('.container');
// stwórz 'ul'
let ulSign = document.createElement('ul');
// dopisz do elementu 'ul' klasę items
ulSign.classList.add('items');

// TWORZENIE PRZYCISKU
let newButton = document.createElement('button');
newButton.textContent = 'Add item';

// funkcja zwraca długość tablicy
let arrLength = arr => {
    let arrLength = arr.length;
    return arrLength;
}

// funkcja dodaje element li do ul oraz aktualizuje tablicę o nowo dodany element 
var addItem = () => {
    // Oblicz nowy numer elementu
    let newItem = `item ${arrLength(genList) + 1}`;
    // Dodaj nowy element do tablicy
    genList.push(newItem);
    //stwórz element li
    const li = document.createElement('li');
    // dodaj mu nazwę korzystając z długości tablicy
    li.textContent = `item ${arrLength(genList)}`;
    // dodaj element li na końcu listy
    ulSign.appendChild(li);
    // dodaj klasę item do elementu
    li.classList.add("item");

}

// ta funkcja generuje elementy li z klasą .item, dodaje je do HTML i będzie używana dla tablic
genList.forEach(item =>{
    const li = document.createElement('li');
    li.textContent=item;
    ulSign.appendChild(li);
    li.classList.add("item");
})

// Dodaje listę ul do HTML w sekcji div.container
container.appendChild(ulSign);
// Dodaje przycisk do HTML w sekcji div.container
container.appendChild(newButton);
// dodaje obsługę kliknięcia do przycisku za pomocą wyżej zdefiniowanej funkcji
newButton.addEventListener('click', addItem);


