//ES5

function iloczyn(num1,num2,num3) {
    let result= num1*num2*num3;

    return result;
}

let wynikIloczynu = iloczyn(5,34,3);

console.log(wynikIloczynu);


// ES6
const multiply = (num1,num2,num3) => num1*num2*num3;

let multiplyResult = multiply(34,23,23);

console.log(multiplyResult);