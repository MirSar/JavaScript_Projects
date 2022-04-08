// alert("Say it with me 'Peace to the World!'");

/* for multi-line comment use this method
which is same as CSS method of commenting */

//window.alert("Greetings World!"); ... old code commented out

// another method of displaying text
// document.write("Hi again, world"); //this writes it on the page

//assigning variable 
var A = "Welcome back! It's great to see you here";

//document.write(A); ... this code is commented out

window.alert(A);


//using backslash as escaping for quotes and + to concatenate multiple strings
document.write("\"Be who you are and say what you feel,"
    + " because those who mind don\'t matter and those who matter don\'t mind.\""
    + " -Dr.Seuss<br>");


//another way of using concatenation, with variables
var B = "concatenated" + " string";
document.write(B);

document.write("<br><br>"); //adding 2 line spaces

//multiple variables in one statement
var family = "Sarwary".fontcolor("green"), name1 = "Mir".fontcolor("blue"), age = 45, profession = "Engineer", interest = "computer science".fontcolor("red");

family.fontcolor("green");

document.write(name1 + " " + family + " is an " + profession + " and likes " + interest);

document.write("<br>"); //adding line space

//here is an expression which results in a value
document.write(33 + 33 + 33);

document.write('<br>');

//this code will assign a color to a variable. Note that fontcolor() is no longer recommended
function modernFontColor(str, color) {
    return '<span style= "color: ' + color + '">' + str + '</span>';
}

document.write(modernFontColor(profession, "orange")); //does not work to change the var color if it is already assigned with fontcolor()



