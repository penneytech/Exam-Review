// Variables

let myVariable = 100;

myVariable = 140;

// Control Flow

// Simple IF statement
if (myVariable == 100) {
    console.log("The variable is 100!");
}

// IF / ELSE 
if (myVariable == 100) {
    console.log("The variable is 100!");
} else {
    console.log("The variable is NOT 100!");
}

// IF / ELSE IF / ELSE
if (myVariable == 100) {
    console.log("The variable is 100!");
} else if (myVariable == 140) {
    console.log("The variable is 140!");
} else {
    console.log("The variable is NOT 100!");
}

// Functions 

// Normal Function
function myNormalFunction() {
    console.log("Normal function is running");
}

myNormalFunction(); // Call the function

//  Function With Parameters
function myParameterFunction(message) {
    console.log(message);
}

myParameterFunction("Function With Parameters Is Running!");

// Function With Return

function myReturnFunction() {
    let x = 5;
    let y = 2;

    return x + y;
}

let result = myReturnFunction(); 
console.log(result);

// Arrays

const myArray = ["First Item", "Second Item"];
console.log(myArray[0]) // Console log "First item"
myArray[1] = "No Item Found"; // Change the value of "Second Item"


