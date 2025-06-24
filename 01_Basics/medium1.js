// You have an array of user objects like this:

// js
// Copy
// Edit
// const users = [
//   { name: "Alice", isActive: true },
//   { name: "Bob", isActive: false },
//   { name: "Charlie", isActive: true }
// ];
// 🎯 Task 1:
// Write a function getActiveUserNames(users) that returns an array of names of users where isActive is true.

//Answer:

const myArray = [
    {name: "Alice", isActive : true},
    {name: "Bob", isActive: false},
    {name: "Rose", isActive: false},
    {name: "Jack", isActive: true}
];

function getActiveUserNames(arr) {
    return arr
        .filter(person => person.isActive)
        .map(person => person.name);
}

console.log(getActiveUserNames(myArray));
