console.log("Sort this letters, please!");

 let unSortText = document.querySelector("h1").textContent;

// I sposób
/*
 let sortedText = unSortText.split('').sort().join('');

 document.querySelector("h1").textContent= sortedText;

console.log(sortedText); */


// II sposób
// ES5
/* 
    function sortingMachine(text)  {
        return text.split('').sort().join('');
    }; 
*/
// ES6
    const sortingMachine = text => text.split('').sort().join('');

    let sortedText = sortingMachine(unSortText);
    console.log(sortedText);

    document.querySelector("h1").textContent= sortedText; 


