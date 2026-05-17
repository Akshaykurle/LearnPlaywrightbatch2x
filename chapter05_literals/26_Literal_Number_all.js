// Number types in JavaScript

// Integer
let int = 42;
console.log(int, typeof int);

// Floating point
let float = 3.14;
console.log(float, typeof float);

// Scientific notation
let sci = 1.5e3; // 1500
console.log(sci);

// Hexadecimal (base 16)
let hex = 0xFF; // 255
console.log(hex);

// Octal (base 8) - ES6+
let oct = 0o77; // 63
console.log(oct);

// Binary (base 2) - ES6+
let bin = 0b1010; // 10
console.log(bin);

// BigInt (ES2020+)
let big = 9007199254740991n;
console.log(big, typeof big);

// Special numbers
let inf = Infinity;
let negInf = -Infinity;
let nan = NaN;

console.log(inf, negInf, nan);
console.log(typeof inf);  // "number"
console.log(typeof nan);  // "number" (NaN is still typeof "number")

// Number limits
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
