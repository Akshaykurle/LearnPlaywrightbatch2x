
let a = 40;
let b = 95;
let c = 55;

let max = (a > b)
            ? (a > c ? a : c)
            : (b > c ? b : c);

console.log("Maximum number is:", max);