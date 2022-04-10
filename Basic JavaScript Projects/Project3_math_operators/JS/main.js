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
