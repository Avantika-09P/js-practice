const myArray = [1, 2, 3, 4, 5];

for (const num of myArray) {
    // console.log(num);
}

const myString = "Hello World";
for (const char of myString) {
    // console.log(`Character: ${char}`);
}

const map = new Map();
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("UK", "United Kingdom")
let i=0;  //since in js const values cannot be reassigned or incremented, we use let here
for (const pair of map) {
    // console.log(`Key ${i+1}: ${pair[0]}, Value ${i+1}: ${pair[1]}`);
    i++;
}


//2nd method
let index = 0;
for (const [key, value] of map) {
    // console.log(`Key ${index+1}: ${key}, Value ${index+1}: ${value}`);  
    index++;
}

const myObject = {
    name: "Steve",
    age: 30,
    city: "New York",
    country: "USA"
}

for (const [key, value] of Object.entries(myObject)) {
    // console.log(`Key: ${key}, Value: ${value}`);
    
}

//2nd method :
for (const key in myObject) {
    // console.log(`${key} :- ${myObject[key]}`);
}