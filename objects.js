// An example of OOP in javascript
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('circle drawn');
    }

};

circle.draw();


// Using factory functions to create objects

function createCircle(radius) { // use camel notation by contention for factory functions
    return {
        radius, // same as defining radius: radius
        draw() { // same as defining draw: function() {}
            console.log('circle drawn', radius);
        }
    };
}

const circle1 = createCircle(1);
const circle2 = createCircle(2);
console.log(circle1);
console.log(circle2);
circle1.draw();
circle2.draw();


// Using constructor functions to create objects

function CreateCircle(radius) { // use Pascal case for constructor functions by convention
    this.radius = radius, // this keyword refers to the object that is calling this function
    this.draw = function() {
        console.log('circle drawn', radius);
    }
};

const circle3 = new CreateCircle(3); // the "new" keyword internally generates an empty object circle3 = {} and sends "this" to the constructor
const circle4 = new CreateCircle(4);
circle3.draw();
circle4.draw();


// Dynamic nature of objects

const circle5 = { // the const keyword just means that we cannot reassign circle5 but we are allowed to change it later
    radius: 1
};
circle5.color = 'blue'; // we can add new properties of any type even if circle5 is defined as a const object
circle5.draw = function() {}


// try looking at circle3.constructor and circle1.constructor in the browser console

let x = {}; // object literal syntax; Internally javascript will translate {} to "let x = new Object()"
// Other built-in constructors are -
// new String(); same as '', "", ``
// new Boolean(); same as true or false
// new Number(); but we just use number literals


// Functions are objects
// try looking at createCircle.constructor and CreateCircle.constructor in the brower console. 
// You will find that the functions themselves are created as objects using the function referenced by
// the constructor property above. This function is called "Function" - take a look at the below example -

const Circle6 = new Function('radius', `
    this.radius = radius, // this keyword refers to the object that is calling this function
    this.draw = function() {
        console.log('circle drawn', radius);
    }
`);

const circle6 = new Circle6(1);


CreateCircle.call({}, 4); // this way of calling the constructor function using call method is exactly same as using "new" like when we defined circle4 above

// Value types are copied by value
let a = 10;
let b = a;
a = 20; // b value would still be 10

// Reference types are copied by reference
let c = {value: 10};
let d = c;
c.value = 20; // d.value would also be 20


// Ways of Enumerating properties of an object

// 1. use for-in statement
for (let key in circle6)
    console.log(key, circle6[key]);

// 2. use for-of statement
for (let key of Object.keys(circle6))
    console.log(key, circle6[key]);

// 3. use for-of statement on iterable key-value pairs
for (let entry of Object.entries(circle6))
    console.log(entry);

// Check if a property exists by its name
if ('radius' in circle6) console.log('radius exists');
if (!('color' in circle6)) console.log('color does not exist in circle6');




// Ways of cloning an object 

// 1. Copy properties dynamically
const another1 = {};
for (let key in circle6)
    another1[key] = circle6[key];
console.log(another1);

// 2. Use assign method on Object
const another2 = Object.assign(circle6);
console.log(another2);

// 3. Use spread operator
const another3 = { ... circle6 };
console.log(another3);

// Strings
const message = "Hi"; // typeof message returns "string"
const message2 = new String('Hi'); // typeof message2 returns "object"
// However, when we use dot notation on the "message" variable above, javascript wraps the string value type inside an object (like boxing in C#)


// Template literal is introduced in ES6 (``) to avoid escaping in literal strings and providing placeholders in the string
const name = 'Sridhar';
const email = 
`Hi ${name}

Welcome to my course

Thanks,
Team`;