var v = 10;
let l = 30; 
const c = 3.14;

var browser = "chrome";
var browser = "firefox";
browser = "edge";

var testcases = ["login", "logout", "Signup"];

for (var i = 0; i < testcases.length;i++) {
    console.log("Running test:", testcases[i]);
    }

console.log("Loop counter leaked outside:", i);