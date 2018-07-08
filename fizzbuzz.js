
// Return Fizz if divisible by 3
// Buzz if divisible by 5
// FizzBuzz if divisible by both 3 and 5
// number back if divisible by neither 3 nor 5
// NaN if not a number
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(7));
console.log(fizzBuzz('hello'));

function fizzBuzz(input) {

    if (typeof input !== 'number')
        return NaN;
    
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0) return 'Fizz';
    if (input % 5 === 0) return 'Buzz';

    return input;
}