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

// **********************************
// 3. Calling in an array context
// **********************************

// What is the result? Why?
let arr1 = ['a', 'b'];
arr1.push(function() {
  alert(this);
});

// console.log(arr1[2]());  // a, b, function(){...}
// The call arr1[2]() is syntactically the good old obj[method](), in the role of obj we have arr, and in the role of method we have 2.

// So we have a call of the function arr1[2] as an object method. Naturally, it receives this referencing the object arr and outputs the array:
// The array has 3 values: initially it had two, plus the function.


// **********************************
// 2. Array Operations.
// **********************************

// **********************************
// 2. Array Operations.
// **********************************
