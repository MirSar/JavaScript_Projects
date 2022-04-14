/*PROJECT 5 - COMPARISONS TYPE COERCION
========================================*/
//the following identifies the type of data
document.write(typeof "What type am I?");
document.write("&nbsp"); //adds a space; can also use \n  or \xa0; 
document.write(typeof true);
document.write("\n");
document.write(typeof 19);
document.write("<br>"); // this adds a line break.
//Coercion example
document.write("An example of a Coercion"+"\n");
document.write("19" + 45);
document.write("<br>");

// NAN examples
function nanFunction() {
    var x = 0 / 0;
    document.getElementById("NAN").innerHTML = "displayed as => "+ 0 / 0;
    document.getElementById("NAN2").innerHTML = "Is this a NAN? " + isNaN('x');
}

// to display infinity
function nanFunction2() {
    var x = 1E309;
    document.getElementById("NAN3").innerHTML = "displayed as => "+ 1E309;
    document.getElementById("NAN4").innerHTML = "Is this a NAN?  " + isNaN('x');
}

//to display negative infinity
function nanFunction3() {
    var x = -1E309;
    document.getElementById("NAN5").innerHTML = "displayed as => "+ -1E309;
    document.getElementById("NAN6").innerHTML = "Is this a NAN?  " + isNaN('x');
}

//boolean examples
function booboo() {
    var x1 = document.getElementById("x").value;
    var y1 = document.getElementById("y").value;
    document.getElementById("b1").innerHTML = x1>y1; //!!!!this does not seem to work for negative numbers???
    document.getElementById("b1").style.color = 'green'; //changes the color of the text
    document.getElementById("checkx").innerHTML = x1; // display the x1 value as a check
    document.getElementById("checky").innerHTML = y1; //display the y1 value as a check
}

//console.log() method
console.log(19 + 3);
