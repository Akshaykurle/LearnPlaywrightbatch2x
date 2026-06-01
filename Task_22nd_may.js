let side1 = 3
let side2 = 3
let side3 = 3

if (side1 === side2 && side2 === side3) {
    console.log("Equilateral Triangle");
}

else if (
    side1 === side2
){
    console.log("Isoscalous Triangle");
}

else {
    console.log("Scalene Triangle");
}


for (let i=1; i<=100; i++)

if (i%3 === 0 && i%5 === 0) {
    console.log("fizzbuzz");
}

else if (i%3 === 0){
    console.log("fizz");
}

else if (i%5 === 0){
    console.log("buzz");
}

else {
    console.log(i);
}