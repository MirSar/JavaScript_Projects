/*===================================  Project 9: Countdown & Slideshow  ==================================
==========================================================================================================*/
//Example 1: Timer that will countdown by secs.
function countdown() {
    var seconds = document.getElementById("seconds").value; //user input for duration of time

    function tick() {
        seconds = seconds - 1; //countdown, decrements
        timer.innerHTML = seconds; //displays the seconds in <p id=timer>
        var time = setTimeout(tick, 1000); //program is pausing for 1,000 ms (1sec) before it calls "tick" **must be above if statement to function properly
        if (seconds == -1) {  //indicates time has run out at zero sec
            alert("Time's up!"); //displayed when time runs out
            clearTimeout(time); //clears a timer set with the setTimeout() method.
            timer.innerHTML = ""; //clears the countdown display area
        }
    }
    tick();
}

//EXample 2: Slide Show;  type = Carousel 

let slideIndex = 1;
showSlides(slideIndex);

// Next/Previous controls
function plusSlides(n) { //different values for n is given in HTML file
    showSlides(slideIndex += n);
}

//Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dots");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";  //important to have space with added class name " active"//className property can retrieve or set a class to HTML elements
    // using += --> gives a case where you can add a new class to an element and keep the old one
}
