// null vs undefined in JavaScript

// undefined: variable declared but not assigned a value
let a;
console.log(a); // undefined

// null: explicitly assigned "no value"
let b = null;
console.log(b); // null

// Key differences
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (historical bug)

console.log(null == undefined);  // true (loose equality)
console.log(null === undefined); // false (strict equality)
