// Question:
// Write a function groupByAge that takes an array of people objects and returns an object where people are grouped by their age.

//Answer:

const myArray = [
    {name: "Eleven", age:20},
    {name: "Mikes", age:20},
    {name: "Nancy", age:25 },
    {name: "Jonathan", age: 25}
];

function groupByAge(arr) {
    return arr.reduce((accumulator_array, person) => {
        const age = person.age;

        if(!accumulator_array[age]){
            accumulator_array[age] = [];
        }

        accumulator_array[age].push(person);
        return accumulator_array;
    }, {})
}
console.log(groupByAge(myArray));
