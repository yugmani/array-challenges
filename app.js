// *********************************************************
// Array.at() Will Change How We Access Array Values in JavaScript
// *********************************************************

const myArray = ['a', 'b', 'c', 'd', 'e'];

// ******** Accessing elements **********
// console.log('First Item: ' + myArray[0]); // 'a'
// console.log('Second Item: ' + myArray[1]); // 'b'

// console.log('Last Item: ' + myArray[myArray.length - 1]); // 'e'

// console.log('last Item: ' + myArray.slice(-1)[0]); // e
// console.log('Item that does not exist: ' + myArray[-1]); // undefined

// ***** An array can store elements of any type. *******

// mix of values
const yourArray = [
  'Apple',
  { name: 'Shelly' },
  true,
  function() {
    console.log(`I love ${this[0]}!`);
  },
  97
];

// console.log(yourArray[1].name); // Shelly
// console.log(yourArray[3]()); // I love Apple!

// ******* Manipulating Array: ******

// A queue is one of the most common uses of an array. In computer science, this means an ordered collection of elements which supports two operations:
// 1. push appends an element to the end.
// 2. shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.

// There’s another use case for arrays – the data structure named stack.

// It supports two operations:

// a. push adds an element to the end.
// b. pop takes an element from the end.

const newArray = ['one', 'two', 'three'];

// Appending an element to the end
newArray.push('four');
// console.log("Fourth Item: " + newArray[3]);     // four

// Add the element to the beginning of the array
newArray.unshift('zero');
// console.log("New first element added:" + newArray[0] );   // zero

// Extract the last element of the array and return it.

console.log(newArray.pop()); // four

// Extract the first element of the array and return it:
console.log(newArray.shift()); // zero

console.log(newArray); // (3) ["one", "two", "three"]

// https://javascript.info/array
