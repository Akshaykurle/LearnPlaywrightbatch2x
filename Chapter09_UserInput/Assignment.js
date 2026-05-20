let statusCode = 404; 

if (statusCode >= 200 && statusCode <= 299) {
    console.log("Success");
} 
else if (statusCode >= 300 && statusCode <= 399) {
    console.log("Redirection");
} 
else if (statusCode >= 400 && statusCode <= 499) {
    console.log("Client Error");
} 
else if (statusCode >= 500 && statusCode <= 599) {
    console.log("Server Error");
} 
else {
    console.log("Invalid");
}


    // Test Case Pass/Fail Verdict

let expected = "Login Successful";
let actual = "Login Successful";
let expected1= "Login Successful";
let actual1 = "Invalid Credentials";

if (expected === actual) {
    console.log("✅ Test Passed");
} else {
    console.log("❌ Test Failed");
}

if (expected1 === actual1) {
    console.log("✅ Test Passed");
} else {
    console.log("❌ Test Failed");
}


// Bug Severity Classifier

let impactScore = 9;

if (impactScore >= 9 && impactScore <= 10) {
    console.log("Severity: Critical — Block release");
} 
else if (impactScore >= 7 && impactScore <= 8) {
    console.log("Severity: High");
} 
else if (impactScore >= 4 && impactScore <= 6) {
    console.log("Severity: Medium");
} 
else if (impactScore >= 1 && impactScore <= 3) {
    console.log("Severity: Low");
} 
else {
    console.log("Invalid score");
}

// Build Health Reporter

let passPercentage = 95; 

if (passPercentage === 100) {
    console.log("🟢 Green Build");
} 
else if (passPercentage >= 90 && passPercentage <= 99) {
    console.log("🟡 Stable — Investigate failures");
} 
else if (passPercentage >= 70 && passPercentage <= 89) {
    console.log("🟠 Unstable");
} 
else if (passPercentage < 70 && passPercentage >= 0) {
    console.log("🔴 Broken Build — Block deployment");
} 
else {
    console.log("Invalid percentage");
}

// Login Lockout After Failed Attempts

let attempts = 2;

if (attempts === 0) {
    console.log("Login successful");
} 
else if (attempts === 1) {
    console.log("2 attempts left before lockout");
} 
else if (attempts === 2) {
    console.log("1 attempt left before lockout");
} 
else if (attempts >= 3) {
    console.log("🔒 Account Locked — Contact support");
} 
else {
    console.log("Invalid input");
}