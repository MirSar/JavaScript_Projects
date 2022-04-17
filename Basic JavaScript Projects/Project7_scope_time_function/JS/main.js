/* Project 7 Scope Time Function
=================================*/

// Global Variable
var GA, GB, GC;
GA = 3;
GB= "Winner"
GC = true;

//Example 1: using console.log to debug use of local variable
function A() {
    var a, b;  //Local variables
    a = (10 + GA);
    console.log(a);
}
function B() {
    var c, d;  //Local variables
    d = (10 + a); //if a variable from function A() is used we get ReferenceError: a is not defined
    console.log(d);
}
try {           //using try and catch method to display the error
    A();
    B();  //this function has an error coded 
}
catch (err) {         //works with try method to catch and display an error
    document.getElementById("error1").innerHTML = err;    
}

//Example 2: Method Assignment, using Date().getHours()
function wakeUpCall() {
    if (new Date().getHours() > 5 && new Date().getHours() < 6) {
        document.getElementById("m1").innerHTML = "Wake UP for Success!!!";
    }
    else if (new Date().getHours() > 6 && new Date().getHours() < 18) {
        document.getElementById("m1").innerHTML = "Hard work builds good character";
    }
    else {
        document.getElementById("m1").innerHTML = "I hope you had a successful day.";
    }
}



  


