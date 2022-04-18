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
    var sentence = document.getElementById("search").innerHTML; //get the text and assigns it to var
    document.getElementById("search2").innerHTML = sentence.search("Jack"); //returns the position of the first match
}

////Example 4: toString() method
function toString_method() {
    var x = 19; //this is a number
    var x_string = x.toString(); //changes the data type to string
    document.getElementById("toString").innerHTML ="value = "+ x +" data type= "+typeof x;//writes out the typeof data of the variable
    document.getElementById("toString2").innerHTML = "value = "+ x_string +" data type = "+typeof x_string; //writes out the typeof data of the variable
}