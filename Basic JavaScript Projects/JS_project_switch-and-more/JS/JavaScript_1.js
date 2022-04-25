/*=========================
Project: Switch Statement
===========================*/
function colorFun() {
    var colorOutput;
    var colors = document.getElementById("colorInput").value;
    var colorString_y = "Yellow power ring is all about FEAR!";
    var colorString_g = "The Green power ring is fueled by WILLPOWER.";
    var colorString_r = "The Red power ring makes you pissed off, RAGE";
    var colorString_b = "The Blue power ring is HOPE and helping others";
    var colorString_o = "The Orange power ring wants you to want everything, GREED";
    var colorString_s = "The Star Sapphire ring needs to save all, LOVE";
    var colorString_i = "The Indigo power ring spreads COMPASSION";
    var colorString_w = "The White power ring is LIFE";
    var colorString_bl = "The Black power ring is NIGHTMARE Fuel, DEATH";
    SS_output.style.fontSize="larger"; //changes the font size
    //switch statement
    switch (colors) {
        case "Red":
            colorOutput = colorString_r + " Use it wisely";
            SS_output.style.color = "red"; //changes the color of the output
            break;
        case "Yellow":
            colorOutput = colorString_y + " Use it wisely";
            SS_output.style.color = "yellow"; //changes the color of the output
            break;
        case "Green":
            colorOutput = colorString_g + " Use it wisely";
            SS_output.style.color = "green"; //changes the color of the output
            break;
        case "Blue":
            colorOutput = colorString_b + " Use it wisely";
            SS_output.style.color = "blue"; //changes the color of the output
            break;
        case "Orange":
            colorOutput = colorString_o + " Use it wisely";
            SS_output.style.color = "orange"; //changes the color of the output
            break;
        case "Sapphire":
            colorOutput = colorString_s + "use it wisely";
            SS_output.style.color = "sappire"; //changes the color of the output
            break;
        case "Indigo":
            colorOutput = colorString_i + " Use it wisely";
            SS_output.style.color = "indigo"; //changes the color of the output
            break;
        case "White":
            colorOutput = colorString_w + " Use it wisely";
            SS_output.style.color = "white"; //changes the color of the output
            break;
        case "Black":
            colorOutput = colorString_bl + " Use it wisely";
            SS_output.style.color = "black"; //changes the color of the output
            break;
        default:
            colorOutput = "Please enter your choice EXACTLY as written on the above list";
            //break; is not needed for default case.
    }
    document.getElementById("SS_output").innerHTML = colorOutput;
}  

//Example 2: ByClassName() method
function byClassName_fun() {
    var randnum = Math.floor(Math.random()*3); //gives us 0,1, or 2
    var output = document.getElementsByClassName("ex2-1"); //gets all of elements with that class name
    output[randnum].style.color = "green";
    output[randnum].style.font = "19px Cursive";
    output[randnum].innerHTML = "I changed! ;)";
    
}

//Example 3: Canvas element
function canvas_fun() {
    var context = document.getElementById("canvas").getContext("2d"); //drawing on 2d canvas

    //create gradient
    var grad = context.createRadialGradient(180, 162, 130,180, 162, 60);
    grad.addColorStop(0, "green");
    grad.addColorStop(1, "white"); 
    grad.addColorStop(.5, "gold");
    // fill with gradient
    context.fillStyle = grad;
    context.fillRect(50, 85, 300, 200);
    
    //create smily face
    context.strokeStyle = "blue"; // outline will be blue color
    context.beginPath(); //the start of image
    context.arc(180, 162, 70, 0, Math.PI * 2, true); //face full as a circle
    context.moveTo(230, 162); // move for the smile location
    context.arc(180, 162, 50, 0, Math.PI, false); //smile arc
    context.moveTo(155, 135);
    context.arc(150, 135, 5, 0, Math.PI * 2, true); //eye
    context.moveTo(215, 135);
    context.arc(210, 135, 5, 0, Math.PI * 2, true); //eye
    context.font = "25px Cursive"; //text font style
    context.textAlign = "center"; //center the text around 215 mark
    context.fillText("Smile when coding", 200, 60); //text
    context.stroke(); //end of image
}