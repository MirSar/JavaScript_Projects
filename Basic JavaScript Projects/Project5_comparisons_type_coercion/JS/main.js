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

//console.log() method
console.log(19 + 3);

//console.log() check of data value and data type
console.log(5 === "five"); //Return false by writing a different data type and different value
console.log(19 === 19); //Return true by ensuring to match the data type and value.
console.log("19" === 19); //Return false by writing a different data type but the same value for both.
console.log(19 === 27); //Return false by writing the same data type but a different value for both.

//Examples of Boolean Logic Operators &&, ||, and !
document.write("<br>"); // creating a new line
document.write("Boolean Logic Operator examples:");
document.write("<br>");
document.write(19 > 9 && 9 > 6); //True
document.write("&nbsp"); //adds a space; 
document.write(19 > 9 && 9 == 6); //False
document.write("&nbsp"); //adds a space; 
document.write(19 > 9 || 9 == 6); //True
document.write("&nbsp"); //adds a space; 
document.write(19 < 9 || 9 < 6); //False



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
    var x1 = parseInt(document.getElementById("x").value);//parseInt is necessary to change the string value to interger
    var y1 = parseInt(document.getElementById("y").value);// for proper comparison 
    
    document.getElementById("b1").innerHTML = x1 > y1;
    document.getElementById("isSame").innerHTML = x1 == y1; //are the two data the same?
    
    document.getElementById("b1").style.color = 'green'; //changes the color of the text
}

//checking data entry with triple equal method
function passCheck() {
    var pc11 = document.getElementById("pc1").value; // .value gives back string value; needed
    var pc22 = document.getElementById("pc2").value; // without .value typeof is object; wont work
    
    document.getElementById("ans").innerHTML = pc11 === pc22; //are the two data value and type the same?
    document.getElementById("ans").style.color = 'blue'; //changes the color of the text
    console.log(typeof (pc11)); //checking data's typeof
    console.log(typeof (pc22)); //checking data's typeof
}

//Boolean Logic Operator, Not !
function not_function() {
    document.getElementById("Not").innerHTML = !(19 > 13); //true becomes false

}
