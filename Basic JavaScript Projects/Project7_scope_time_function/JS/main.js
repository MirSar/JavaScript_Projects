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

//Example3: Guessing Game using if, else statement
    //global varialble
    var myNum;
    //functon to create a random number
    function thinkOfNum() {
        myNum = Math.floor(Math.random() * 101);
        document.getElementById("readyToPlay").innerHTML = "I'M READY! and it's a really GOOD Number.";
    }
    //function to compare your guess with the random num
    function guessingGame() {
        var guessNum, standDev, lowNum, highNum; //local variables

        guessNum = parseInt(document.getElementById("guess").value);
        standDev = parseInt(document.getElementById("sd").value);
        lowNum = guessNum - standDev;
        highNum = guessNum + standDev;

        if (myNum >= lowNum && myNum <= highNum) {
            document.getElementById("gameResult").innerHTML = "You must be a psychic! You guessed right! the number was = " + myNum;
        }
        else if (myNum > highNum) {
            document.getElementById("gameResult").innerHTML ="too low guess again";
        }
        else if (myNum < lowNum) {
            document.getElementById("gameResult").innerHTML ="too high guess again";
        }
        else {
            document.getElementById("gameResult").innerHTML ="You have to Guess to play!";   
        }

    }

//Example4: Time of the day example
    function time_function() {
        var Time = new Date().getHours();
        var Reply;

        if (Time < 12 == Time > 0) {
            Reply = "It is morning time!";
        }
        else if (Time >= 12 == Time < 18) {
            Reply = "It is afternoon!";
        }
        else {
            Reply = "It is evening time!";
        }
        document.getElementById("time_of_day").innerHTML = Reply;
    }
  


