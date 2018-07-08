// Javascript has two conditional expressions - if-else and switch-case
// if (condition) { statements } else if () { statements} else {}

// switch(variable) { case break; default}


// Javascript loops

// for
for (let i = 0; i < 5; i++) { // loop variable i has a limited scope - only in for loop
    if (i % 2 !== 0) console.log(i);
}

// while..do
let i = 0;
while (i < 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}

// do..while
let j = 5;
do {
    if (j % 2 !== 0) console.log(j);
    j++;
} while (j < 5);

// for-in to iterate over properties of an object
const person = {
    firstName: 'Sridhar',
    lastName: 'Ranga',
    age: 32
}

for (let key in person) {
    console.log(key, person[key]);
}

// for-in to iterate over elements of an array
let colors = ['red', 'blue', 'green'];

console.log('Using for-in loop to iterate over elements of an array:');
for (let index in colors) {
    console.log(colors[index]);
}

// for-of loop to itereate over elements of an array - ES6 standard
console.log('ES6: using for-of loop to iterate over elements of an array:');
for (let color of colors) {
    console.log(color);
}

// break and continue statements exist to break from and continue in the loops