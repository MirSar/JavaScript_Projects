//this code will assign a color to a variable. Note that fontcolor() is no longer recommended
function modernFontColor(str, color) {
    return '<span style= "color: ' + color + '">' + str + '</span>';
}

//function that changes colors of a given element p1
function changeColor(newColor) {
    var elem = document.getElementById('p1');
    elem.style.color = newColor;
}

//function for concatenation
function concatFunction() {
    var sentence = "I'm learning to ";
    sentence += "Code with JavaScript!";
    document.getElementById("concatenate").innerHTML = sentence;
}


//Function for converting from Fahrenheit to Celsius

function toCelsius(f) {
    return (5/9) * (f-32);
}
// Question: why must the code below be written on HTML file?
//document.getElementById('p3').innerHTML = toCelsius(69);
//document.getElementById("p2").style.color = "red";


