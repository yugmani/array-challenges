// Javascript arrays
// -----------------------------------------------------------

// ***************************************
// 1. Sort an array of strings alphabetically
// ***************************************

// Write a function that takes an array of strings as argument
// It should return the array with its values sorted alphabetically

function mySortArray(arr) {
  return arr.sort();
}

// Test Cases:
// console.log(mySortArray(['b', 'c', 'd', 'a']));
// Expected ['a', 'b', 'c', 'd']
// console.log(mySortArray(['z', 'c', 'd', 'a', 'y', 'a', 'w']));
// Expected ['a', 'a', 'c', 'd', 'w', 'y', 'z']

// ***************************************
// 2. Sort an array of numbers in descending order
// ***************************************

// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

// //My Code
function sortDescending(arr) {
  return arr.sort().reverse();
}

//Author's Code
// function sortDescending(input) {
//   return input.sort((a, b) => b - a);
// }

// Test Cases:
// console.log(sortDescending([1, 3, 2])); //Expected  [3,2,1]
// console.log(sortDescending([4, 2, 3, 1])); //Expected  [4,3,2,1]

// ***************************************
// 3. Return last n array elements
// ***************************************

// Write a function that takes an array and a number (n) as arguments
// It should return the last n array elements
// If the array has less than n elements, return all

//My Code
// function lastArray(arr, num) {
//   if (arr.length <= num) {
//     return arr;
//   } else {
//     return arr.splice(arr.length - num, num);
//   }
// }

//Author's Code
function lastArray(arr, n) {
  return arr.slice(-n);
}

// Test Cases:
// console.log(lastArray([1, 2, 3, 4, 5], 2)); //Expected [ 4, 5 ]
// console.log(lastArray([1, 2, 3], 6)); //Expected  [ 1, 2, 3 ]
// console.log(lastArray([1, 2, 3, 4, 5, 6, 7, 8], 3)); //Expected [ 6, 7, 8 ]

// ***************************************
// 4. Return the average of an array of numbers
// ***************************************

// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

function averageArray(arr) {
  let totalArr = arr.reduce((accumulator, currentItem) => {
    return accumulator + currentItem;
  }, 0);
  return totalArr / arr.length;
}

// Test Cases:
// console.log(averageArray([10, 100, 40])); //Expected 50
// console.log(averageArray([10, 100, 1000])); //Expected 370
// console.log(averageArray([-50, 0, 50, 200])); //Expected 50

// ***************************************

//5.  Create a range of numbers***************************************

// Write a function that takes two numbers, say min and max, as arguments
// Return an array of numbers in the range min to max
function minMaxRange(min, max) {
  let minMax = [];
  for (let i = min; i <= max; i++) {
    minMax.push(i);
  }
  return minMax;
}

// Test Cases:
console.log(minMaxRange(2, 10)); // Expected [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(minMaxRange(1, 3)); // Expected [1, 2, 3]
console.log(minMaxRange(-5, 5)); //Expected [-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
console.log(minMaxRange(2, 7)); //Expected [2, 3, 4, 5, 6, 7]
// ***************************************
