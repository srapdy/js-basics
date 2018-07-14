const numbers = [3, 4];

// Add elements at the end
numbers.push(5, 6);

// Add elements at the beginning
numbers.unshift(1, 2);

// Add elements in the middle
numbers.splice(2, 0, 'a', 'b'); // starting at the 2nd position, deleting zero elements, insert 'a' and 'b'

console.log(numbers);


// Remove elements from an array
const myArray = [1, 2, 3, 4, 5];

// Remove from the end
const last = myArray.pop(); // modifies the array; returns the element removed 5

// Remove from the beginning
const first = myArray.shift(); // modifies the array; returns the element removed 1

// Remove from somewhere in the middle
const removedElements = myArray.splice(1, 2); // modifies the array; start from index 1 and remove 2 elements; returns the elements removed


// Emptying an array -
let arrayToEmpty = [1, 2, 3, 4, 5, 6];
// Solution 1
arrayToEmpty = []; // works if the array is not declared a const; if there are other references to this array, they won't be cleared (no garbage collection will occur) 

// Solution 2
arrayToEmpty.length = 0; // works when even there are other references

// Solution 3
arrayToEmpty.splice(0, arrayToEmpty.length); // works on all references 

// Solution 4
while (arrayToEmpty.length > 0)
    arrayToEmpty.pop(); // works on all references; do not use this solution when there are large number of elements


// Finding the primitive elements in an array
const elements = [1, 2, 3, 1, 4];

console.log(elements.indexOf('a')); // returns -1 when the element does not exist
console.log(elements.indexOf(1)); // returns 0, the index of the element
console.log(elements.indexOf(1, 2)); // returns 3; the index of the element 1 but begins the search from index 2
console.log(elements.lastIndexOf(1)); // returns 3; the index of the last occurence of the element
console.log(elements.indexOf(3) !== -1); // returns true or false to indicate if the element exits
console.log(elements.includes(3)); // a simpler way to find if the element exits rather than checking for the return value


// Finding reference type elements in an array
const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'}
];

console.log(courses.includes({id: 2, name: 'b'})); // returns false as it is a reference comparison intead of value comparison
console.log(courses.find(function (course) { // predicate function a.k.a. callback
    return course.id === 2;
})); // returns course element; returns undefined if the element matching the condition does not exist

console.log(courses.findIndex(function (course) {
    return course.id === 'b';
})); // returns the index of the first occurence matching the condition; returns -1 if the element matching the condition does not exist

// Arrow functions (ES6) lamba in C#
console.log(courses.find(course => course.id === 1));


// Combining arrays
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
let combined = firstArray.concat(secondArray); // returns a new array; value types are copied, reference types are not copied only references are copied 

// Slicing arrays
const slicedArray = combined.slice(2, 4); // from index 2 to 3; end index is exclusive; value types are copied, reference types are not
let copyArray = combined.slice(); // copies the array; value types are copied, reference types are not

console.log(combined); // [1, 2, 3, 4, 5, 6]
console.log(slicedArray); // [3, 4]
console.log(copyArray); // [1, 2, 3, 4, 5, 6]

// ES6: Better way to combine and copy using spread operator (instead of concat and slice methods)
combined = [...firstArray, ...secondArray]; // you can also insert other elements here
copyArray = [...combined]; // you can also insert other elements here

// Two ways to iterate an array
const itArray = [1, 2, 4, 5];
// Solution 1
for (let element of itArray)
    console.log(element);

// solution 2
itArray.forEach(element => console.log(element));
// you can access the value of the index with forEach
itArray.forEach((element, index) => console.log(`Element at index ${index} is ${element}`));

// Joining elements of an array
console.log(itArray.join(','));

// Spliting a string into an array
const myString = "This is my array";
console.log(myString.split(' '));

// Sorting elements in an array
// sort() and reverse() methods without parameters work on arrays with primitive values
// for object elements, we must supply a predicate function to these methods that implements the comparison
// sort() and reverse() modifies the array
const compCourses = [
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'Javascript'}
];

compCourses.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});
console.log(compCourses);

compCourses.reverse((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});
console.log(compCourses);


// Testing elements of an array
const nums = [1, 2, 3, -1];
// every() checks if every element matches the condition given
const isAllPostives = nums.every(num => num >= 0);
console.log(isAllPostives);

// some() checks if there is at least one element matching the condition given
const isAtLeastOneElement = nums.some(num => num >= 0);
console.log(isAtLeastOneElement);

// Filtering an array to return only the elements that match a condition
console.log(nums.filter(n => n >= 0)); // returns only postive numbers

// map() method on array
const items = nums
    .filter(n => n >= 0)
    .map(n => ({value: n})); // note the parenthesis to indicate that the arrow function returns an object; otherwise {} is interpreted as a code block
console.log(items);

// reduce() method on array
const sum1 = nums.reduce((accumulator, currentValue) => accumulator + currentValue); // accumulator is auto-initialized by reduce() to be the first element

// accumulator can be optionally initialized to a different value -
const sum2 = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 5); // 5 is the initial value