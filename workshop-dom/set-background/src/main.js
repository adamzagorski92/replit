for (let i =1; i<=2; i++) {
    let newParagraph = document.createElement('p');
    newParagraph.textContent = `Paragraf nr ${i}`;
    document.body.appendChild(newParagraph);
}


let btn = document.createElement('button');
btn.innerText = 'Ustaw tło paragrafów'
document.body.appendChild(btn);

let setBackground = () => {
    let firstParagraph = document.querySelector('p');
    firstParagraph.style.backgroundColor = 'red';
    let secondParagraph = firstParagraph.nextElementSibling;
    secondParagraph.style.backgroundColor = 'yellow';
}

btn.addEventListener('click', setBackground);
