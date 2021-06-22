// **************************************
// Immutable Array Methods
// **************************************

// https://www.sitepoint.com/immutable-array-methods-javascript/

// Arrays in JavaScript are just objects, which means they can be mutated.
// In fact, many of the built-in array methods will mutate the array itself.
// This can mean the golden rule from above gets broken, just by using one of the built-in methods.

const myNumbers = [1, 2, 3];
const countdown = myNumbers.reverse();
// console.log(countdown); // (3) [3, 2, 1]
// console.log(myNumbers); // (3) [3, 2, 1]
// mutated the numbers array as well, this is not what we wanted at all

countdown.push(100);
// console.log(myNumbers); // (4) [3, 2, 1, 100]
// WHY ?
// because they’re both referencing the same array
// It’s this sort of side effect that can go unnoticed — especially in a large application — and cause some very hard-to-track bugs.

// **********************************
// Mutable Array Methods in JavaScript
// **********************************
