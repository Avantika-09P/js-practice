const myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString()); 
console.log(typeof myDate); 

const myCreatedDate = new Date(2025, 0, 1, 12, 0, 0); // January 1, 2025 at 12:00:00 PM
console.log(myCreatedDate);
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toTimeString());
console.log(myCreatedDate.toLocaleDateString());
console.log(typeof myCreatedDate);

const newCreatedDate = new Date("01-12-2025 12:00:00"); // December 13, 2025 at 12:00:00 PM
console.log(newCreatedDate);
console.log(newCreatedDate.toString()); 
console.log(newCreatedDate.toDateString());
console.log(newCreatedDate.toTimeString());
console.log(newCreatedDate.toLocaleDateString());
console.log(typeof newCreatedDate);