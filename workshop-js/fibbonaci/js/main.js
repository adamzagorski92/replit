// F(n)=F(n−1)+F(n−2)

const illuminati = (nElement) => {
    if (nElement === 0) {
        return 0; // Pierwszy element ciągu
    } else if (nElement === 1) {
        return 1; // Drugi element ciągu
    } else if (nElement < 0 || !Number.isInteger(nElement)) {
        console.log(`Niepoprawny numer elementu: ${nElement}. Podaj liczbę całkowitą równą lub większą od 0.`);
        return null;
    }

    // Obliczanie ciągu Fibonacciego iteracyjnie
    let prev1 = 0, prev2 = 1, current;
    for (let i = 2; i <= nElement; i++) {
        current = prev1 + prev2; // Obecny element jest sumą dwóch poprzednich
        prev1 = prev2; // Aktualizuj poprzedni element
        prev2 = current; // Aktualizuj bieżący element
    }
    return current;
};

// Testowanie funkcji:
let nFibo = 3; // Numer elementu ciągu Fibonacciego
console.log(`Element nr ${nFibo} w ciągu Fibonacciego to: ${illuminati(nFibo)}`);