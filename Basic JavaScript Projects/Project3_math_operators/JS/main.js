//This is JS code for Project3_math_operations
//-----------------------------------------------------------------

//To use the addEventListener()method to execute a function
// in HTML use: <button id="add_Btn">click to add</button>
//in JS include: document.getElementById("add_Btn").addEventListener("click", add_Function);

//addition function
function add_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2+2= " + addition;
}

//Subtraction function
function sub_Function() {
    var subtraction = 9 - 6;
    document.getElementById("Math").innerHTML = "9-6= " + subtraction;    
}

//multiplication function
function multiply_Function() {
    var multiply = 9 * 3;
    document.getElementById("Math").innerHTML = "9*3= " + multiply;
}

//division function
function divide_Function() {
    var divide = 45 / 19;
    document.getElementById("Math").innerHTML = "45 / 19= " + divide;
}

//simple math function
function simple_math() {
    var calculateIt = (1+2)*10/2-5;
    document.getElementById("Math").innerHTML = "(1+2)*10/2-5 = " + calculateIt;
}

//division operation, find the remainder --> % symbol
function simple_math2() {
    var division_remainder = 45 % 19;
    document.getElementById("Math").innerHTML = "45 divided by 19 gives us a remainder of " + division_remainder;
}

//negation operator, which is also know as a unary operator
function negation_Operator() {
    var x = 19;
    document.getElementById("Math").innerHTML = "negation operator of 19 is " + -x;
}

//example of increment and decrement of a variable
function increment() {
    var m = document.getElementById("x").value;
    m++;
    document.getElementById("Math").innerHTML = m;
}
function decrement() {
    var n = document.getElementById("y").value;
    n--;
    document.getElementById("Math").innerHTML = n;
}

//Random number generator between 0 to 114
function randomNum() {
    var randx = Math.random() * 114;
    document.getElementById("Math").innerHTML = randx;
}
    
    
  