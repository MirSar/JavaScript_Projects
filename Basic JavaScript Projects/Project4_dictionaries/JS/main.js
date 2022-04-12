/*=========================
JavaScript Dictionary stuff
===========================*/

function my_Dictionary() {
    var robotKeyComponents = {
        powerSupply: ["battery ", "hydraulic ", "solarPower ", "pneumatic "],
        actuators: ["stepperMotors ", "hydraulicCylinders ", "supercoiledPolymer ","thermalMagnetic "],
        electricMotors: ["dcMotors ", "acMotors "],
        sensors: ["light ","sound ", "proximity ", "tactile ", "temperature ", "positioning ", "acceleration "],
        controller: ["linearMotion ", "rotationMotion ", "sensorFeedback ", "systemDynamics "],
    }
    //variable randPS is assigned a random item from the powersupply list
    //var randPS =robotKeyComponents.powerSupply[Math.floor(Math.random() * powerSupply.length)];
    //document.getElementById("ps").innerHTML = randPS;
   

    //key value is sent to HTML id
    document.getElementById("ps").innerHTML = robotKeyComponents.powerSupply;
    document.getElementById("a").innerHTML = robotKeyComponents.actuators;
    document.getElementById("m").innerHTML = robotKeyComponents.electricMotors;
    document.getElementById("s").innerHTML = robotKeyComponents.sensors;
    document.getElementById("c").innerHTML = robotKeyComponents.controller;
}
