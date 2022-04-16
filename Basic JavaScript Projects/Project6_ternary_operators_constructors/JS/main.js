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
