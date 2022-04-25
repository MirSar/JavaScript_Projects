/*=============================================
Project 11: Basic Contact Form 
files: html_2.html, JavaScript_2.js, CSS_1.css
===============================================*/
//Form validation code: if a required field is empty it will alert the user
function validationForm() {
    let fname = document.forms["contactForm"]["fname"].value;
    let lname = document.forms["contactForm"]["lname"].value;
    let email = document.forms["contactForm"]["email"].value;
    if (fname == "") {
        document.getElementById("fname").style.background = "red";
        alert("Please enter your first name");
        return false;
    }
    else if (lname == "") {
        document.getElementById("lname").style.background = "red";
        alert("Please enter your last name");
        return false;
    }
    else if (email == "") {
        document.getElementById("email").style.background = "red";
        alert("Please enter your email");
        return false;
    }
}
