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
