/*=============================================
Project 11: Data Attribute
files: html_3.html, JavaScript_3.js,   CSS_?????.css(internal head)
===============================================*/
//Data attribute, Fictitious Universe characters
function displayChar(char) {
    var charType = char.getAttribute("data-char_type");
    document.getElementById("charOutput").innerHTML = charType + " can be found in the "+char.innerHTML+ " universe!";
}

