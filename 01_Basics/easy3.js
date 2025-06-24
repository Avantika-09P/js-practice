// Question:
// Write a function getNames that takes an array of objects (each with a name property) and returns an array of the names.

const myArray = [
    {name : "Avantika", age: 20, job: "Developer"},
    {name: "Karan", age:22, job: "Captain"}

];

// function getNames(arr) {
//     return arr.map(person => person.name) ;
// }    

//Another function definition

const getNames = (arr) => {
    return arr.map(person => person.name) ;
}

console.log(getNames(myArray));
