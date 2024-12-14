 let arrToBubbleSort = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

let bubbleSortMachine = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length -1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Zamiana miejscami
            }
        }
    }
    return arr;
};

console.log(bubbleSortMachine(arrToBubbleSort));


/* 
Działanie funkcji:
Funkcja sprawdza, czy poprzedni element tablicy jest wiekszy od następnego, jeśli tak, to przestawia je miejscami i sprawdza ponownie. Gdy warunek na drugim poziomie głębokości przestaje być prawdziwy, zwracana jest nowo posortowana tablica i zaczyna być sprawdzana na nowo od początku, tak długo, aż zostaną sprawdzone i posortowane wszystkie elementy tablicy.

*/
