let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let bodyContainer = document.querySelector('body');

let olSign = document.createElement('ol');

cities.forEach(item => {
    const li = document.createElement('li');
    li.textContent=item;
    olSign.appendChild(li);
    li.classList.add("city");
});

bodyContainer.appendChild(olSign);