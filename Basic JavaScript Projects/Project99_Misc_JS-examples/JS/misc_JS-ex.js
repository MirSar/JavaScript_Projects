/*****************************************
XML variables decalred
******************************************/
var XML_Parser, XML_Document;
//creates a text string
var Movie = 
    "<movie>"+ 
        "<title>Inception</title>" +
        "<director>Christopher Nolan</director>" +
        "<starring>Leonardo DiCaprio, Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Elliot Page, Tom Hardy, Cillian Murphy, Tom Berenger, Michael Caine</starring>" +
        "<year>2010</year>" +
    "</movie>";
//creates an XML DOM parser
XML_Parser = new DOMParser();
//creates a new XML DOM object using the text string
XML_Document = XML_Parser.parseFromString(Movie, "text/html");

document.getElementById("XML_Example").innerHTML= XML_Document.getElementsByTagName("title")[0].childNodes[0].nodeValue;

/**********************************************
For the Form phone number Validation
***********************************************/
//using Regex in javascript
function ValidatePhoneNumber(input_str) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/; //this is the pattern the phone number is tested to
    return re.test(input_str);
};

function validateForm(event) {
    var phone = document.getElementById('phoneNum').value;//getting the input, phone
    if (!ValidatePhoneNumber(phone)) { // checking to a pattern
        document.getElementById('phone_error').classList.remove('hidden'); //if not true - removes class hidden
    } else {
        document.getElementById('phone_error').classList.add('hidden'); //adds class hidden
        alert("validation success")
    }
    event.preventDefault(); //so that our program doesn't recieve conflicting commands
};

document.getElementById('myForm_1').addEventListener('submit', validateForm);

/******************************************
PopUp Contact form
*******************************************/
function openPopUpForm() {
    document.getElementById("myForm_2").style.display = "block";
}
function closePopUpForm() {
    document.getElementById("myForm_2").style.display = "none";
}

/******************************************
slideShow challenge
*******************************************/
$(document).ready(function () { //when the document is ready
   
    $(".slideShow img:gt(0)").hide(); //selects img elements with index num greater than 0; hide all except for the first image

    setInterval(function () { //iterates through the images every few seconds
        $('.slideShow :first-child').fadeOut(1300) //first img to fadeOut
            .next('img').slideDown(1300) //the next img to slideDown
            //end() resets jQuery's internal reference back to the original selection (first-child being appended to end of .slideShow element)
            .end().appendTo('.slideShow'); //takes the first img and append it to the end of the stack
    }, 3000);
});

/******************************************
JSON.stringify() and JSON.parse()
*******************************************/
$(document).ready(function () {
    //create JS dictionary object
    var pet = {
        name: "Ronin",
        type: "dog",
        breed: "GSD & Huskie",
        color: "brown, white, and black",
        hobby: "being a good dog"
    };
    //convert JS object to string format
    var JSONstring = JSON.stringify(pet);
    //output the string format
    $("#petFile").click(function () {
        $("#jsonOutput").html("Your requested file: " + "<br>" + JSONstring);
    });

    //coverting string format back to JS object with parse()
    var petStringToObj = JSON.parse(JSONstring);
    
    //accessing the reverted object
    $("#petName").click(function () {
        $("#jsonOutput").html("My name is " + petStringToObj.name);
        $("#jsonStuff").css({"background-image": "url('./images/Ronin_pup.png')", "color":"white"}); //change CSS background and color
    });
    $("#petType").click(function () {
        $("#jsonOutput").html("The best type ever, which is "+ petStringToObj.type);
    });
    $("#petBreed").click(function () {
        $("#jsonOutput").html("My breed is "+ petStringToObj.breed);
    });
    $("#petColor").click(function () {
        $("#jsonOutput").html("My colors are "+ petStringToObj.color);
    });
    $("#petHobby").click(function () {
        $("#jsonOutput").html("I love " + petStringToObj.hobby);
    });

    //Storing data to my local storage
    var myStorage = localStorage.setItem("name", "CoffeeBean Ro");
    
    //accessing pet name from local storage
    $("#petName2").click(function () {
        $("#jsonOutput").html("My name from the local Storage is " + localStorage.getItem("name"));
    });


});
