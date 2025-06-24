// Write a function called doubleNumbers that takes an array of numbers and returns a new array with each number doubled.
//Answer:
const myArray = [1, 2, 3, 4, 5];

const doubleFunction = (arr) => { //using mapping
    return arr.map(num => num*2);
}

console.log(doubleFunction(myArray));
