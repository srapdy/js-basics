console.log(countTruthy([1, 5, 6])); // 3
console.log(countTruthy([1, 0, 5, 6])); // 3
console.log(countTruthy(['', 5, 6])); // 2
console.log(countTruthy([' ', 5, 6])); // 3
console.log(countTruthy([null, 5, 6])); // 2
console.log(countTruthy([NaN, 5, 6])); // 2
console.log(countTruthy([undefined, 5, 6])); // 2

function countTruthy(array) {
    let count = 0;
    for (let element of array) {
        if (element) count++; 
    }
    return count;
}