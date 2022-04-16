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
const myNiece_1 = new Person("Rebecca", "Zamoroa", 27, "Tracy");
//Display
document.getElementById("person1").innerHTML = "My neice's name is " + myNiece_1.firstName + " " + myNiece_1.lastName + " she is " + myNiece_1.age + " years old and lives in " + myNiece_1.residence;

