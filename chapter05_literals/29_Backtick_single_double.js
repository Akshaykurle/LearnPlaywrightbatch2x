// String literals: single quotes, double quotes, and backticks (template literals)

// Single quotes
let single = 'Hello with single quotes';
console.log(single);

// Double quotes
let double = "Hello with double quotes";
console.log(double);

// Backticks (template literals) - ES6+
let name = 'Akshay';
let template = `Hello ${name}, welcome!`;
console.log(template);

// Multi-line with backticks
let multi = `This is line one
This is line two
This is line three`;
console.log(multi);

// Expression interpolation
let a = 10, b = 20;
console.log(`Sum of ${a} and ${b} is ${a + b}`);

// Escaping in single vs double vs backtick
console.log('It\'s working');   // escape with backslash
console.log("She said \"hello\""); // escape with backslash
console.log(`Backticks: no need to escape ' or "`); // no escaping needed

// Backticks for tagged templates (advanced)
function tag(strings, ...values) {
  console.log(strings);
  console.log(values);
  return 'processed';
}
let result = tag`Hello ${name}, you are ${a + b} years old`;
console.log(result);
