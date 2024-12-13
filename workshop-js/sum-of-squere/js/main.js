let sumSquereArr = [0,1,2,3,4,5];

function sumSquereMachine(arr) {
    let sumSquere = 0;
    for (let i=0;i<arr.length;i++) {
        sumSquere += Math.pow(arr[i], 2);
    }
    return sumSquere;
}

console.log(sumSquereMachine(sumSquereArr));