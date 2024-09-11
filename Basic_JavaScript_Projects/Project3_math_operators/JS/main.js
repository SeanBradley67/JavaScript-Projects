// Math Operators Assignment
function math() {
    var math = 2+2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + math;
}

function add() {
    var add = 3+2;
    document.getElementById("Add").innerHTML = "3 + 2 = " + add;
}

// Subtraction Assignment
function subtract() {
    var sub = 10-6;
    document.getElementById("Sub").innerHTML = "10 - 6 = " + sub;
}

// Multiplication and Division Assignment
function multiply() {
    var mult = 7*15;
    document.getElementById("Mult").innerHTML = "7 x 15 = " + mult;
}

function divide() {
    var divide = 32/8;
    document.getElementById("Div").innerHTML = "32 / 8 = " + divide;
}

// Multiple Operators Assignment
function all_ops() {
    var math = (4 + 8) * 3 / 2 - 1;
    document.getElementById("All_Operators").innerHTML = "(4 + 8) x 3 / 2 - 1 = " + math; 
}


// Modulus Operator Assignment
function modulus_operator() {
    var modulus = 47 % 5;
    document.getElementById("Mod").innerHTML = 
    "When you divide 47 by 5 you have a remainder of: " + modulus;
}

// Negation Operator Assignment
function negative() {
    var negative = 17;
    document.getElementById("Neg").innerHTML = -negative;
}

// Increment and Decrement Assignment
function increment() {
    var increment = document.getElementById("IncrementText").innerHTML;

    increment++;

    document.getElementById("IncrementText").innerHTML = increment;
}

function decrement() {
    var decrement = document.getElementById("DecrementText").innerHTML;

    decrement--;

    document.getElementById("DecrementText").innerHTML = decrement;
}

// Math.random Assignment
function random() {
    document.getElementById("Rand").innerHTML = Math.random()*10;
}