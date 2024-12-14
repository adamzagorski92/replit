class Book {
    constructor(title,author,hasBeenRead) {
        this.title = title;
        this.author = author;
        this.hasBeenRead=hasBeenRead;
    };
   
    bookDescriber() {
        console.log(`The title of the book is: ${this.title}, the author is: ${this.author}, and the book has been read: ${this.hasBeenRead}`)
    }
}


// BOOKCASE
let wiedzmin = new Book("Wiedźmin","Andrzej Sapkowski",false);

let harry = new Book("Harry Potter i Kamień Filozoficzny", "J.K. Rowling", false);
let doom = new Book("Masters of Doom", "David Kushner", true);
let elon = new Book("Elon Musk", "Walter Isaacson", false);

var bookcase = [wiedzmin, harry, doom, elon];


 let hasBeenReadCount= arr => {
    let count=0;
    arr.forEach(item => {
        if (item.hasBeenRead === true) {
            count++;
            describeBook(item.title, item.author); 
        }
    });
    return count; // Zwrócenie liczby spełniających warunek
 }

 // Funkcja opisująca książkę
let describeBook = (title, author) => {
    console.log(`The title of the book that has been read is ${title}, and it was written by: ${author}`);
};

/* Display */
console.log(wiedzmin);
wiedzmin.bookDescriber();
console.log(hasBeenReadCount(bookcase));
