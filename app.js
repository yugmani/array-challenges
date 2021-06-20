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

// console.log(newArray.pop()); // four

// Extract the first element of the array and return it:
// console.log(newArray.shift()); // zero

// console.log(newArray); // (3) ["one", "two", "three"]

// *** Array is an object and thus behaves like an object. ***

// An array is a special kind of object.

let fruits = ['Banana'];

let copiedArray = fruits; // copy by reference: (two variables reference the same array)

// console.log(fruits === copiedArray); // true

// modify the array by reference;

copiedArray.push('Melon');

// console.log(fruits); // (2) ["Banana", "Melon"]  --> See new item is added into fruits array as well.

// But what makes arrays really special is their internal representation. The engine tries to store its elements in the contiguous memory area, one after another.
// there are other optimizations as well, to make arrays work really fast.

// But they all break if we quit working with an array as with an “ordered collection” and start working with it as if it were a regular object.

let animals = [];

animals[9999] = 7; // assign a property with the index far greater than its length
// console.log(animals.length); // 10000
animals.price = 33; // create a property with an arbitrary name
// That’s possible, because arrays are objects at their base. We can add any properties to them.

// But the engine will see that we’re working with the array as with a regular object. Array-specific optimizations are not suited for such cases and will be turned off, their benefits disappear.

// The ways to misuse an array:

// 1. Add a non-numeric property like arr.test = 5.

// 2. Make holes, like: add arr[0] and then arr[1000] (and nothing between them).
// 3. Fill the array in the reverse order, like arr[1000], arr[999] and so on.

// Please think of arrays as special structures to work with the ordered data. They provide special methods for that.
// Arrays are carefully tuned inside JavaScript engines to work with contiguous ordered data, please use them this way.
// And if you need arbitrary keys, chances are high that you actually require a regular object {}.

// *********** Performance **************

// Methods push/pop run fast, while shift/unshift are slow.

// Why is it faster to work with the end of an array than with its beginning?

// It’s not enough to take and remove the element with the number 0. Other elements need to be renumbered as well.

// The shift operation must do 3 things:

// 1. Remove the element with the index 0.
// 2. Move all elements to the left, renumber them from the index 1 to 0, from 2 to 1 and so on.
// 3. Update the length property.

// The more elements in the array, the more time to move them, more in-memory operations.

// The similar thing happens with unshift: to add an element to the beginning of the array, we need first to move existing elements to the right, increasing their indexes.

//  And what’s with push/pop? They do not need to move anything.
// To extract an element from the end, the pop method cleans the index and shortens length.

// The pop method does not need to move anything, because other elements keep their indexes. That            ’s why it’s blazingly fast.

// The similar thing with the push method.

// ************************************
// ***** LOOPS ******
// ************************************

// Old way
let fruitArray = ['apple', 'mango', 'cherry', 'banana', 'berry'];
function returnItems(arr) {
  let string = '';
  for (let i = 0; i < arr.length; i++) {
    string += arr[i] + ' ';
  }

  return string;
}

// console.log(returnItems(fruitArray));
// apple mango cherry banana berry

// Better for arrays there is another form of loop, for..of:
function arrayItems(arr) {
  let string = '';
  for (let fruit of arr) {
    string += fruit + ' ';
  }

  return string;
}

// console.log(arrayItems(fruitArray));
// apple mango cherry banana berry

// The for..of doesn’t give access to the number of the current element, just its value, but in most cases that’s enough. And it’s shorter.

// Technically, because arrays are objects, it is also possible to use for..in:

function arrayAsObjects(arr) {
  let string = '';
  for (let key in arr) {
    string += arr[key] + ' ';
  }

  return string;
}

// console.log(arrayAsObjects(fruitArray));
// apple mango cherry banana berry

//  But that’s actually a bad idea. There are potential problems with it:

// The loop for..in iterates over all properties, not only the numeric ones.

// There are so-called “array-like” objects in the browser and in other environments, that look like arrays.
// That is, they have length and indexes properties, but they may also have other non-numeric properties and methods, which we usually don’t need. The for..in loop will list them though.
// So if we need to work with array-like objects, then these “extra” properties can become a problem.

// The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower.
// Of course, it’s still very fast. The speedup may only matter in bottlenecks. But still we should be aware of the difference.

// Generally, we shouldn’t use for..in for arrays.

// ********** A word about “length” ********

//  The length property automatically updates when we modify the array.
// To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.

// For instance, a single element with a large index gives a big length:
let user = [];
user[123] = 'Garrison';
// console.log(user.length);   //124

//  Another interesting thing about the length property is that it’s writable.

// If we increase it manually, nothing interesting happens. But if we decrease it, the array is truncated. The process is irreversible,
let numArrays = [1, 2, 3, 4, 5];
numArrays.length = 3; // truncate to 2 elements
// console.log(numArrays); //(3) [1, 2, 3]

numArrays.length = 5; //return back length
// console.log(numArrays[4]); //undefined -> why?

// So, the simplest way to clear the array is:
numArrays.length = 0;
// console.log(numArrays); // []

// ********* new Array() *********

let players = new Array();
// console.log(players); // []
let soccerPlayers = new Array('Leo', 'Ronaldo', 'Pele');
// console.log(soccerPlayers);

// It’s rarely used, because square brackets [] are shorter.

// Also there’s a tricky feature with it.
// If new Array is called with a single argument which is a number, then it creates an array without items, but with the given length.

let numbers = new Array(3); // will it create an array of [3] ?
// console.log(numbers[0]); // undefined
// console.log(numbers[1]); // undefined
// console.log(numbers.length); // 3
// console.log(numbers); // (3) [empty × 3]length: 3
// To avoid such surprises, we usually use square brackets, unless we really know what we’re doing.





// https://javascript.info/array
