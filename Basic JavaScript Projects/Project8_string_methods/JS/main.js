/*Project 8: String Methods
============================*/

//Example 1: Slice() method
function slice_method() {
    var sentence = document.getElementById("slice").innerHTML; //get the text and assigns it to var
    var section = sentence.slice(28, 32); //numbers indicate which char in the string will be cut out and displayed (starts at zero, end not included)
    document.getElementById("slice").innerHTML = section;
}

//Example 2: toUpperCase() method
function toUpperCase_method() {
    var sentence = document.getElementById("toUpperCase").innerHTML; //retrieves the text and assigns it to var
    document.getElementById("toUpperCase").innerHTML = sentence.toUpperCase(); //changes it to all uppercase
}

//Example 3: search() method
function search_method() {
    var sentence = document.getElementById("search").innerHTML; //get the text and assigns it to var sentence
    //var position = sentence.search("jack"); //cant do this for some reason ???? why
    var text1= "Jack "
    var text2 = "is at position ";
    var result = text1.concat(text2); // this concatenates text1 with text2
    document.getElementById("search2").innerHTML = result + sentence.search("Jack"); 

}

//Example 4: toString() method
function toString_method() {
    var x = 19; //this is a number
    var x_string = x.toString(); //changes the data type to string
    document.getElementById("toString").innerHTML ="value = "+ x +" data type= "+typeof x;//writes out the typeof data of the variable
    document.getElementById("toString2").innerHTML = "value = "+ x_string +" data type = "+typeof x_string; //writes out the typeof data of the variable
}

//Example 5: toPercision() method
function toPrecision_method() {
    let x = Math.sqrt(5); // calculates the square root of 5
    var goldenRatio = (1+x)/2; //golden ratio
    document.getElementById("toPrecision").innerHTML = goldenRatio.toPrecision(50); //gives the value up to 50 digits, which seems to be the max precision
    console.log(typeof goldenRatio); //check the data type; note if it was a string we can use parseInt() to change it to number.
}

//Example 6: toFixed() method
//toFixed() converts a number to a string, rounded to a specified number of decimals:
function toFixed_method() {
    let num = 19.123456789;
    let fixed_num = num.toFixed(3);

    document.getElementById("toFixed").innerHTML = "Full number = "+num;
    document.getElementById("toFixed2").innerHTML = "It is now fixed to 3 decimals: "+fixed_num;
}

//Example 7: valueOf() method:
//1- method returns the primitive value of a string.
//2-method does not change the original string.
//3- method can be used to convert a string object into a string
//Note: The valueOf() method is the default method for JavaScript strings. It is used internally by JavaScript. Normally, you will not use it in your code.
function valueOf_method() {
    let sheWrote = document.getElementById("inputValue").value; // gets the value of entered data... default state is String
    console.log(typeof sheWrote); //check its data type
    
    var x = sheWrote.valueOf(); // this just makes x = sheWrote technically it should also change it to string
    document.getElementById("valueOf").innerHTML = x;
    console.log(typeof x);
}