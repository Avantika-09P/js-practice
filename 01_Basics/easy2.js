// Question:
// Write a function sumArray that takes an array of numbers and returns the sum of all the elements.

// Example:
// js 
// Copy
// Edit
// sumArray([1, 2, 3, 4]); // Output: 10


//Answer : 

const myArray = [1, 2, 3, 4, 5];

function sumNumbers(arr) {
    return arr.reduce((sum, num) => sum+num, 0)
}

console.log(sumNumbers(myArray));

