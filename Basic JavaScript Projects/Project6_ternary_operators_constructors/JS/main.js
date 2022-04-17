/* Project 6 - Ternary Operators Constructors
==============================================*/
//example 1: hieght check for riders
function ride_function() {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height >= 52) ? "Enjoy the ride! you meet the height requirement":"Sorry :( You are a bit too short" ;
    document.getElementById("ride").innerHTML = can_ride + " for this ride.";
}

//example 2: voter age check
function vote_function() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age >= 18) ? "Make a difference and Vote :)" : "Sorry :( you are not yet old enough to vote";
    document.getElementById("vote").innerHTML = can_vote;
}

//example 3: Vehicle constructor
function Vehicle(make, model, year, color) { //It is considered good practice to name constructor functions with an upper-case first letter
    this.Vehicle_make = make;  //In an object method, this refers to the object
    this.Vehicle_model = model;
    this.Vehicle_year = year;
    this.Vehicle_color = color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "red");
var Emily = new Vehicle("Jeep", "Trail Hawk ", 2019, " white and black");
var Erik = new Vehicle("Ford", "Pinto ", 1971," mustard");

function myFunction() {
    document.getElementById("keywords_and_constructors").innerHTML = "Erik drives a " + Erik.Vehicle_color + "-colored " + Erik.Vehicle_model + "manufactured in " + Erik.Vehicle_year;
}
function myFunction2() {
    document.getElementById("new_and_this").innerHTML = "Emily drives a " + Emily.Vehicle_color + "-colored " + Emily.Vehicle_model + "manufactured in " + Emily.Vehicle_year;
}

//example 4:keywords reserved
var Xnew = "Error: Uncaught SyntaxError SyntaxError: Unexpected token 'new'"; //when Keyword (ex: new) is used Error happens:Uncaught SyntaxError SyntaxError: Unexpected token 'new'
document.getElementById("kr").innerHTML = Xnew;        //Note: <script>tag needs to be at bottom of body for this to work
                                                      //Html needs to load so id="kr" is identified before the script is run.
                                                      // can also use window.onload with the function so it can wait till the DOM is loaded 


                                                      //example 5: write an Object Constructor function
//Constructor function for Person objects
function Person(first, last, age, residence) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.residence = residence;
}
//creating a Person Object
const myFriend_1 = new Person("Ruby", "Zamoroa", 27, "California");
//Display
function whoYouKnow() {
    document.getElementById("person1").innerHTML = "My friend's name is " + myFriend_1.firstName + " " + myFriend_1.lastName + " she is " + myFriend_1.age + " years old and lives in " + myFriend_1.residence;
}

//Example 5: Nested functions
var totalWins1 = 0;
var totalWins2 = 0;
function game1() {
    var p1, p2, winning, winningGame; //variables being used
    
    p1 = parseInt(document.getElementById("score1").value); //gets the score of player1
    p2 = parseInt(document.getElementById("score2").value);//gets the score of player 2 
    winning = (p1 > p2) ? player1_fun() : player2_fun();
    function player1_fun() {
        document.getElementById("result").innerHTML = "Player one won this game!";
        totalWins1++;
        console.log(p1);
        console.log(totalWins1);
    }
    function player2_fun() {
        totalWins2++;
        document.getElementById("result").innerHTML = "Player two won this game!";
        console.log(p2);
        console.log(totalWins2);
    }
    winningGame = (totalWins1 > totalWins2) ? "Player One is ahead and has won a total of " + totalWins1 + "games" : "Player two is ahead and has won a total of " + totalWins2 + "games";
    document.getElementById("status").innerHTML = winningGame;

}
