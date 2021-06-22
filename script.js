// -----------------------------------------------------------
// Javascript Interview Challeng
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
//5.  Create a range of numbers
// ***************************************

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
// console.log(minMaxRange(2, 10)); // Expected [2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(minMaxRange(1, 3)); // Expected [1, 2, 3]
// console.log(minMaxRange(-5, 5)); //Expected [-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
// console.log(minMaxRange(2, 7)); //Expected [2, 3, 4, 5, 6, 7]

// ***************************************
// 6. Remove a specific array element
// ***************************************

// Write a function that takes an array and a value as argument
// The function should clean the array from all occurrences of the given value and return the the cleaned version

function removeItemArray(arr, a) {
  return arr.filter(item => item !== a);
}

// Test Cases:
// console.log(removeItemArray([1, 2, 3], 2)); // Expected [1, 3]
// console.log(removeItemArray([1, 2, '2'], '2')); //Expected  [1, 2]
// console.log(removeItemArray([false, '2', 1], false)); //Expected  ['2', 1]
// console.log(removeItemArray([1, 2, '2', 1], 1)); //Expected  [2, '2']

// ***************************************
// 7. Sum up all array elements with values greater than
// ***************************************

// Write a function that takes an array and a number, say num, as arguments
// Sum up all array elements with a value greater than num
// Return the sum

//My Code
function sumOfGreater(arr, num) {
  return arr
    .filter(item => item > num)
    .reduce((total, currentValue) => {
      return total + currentValue;
    }, 0);
}

//Author's code
// function sumOfGreater(arr, num) {
//   return arr.reduce((sum, cur) => {
//     if (cur > num) return sum + cur;
//     return sum;
//   }, 0);
// }

// Test Cases:
// console.log(sumOfGreater([1, 2, 3, 4, 5, 6, 7], 2)); //Expected  25
// console.log(sumOfGreater([-10, -11, -3, 1, -4], -3)); //Expected  1
// console.log(sumOfGreater([78, 99, 100, 101, 401], 99)); //Expected  602

// ***************************************
// 8. Check if all array elements are equal
// ***************************************

// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
//My Code
function ifItemsEqual(arr) {
  let first = arr[0];
  return arr.every(item => item === first);
}

//Author's code
// function ifItemsEqual(input) {
//   return new Set(input).size === 1;
// }

// Test Cases:
// console.log(ifItemsEqual([true, true, true, true])); //Expected true
// console.log(ifItemsEqual(['test', 'test', 'test'])); //Expected true
// console.log(ifItemsEqual([1, 1, 1, 2])); // Expected false
// console.log(ifItemsEqual(['10', 10, 10, 10])); //Expected  false

// ***************************************
// 9. Return the longest string from an array of strings
// ***************************************
// Write a function that takes an array of strings as argument
// It should return the longest string

//My Code
// function longestString(arr) {
//   let max = arr[0].length;
//   let index = 0;
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i].length);
//     if (arr[i].length > max) {
//       max = arr[i].length;
//       index = i;
//     }
//   }
//   return arr[index];
// }

//Author's code
function longestString(input) {
  return input.reduce((a, b) => (a.length <= b.length ? b : a));
}
// Test Cases:
// console.log(longestString(['help', 'me'])); //Expected 'help'
// console.log(longestString(['I', 'need', 'candy'])); //Expected 'candy'

// ***************************************
// 9. Merge an arbitrary number of arrays
// ***************************************

// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

//My Code
function mergeArrays(...arr) {
  return arr.reduce((a, b) => a.concat(b));
}

//Author's code
function mergeArrays(...arrays) {
  return arrays.flat();
}

// Test Cases:
// console.log(mergeArrays([1, 2, 3], [4, 5, 6])); //Expected [1, 2, 3, 4, 5, 6]
// console.log(mergeArrays(['a', 'b', 'c'], [4, 5, 6])); //Expected ['a', 'b', 'c', 4, 5, 6]
// console.log(mergeArrays([true, true], [1, 2], ['a', 'b'])); //Expected  [true, true, 1, 2, 'a', 'b']

// ***************************************
// 9. Merge two arrays with duplicate values
// ***************************************

// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

//My Code
function removeDuplicateAndMerge(arr1, arr2) {
  const mergedArray = arr1.concat(arr2);
  const sortArray = mergedArray.sort(function(a, b) {
    return a - b;
  });
  return new Set(sortArray);
}

//Author's Code
// function removeDuplicateAndMerge(first, second) {
//   return [...new Set([...first, ...second])].sort((a, b) => a - b);
// }

// Test Cases:
// console.log(removeDuplicateAndMerge([1, 2, 3], [3, 4, 5])); //Expected [ 1, 2, 3, 4, 5 ]
// console.log(removeDuplicateAndMerge([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); //Expected [ -11, -10, 5, 22, 41,  42, 333]

// ***************************************

// ***************************************

// https://www.jschallenger.com/overview
