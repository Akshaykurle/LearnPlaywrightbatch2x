let a = 10

console.log(a);

function printHey() {
    console.log("hello Akshay");
    let a  = 20;
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a);
    }
    console.log("F ->", a);
}

console.log("G ->", a);

printHey();
