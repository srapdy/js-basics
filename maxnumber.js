const numbers = [1, 2, 3, 24, 5, 13, -1];

const max = numbers.reduce((a, b) => (a > b) ? a : b);

console.log(max, numbers.indexOf(max));