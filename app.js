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

const newArray = ['one', 'two', 'three'];

// Appending an element to the end
newArray.push('four');
// console.log("Fourth Item: " + newArray[3]);     // four

// Add the element to the beginning of the array
newArray.unshift('zero');
// console.log("New first element added:" + newArray[0] );   // zero

// https://javascript.info/array
