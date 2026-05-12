// Assignment: JavaScript Concepts
// 1. Create a variable using var, let, and const
// 2. Write a function that demonstrates hoisting
// 3. Show the difference between var and let inside a block
// 4. Try reassigning a const variable and observe the error

// --- Part 1: Variable Declarations ---
var name = "Playwright";
let count = 0;
const maxRetries = 3;

// --- Part 2: Hoisting ---
console.log("Hoisted var:", status);
var status = "Active";

// --- Part 3: var vs let in block ---
if (true) {
    var x = 10;
    let y = 20;
    console.log("Inside block - var x:", x, "let y:", y);
}
console.log("Outside block - var x:", x);
// console.log("Outside block - let y:", y); // Would throw ReferenceError

// --- Part 4: const reassignment ---
const PI = 3.14;
// PI = 3.14159; // Uncomment to see: TypeError: Assignment to constant variable.

// --- Part 5: Function with local scope ---
function testScope() {
    var localVar = "I am local";
    console.log(localVar);
}
testScope();
// console.log(localVar); // Would throw ReferenceError
