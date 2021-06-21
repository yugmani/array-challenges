// *********************************
// 1. Is array copied?
// *********************************

// What is this code going to show?
let fruit = ['Apples', 'pear', 'Orange'];

// push a new value into the 'copy'
let shoppingCart = fruit;
shoppingCart.push('Banana');

//What's in fruit?
// console.log(fruit.length); // 4
// console.log(fruit); // (4) ["Apples", "pear", "Orange", "Banana"]

// **********************************
// 2. Array Operations.
// **********************************

// Let’s try 5 array operations.

// 1. Create an array styles with items “Jazz” and “Blues”.
let styles = ['Jazz', 'Blues'];
// console.log(styles);  // (2) ["Jazz", "Blues"]
// 2. Append “Rock-n-Roll” to the end.
styles.push('Rock-n-Roll');
// console.log(styles); // (3) ["Jazz", "Blues", "Rock-n-Roll"]
// 3. Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
styles[parseInt(styles.length / 2)] = 'Classics';
// console.log(styles);  // (3) ["Jazz", "Classics", "Rock-n-Roll"]
// 4. Strip off the first value of the array and show it.
styles.shift();
// console.log(styles);  // (2) ["Classics", "Rock-n-Roll"]
// 5. Prepend Rap and Reggae to the array.
styles.unshift('Rap', 'Reggae');
// console.log(styles);  // (4) ["Rap", "Reggae", "Classics", "Rock-n-Roll"]
