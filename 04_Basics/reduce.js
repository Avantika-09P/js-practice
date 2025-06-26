const myNums = [1, 2, 3, 4, 5];

const myReduce = myNums.reduce(function (accumulator, current_value){
    return accumulator + current_value;
}, 0);

// console.log(myReduce);

//2nd method:
const Reduce2 = myNums.reduce((accumulator, current_value) => (accumulator + current_value), 0); 
// console.log(Reduce2);

const Shopping_Cart = [
    {
        item: "js course",
        price: 299
    },
    {
        item: "python course",
        price: 999
    },
    {
        item: "mobile dev course",
        price: 5999
    },
    {
        item: "data science course",
        price: 12999
    }
];

const Total_Price = Shopping_Cart
                    .reduce((accumulator, current_value) => (accumulator + current_value.price), 0);
console.log(Total_Price);
