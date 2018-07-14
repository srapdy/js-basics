console.log('Hello World!');

// let keyword is preferred over var for variable declaration starting ECMA6 (ES2015)
// var keyword is function-scoped but let keyword is block-scoped and hence more granular
// var keyword declared outside functions attaches to window object (window.variable)
// variable names cannot start with a number
// variable names cannot contain space or hyphen
// variable names are case-sensitive
// variable names are camel case by convention
// variables that are not initialized have a value of "undefined"
let firstName = 'Sridhar';


console.log(name); // name is empty if not declared; "undefined" by default if declared but not initialized

let myVar = 'undefined'; // yes, we can explicitly define a variable as undefined

const interestRate = 0.3;
// interestRate = 1; this will result in an error as constants cannot be changed.

const myString = "my string"; // yes, double quotes for string also works
console.log(myString);

// value types - string, number, boolean, undefined and null
// ES6 adds one more primitive type called symbol
let myName = 'Sridhar'; // string literal
let age = 30; // number literal
let isApproved = false; // boolean literal
let lastName = null; // explicitly clears the value instead of letting the default value of "undefined"

// Javascript is dynamically typed i.e., the type of the variable can change dynamically as below -
console.log(isApproved);
isApproved = 1;
console.log(isApproved);

console.log(typeof NaN); // prints "number" - interesting
console.log(typeof undefined); // prints "undefined"
console.log(typeof null); // prints "object"

// reference types - objects, arrays and functions
let person = { 
    name: 'Sridhar', // properties defined as key-value pairs
    age: 30
}; // object literal syntax
console.log(person);

person.age = 31; // dot notation to access object's properties
person['age'] = 31; // bracket notation to access object's properties

// backet notation is useful when seleting the properties dynamically
let selection = 'age';
person[selection] = 32;

let selectedColors = []; // empty array using array literal syntax
selectedColors = ['red', 'blue'];
selectedColors[2] = 'green'; // array can expand to a different length dynamically
selectedColors[3] = 5; // yes, an array can contain multiple types too
console.log(selectedColors);

console.log(typeof(selectedColors)); // prints "object"
console.log(selectedColors.length); // array properties can be accessed by dot notation because array is an object

// functions are declared using function keyword
function greet(name, lastName) {
    console.log('Hello, ' + name + ' ' + lastName);
}

greet('Sridhar', 'Ranga');

// function returing a value
function square(number) {
    return number * number;
}

let number = square(5);
console.log(number); // variable number has a local scope

// Javascript has the following arithmetic operators
// +, -, *, /, % and ** (exponentiation operator)
// ++ and -- increment and decrement operators


// Javascript has the following assignment operators
// =, +=, -= etc.

// Comparison operators
//console.log(5 > 0); // prints "true";

// Equality operators
// strict equality operator compare both type and value
// loose equality operator compares value after converting type
console.log('5' === 5); // Strict equality operator prints "false"
console.log('5' == 5); // loose equality operator prints "true"
console.log(true == 1); // prints "true"
console.log(true === 1); // prints "false"
console.log(5 !== 5); // prints "false"

// Ternary operator
let isEven = 10 % 2 ? false : true;
console.log(isEven);

// Logical operators &&, || and !


// Logical operations with non-boolean types - truthy or falsy
console.log(false || "Sridhar"); // prints Sridhar
console.log(false || 5); // prints 5
console.log("Test" || true); // prints Test

// falsy values are - false, 0, undefined, null, '', NaN
// Anything not falsy are truthy
console.log(''||'Sridhar'); // prints Sridhar

// Using logical operators with non-boolean for setting defaults
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);

// Bitwise operators - OR, AND, XOR
console.log(1 | 2);
console.log(1 & 2);
console.log(1 ^ 3);