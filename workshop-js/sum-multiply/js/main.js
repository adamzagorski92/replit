let arrToMath = [1, 2, 3, 4, 5, 6];
let secondArr =[2,5,9];
let microArr = [0.2, 0.6, 0.11, 0.001]


function count(arr) {
        let sum = 0;
        let multiply=1;
        let division =200000;
        let minus = 666;
        let moduloSum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        multiply *= arr[i];
        division /= arr[i];
        minus -= arr[i];
        moduloSum += arr[i] % 2;
    }
    console.log(` Wynik sumy: ${sum}, Wynik iloczynu:${multiply}, Wynik ilorazu:${Math.floor(division)}, Wynik odejmowania:${minus}, Wynik sum reszt z dzielenia:${moduloSum}`);
}

count(arrToMath);
count(secondArr);
count(microArr);