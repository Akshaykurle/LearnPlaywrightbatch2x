let str = "racecar";

let reversed = str.split("").reverse().join("");

console.log("Original String:", str);
console.log("Reversed String:", reversed);

if (str === reversed) {
    console.log("Palindrom");
} else {
    console.log("Not a Palindrom");
}


