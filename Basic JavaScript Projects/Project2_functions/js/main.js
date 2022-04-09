//this code will assign a color to a variable. Note that fontcolor() is no longer recommended
function modernFontColor(str, color) {
    return '<span style= "color: ' + color + '">' + str + '</span>';
}

//function that changes colors of a given element
function changeColor(newColor) {
    var elem = document.getElementById('p1');
    elem.style.color = newColor;
}