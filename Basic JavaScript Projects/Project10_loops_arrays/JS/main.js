/*========================
Project 10: Loops & Arrays
==========================*/
//Example 1: while loop
function call_loop() {
    var repeatIt = document.getElementById("repeatIt").value;
    var name = document.getElementById("name").value;
    const complements = ["good", "creative", "innovative", "great", "smart", "healthy", "kind", "sexy", "generous", "fun", "honest", "just", "exciting"];
    let compLength = parseInt(complements.length); //gets the number of items in the Array
    let i = 0; //used for the while loop
    let randcomp;
    let textMe="";  // where the text generated from the while loop will be stored
                    //this will also clear out the previous list
    while (i < repeatIt) {
        randcomp = Math.floor(Math.random() * compLength);
        textMe +=name + " is a person that is known to be " + complements[randcomp]+"<br>";
        i++
    }
    document.getElementById("textMe").innerHTML = textMe; //prints out
}

//Example 2: for loop
function for_loop() {
    var name = document.getElementById("name2").value;
    var content = "";
    const instruments = ["Electric Guitar", "Piano", "Drums", "Saxophone", "Bass Guitar", "Acoustic Guitar", "Violin", "Keyboard", "Voice"];

    for (i = 0; i < instruments.length-1; i++){ //not including the last item
        content += instruments[i] + " , ";
    }
    if (i = instruments.length) {  // to include "and" before the last item of the list
        content += "and " + instruments[instruments.length-1];
    }
    document.getElementById("list_of_instruments").innerHTML= name +"\'s collection of instruments: "+ content;

}

//Example 3: Array
{
    let vault = []; //let array has block scope therefore used only for the two functions below
    function array_function() { //this function displays the content of the array
        document.getElementById("array2").innerHTML = vault;
    }
    function storeItem() { //this function adds new content to the array
        let newItem = document.getElementById("newItem").value; //gets new item value, let variable has block scope
        vault.push(newItem); //adds new item to array
        document.getElementById("array").innerHTML = "You have " + vault.length + " items in the vault.";
    }
}
//Example 4: Const keyword
const BioRobotics = {
    Intelligence: "Advanced AI",
    Power: "Dielectric Elastomers",
    sensePerception: "Electronic Communication Mechanisms",
    Dexterity: "Reinforcement Learning & sophisticated hardware",
}
// buttons to display the values of properties
function constant_function1() {
    document.getElementById("constant").innerHTML ="Your BioRobot is equipped with "+ BioRobotics.Intelligence;
}
function constant_function2() {
    document.getElementById("constant").innerHTML ="Your BioRobot is equipped with "+ BioRobotics.Power;
}
function constant_function3() {
    document.getElementById("constant").innerHTML ="Your BioRobot is equipped with "+ BioRobotics.sensePerception;
}
function constant_function4() {
    document.getElementById("constant").innerHTML ="Your BioRobot is equipped with "+ BioRobotics.Dexterity;
}
//If Hobby is added this will display value
function constant_function5() {
    document.getElementById("constant").innerHTML ="Your BioRobot's hobby is "+ BioRobotics.Hobby;
}

//modifying properties
function modConstant_function1() {
    let inputvalue = document.getElementById("modConst").value; //let variable has block scope
    BioRobotics.Intelligence = inputvalue;
}
function modConstant_function2() {
    let inputvalue = document.getElementById("modConst").value;
    BioRobotics.Power = inputvalue;
}
function modConstant_function3() {
    let inputvalue = document.getElementById("modConst").value;
    BioRobotics.sensePerception = inputvalue;
}
function modCzonstant_function4() {
    let inputvalue = document.getElementById("modConst").value;
    BioRobotics.Dexterity = inputvalue;
}
//if hobby is added then this will allow for mod
function modConstant_function5() {
    let inputvalue = document.getElementById("modConst").value;
    BioRobotics.Hobby = inputvalue;
}
//Adding a new property with value
function addNewProperty_Const() {
    BioRobotics.Hobby = "Serving my assigned human";    
}

//Example 5: Return example using product of two numbers
function productReturn(){ 
    
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    
    let result = productFunction(num1, num2);
    document.getElementById("ex5").innerHTML = result;
    
    function productFunction(num1, num2) {
        return num1 * num2;
    }
}
