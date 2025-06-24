// ⚖️ Medium Question 2 – Function Scope + Hoisting
// Question:
// What will be the output of the following code and why?

// function testScope() {
//   console.log(a);
//   var a = 10;
//   console.log(a);
// }

// testScope();
// ❗ Explain how function scope and hoisting affect the output.

//Answer

function testScope() {
    console.log(a);
    var a = 10;
    console.log(a);
}
testScope();

// 1st console.log(a); results into undefined = is hoisted = Hoisting is the cone=cept in JavaScript wherein JS assumes all the variables declared at the top of any function i.e. at the first line of the start of any function code, so here in this case since the variable "a" is not defined explicitly by the user so JS assumes it to be an undefined declared variable

// 2nd console.log(a); results into 10 = is printed as it is since its declaration along with its initialisation
