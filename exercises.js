// 1. Write a lengths function that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
const words = ["hello", "what", "is", "up", "dude"];

const lengths = (arr) => arr.map((str, i) => arr[i] = str.length);

console.log(lengths(words)); // => [5, 4, 2, 2, 4]

// 2. Write a JavaScript function called transmogrifier(). This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.
// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 (that is, 225). Use your function to find the following answers:

const transmogrifier = (a, b, c) => Math.pow((a * b), c);

console.log(transmogrifier(5, 3, 2)); // => 225
console.log(transmogrifier(5, 4, 3));
console.log(transmogrifier(13, 12, 5));
console.log(transmogrifier(42, 13, 7));

// 3. Write a function, wordReverse(), that accepts a single argument: a string. The method should return a string with the order of the words reversed. Don't worry about punctuation.

const wordReverse = (str) => str.split(' ').reverse().join(' ');

console.log(wordReverse("Now I know what a TV dinner feels like")) // => "like feels dinner TV a what know I Now"
console.log(wordReverse("Put Hans back on the line")) // => "line the on back Hans Put"