//displaying the date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');  //padStart(2,'0') gives us a 2 digit number
var mm = String(today.getMonth() + 1).padStart(2, '0'); //Note that January is 0! so we add 1
var yyyy = today.getFullYear();

today = 'Today is '+ mm + '/' + dd + '/' + yyyy;
document.getElementById("date").innerHTML = today;

