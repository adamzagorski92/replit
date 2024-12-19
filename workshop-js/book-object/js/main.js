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
// Dodatkowa funkcja dodająca książki jako obiekty do regału
// const bookAdder = (title,author,hasBeenRead) => {
//  const book = new Book(title, author, hasBeenRead)
//  bookcase2.push(book);
// }

// var bookcase2 = [];
// bookAdder("Wiedźmin","Andrzej Sapkowski",true);
// bookAdder("Harry Potter i Kamień Filozoficzny", "J.K. Rowling", false);
// bookAdder("Masters of Doom", "David Kushner", false);
// bookAdder("Elon Musk", "Walter Isaacson", false);
// bookAdder("Tadeusz Linkner", "Słowiańskie Bogi i Demony", true);
// console.log(bookcase2);


let wiedzmin = new Book("Wiedźmin","Andrzej Sapkowski",true);
let harry = new Book("Harry Potter i Kamień Filozoficzny", "J.K. Rowling", false);
let doom = new Book("Masters of Doom", "David Kushner", false);
let elon = new Book("Elon Musk", "Walter Isaacson", false);
let slavia = new Book("Tadeusz Linkner", "Słowiańskie Bogi i Demony", true);

var bookcase = [wiedzmin, harry, doom, elon, slavia];


 let hasBeenReadCount= arr => {
    let count=0;
    console.log("-----Has been read-----")
    arr.forEach(item => {
        if (item.hasBeenRead === true) {
            count++;
            describeBook(item.title, item.author); 
        }
    });
    console.log("-----All books in bookcase-----")
    arr.forEach(item =>{
        item.bookDescriber();
    })
    console.log("-----In total read-----")
    return `Count of book has been read: ${count}`; // Zwrócenie liczby spełniających warunek
 }

 // Funkcja opisująca książkę
let describeBook = (title, author) => {
    console.log(`The title of the book that has been read is: ${title}, and it was written by: ${author}`);
};

/* Display */
// console.log(wiedzmin);
// wiedzmin.bookDescriber();
console.log(hasBeenReadCount(bookcase));
