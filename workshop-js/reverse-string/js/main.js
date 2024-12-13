// Pobrać tekst z h1 za pomocą metody querySelector

var mainTitle = document.querySelector("h1").textContent;

// Pobrać tekst z paragrafu o id "first-paragraph"
var firstParagraph = document.getElementById("first-paragraph").textContent;

// Funkcja przekształcająca tekst:
// 1. split('') - zapisz poszczególne literki jako kolejne elementy tablicy
// 2. reverse() - odwróć tablicę
// 3. join('') - łącz elementy tablicy
function reverseText(text) {
    return text.split('').reverse().join('');
}

// Użyj funkcji reverseText()  w tytule H1
var reversedTitle = reverseText(mainTitle);

// Użyj funkcji reverseText() w paragrafie pierwszym
var reversedParagraph = reverseText(firstParagraph);

// Stworzyć nowy paragraf 
var newParagraph = document.createElement('p');

// Przypisać odwróconą wartość do nowego paragrafu
newParagraph.textContent=reversedParagraph;

// umieścić paragraf w sekcji body
document.body.appendChild(newParagraph);


// Podmień tytuł h1 w HTML
document.querySelector("h1").textContent= reversedTitle;

// Wyświetl w konsoli odwrócony tekst
console.log(reversedTitle);