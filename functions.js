// Function declaration
function walk() {
    console.log('walk');
}
walk(); // can be called even before function walk() is declared. This is done because javascript engine performs hoisting of all function declarations.

// Anonymous function expression
let run = function() {
    console.log('Run');
}; // note semi-colon is required for a function expression
run();  // CANNOT be called before the function expression because no hoisting is done for function expressions.
let move = run;
move();

// Named function expression
let run2 = function runName() {
    console.log('named function');
};

run2();
//runName(); // cannot invoke this successfully

function sum1(a, b) {
    return a + b;
}
console.log(sum1(1)); // works but results in NaN (i.e., 1 + undefined)
console.log(sum1()); // works but results in NaN (i.e., undefined + undefined)
console.log(sum1(1, 2, 3)); // works; prints 3; ignores the extra arguments

function sum2() {
    let total = 0;
    for (let item of arguments) // arguments is an inbuilt variable that is an iterator which contains all arguments sent (variable number of args)
        total += item;
    return total;
}
console.log(sum2(1, 2, 3, 4, 5));

function sum2OnlyBetter(...args) { // ... is called rest operator (not to be confused with spread operator)
    return args.reduce((a, b) => a + b);
} 
console.log(sum2OnlyBetter(1, 2, 3, 4, 5, 10));

function sum2ShowingRestParam(discount, ...prices) { // rest paramater must be the last parameter, otherwise error
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}
console.log(sum2ShowingRestParam(0.1, 1, 2, 3 , 4 , 5));

// ES6: Specifying default values for function parameters
function interest(principal, rate = 3.5, year = 5) {

}

// Getters and Setters
const person = {
    firstName: 'Sridhar',
    lastName: 'Ranga',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        if (typeof value != 'string')
            throw new Error('fullname is not a string');

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('enter first and last names');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

try {
    person.fullName = 'John Smith';
    //person.fullName = null; // will throw exception and alerted in the below catch block
}
catch (e) {
    alert(e);
}
console.log(person);

function sumOfArguments(...items) { // rest operator
    if (items.length === 1 && Array.isArray(items[0])) // code to accept argument as an array
        items = [...items[0]]; // flatten the array of array to a single array; uses spread operator 
    return items.reduce((a, b) => a + b);
}
console.log(sumOfArguments(1, 2, 3)); // 6
console.log(sumOfArguments([1, 2, 3])); // 6