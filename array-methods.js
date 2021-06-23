// **************************************
// Immutable Array Methods
// **************************************

// https://www.sitepoint.com/immutable-array-methods-javascript/

// Arrays in JavaScript are just objects, which means they can be mutated.
// In fact, many of the built-in array methods will mutate the array itself.
// This can mean the golden rule from above gets broken, just by using one of the built-in methods.

// **********************************
// Mutable Array Methods in JavaScript
// **********************************

// a. Array.prototype.pop()
const list1 = ['a', 'b', 'c'];
const popped = list1.pop();
// console.log(list1); // ["a", "b"], mutated original array
// console.log(popped); // "c"
// WHY ?
// because they’re both referencing the same array
// It’s this sort of side effect that can go unnoticed — especially in a large application — and cause some very hard-to-track bugs.

// b. Array.prototype.push()
const list2 = [11, 22, 33];
const pushed = list2.push(44);
// console.log(list2); // [11, 22, 33, 44]
// console.log(pushed); // 4

// c. Array.prototype.shift()
const list3 = ['x', 'y', 'z'];
const shifted = list3.shift();
// console.log(list3); // ["y", "z"]
// console.log(shifted); // "x"

// d. Array.prototype.unshift()
const list4 = ['p', 'q', 'r', 's'];
const ted = list4.unshift('o');
// console.log(list4); // ["o", "p", "q", "r", "s"]
// console.log(ted); // 5

// e. Array.prototype.reverse()
const list5 = [1, 2, 3];
const countdown = list5.reverse();
// console.log(countdown); // (3) [3, 2, 1]
// console.log(list5); // (3) [3, 2, 1]
// mutated the list5(original) array as well, this is not what we wanted at all

// f. Array.prototype.sort()
const list6 = ['e', 'b', 'a', 'd', 'c'];
const sorted = list6.sort();
// console.log(list6); // ["a", "b", "c", "d", "e"]
// console.log(sorted); // ["a", "b", "c", "d", "e"]

const myNumbers = [100, 21, 30, 7];
const numSorted = myNumbers.sort();
// console.log(myNumbers); // [100, 21, 30, 7]
// console.log(numSorted); // [100, 21, 30, 7]
// WHY ?

// g. Array.prototype.splice()
const list7 = ['aa', 'bb', 'cc', 'dd', 'ee'];
const extracted = list7.splice(0, 2);
// console.log(list7); // ["cc", "dd", "ee"]
// console.log(extracted); // ["aa", "bb"]

// **************************************
// Immutable Array Methods in JavaScript
// **************************************

// 1. Array.prototype.slice()
// Syntax: array.slice(start, end)
const letters1 = ['p', 'q', 'r', 's'];
const sliced = letters1.slice(1, 3);
// console.log(letters1);  // ["p", "q", "r", "s"]
// console.log(sliced);  // ["q", "r"]

// 2. Array.prototype.concat()
const letters2 = ['a', 'b'];
const letters3 = ['c', 'd'];
const concated = letters2.concat(letters3);
// console.log(letters2, letters3);  // ["a", "b"], ["c", "d"]
// console.log(concated);  // ["a", "b", "c", "d"]

// 3. Array.prototype.map()
const num1 = [1, 2, 3];
const newNum1 = num1.map(n => n * 3);
// console.log(num1);  // [1, 2, 3]
// console.log(newNum1); // [3, 6, 9]

// 4. Array.prototype.filter()
const num2 = [10, 7, 25, 8, 3, 15, 23];
const filtered = num2.filter(n => n > 10);
// console.log(num2);    // [10, 7, 25, 8, 3, 15, 23]
// console.log(filtered);  // [25, 15, 23]

// ***************************************
// Let’s Fix this Mutating Mess!
// ***************************************

// i. Pop
// Let’s start by writing a new pop function that returns a copy of the original array but without the last item.

const pop = arr => arr.slice(0, -1);

// The second argument of -1 means stop slicing 1 place before the end.

const food = ['🍏', '🍌', '🥕', '🍩'];

// console.log(pop(food)); // ["🍏", "🍌", "🥕"]

// ii. Push
// let’s create a push() function that will return a new array, but with a new element appended to the end

const push = (arr, value) => [...arr, value];

// This uses the spread operator to create a copy of the array.
// It then adds the value provided as the second argument to the end of the new array.
const fruit1 = ['🍏', '🍌', '🥕', '🍩'];

// console.log(push(fruit1, '🍆')); // ["🍏", "🍌", "🥕", "🍩", "🍆"]

// iii. Shift & Unshift
// We can write replacements for Array.prototype.shift() and Array.prototype.unshift() similarly
const shift = arr => arr.slice(1);

// For our shift() function, we’re just slicing off the first element from the array instead of the last.
const fruit2 = ['🍏', '🍌', '🥕', '🍩'];

// console.log(shift(fruit2)); // ["🍌", "🥕", "🍩"]

// unshift() method will return a new array with a new value appended to the beginning of the array

const unshift = (arr, value) => [value, ...arr];

// console.log(unshift(fruit2, '🍆'))  // ["🍆", "🍏", "🍌", "🥕", "🍩"]

// iv. Reverse
// writing a replacement for the Array.prototype.reverse() method
// It will return a copy of the array in reverse order, instead of mutating the original array
const reverse = arr => [...arr].reverse();

// console.log(reverse(fruit1));  // ["🍩", "🥕", "🍌", "🍏"]

// This method still uses the Array.prototype.reverse() method, but applies to a copy of the original array that we make using the spread operator. 
// There’s nothing wrong with mutating an object immediately after it has been created, which is what we’re doing here.

// v. splice
// use the spread operator and splice()
const splice = (arr, start, end)=> [...arr].splice(start, end);

// console.log(splice(fruit1, 0, 2));  // ["🍏", "🍌"]

