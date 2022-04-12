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
    var randIndex = Math.floor(Math.random() * robotKeyComponents.powerSupply.length)
    var randPS = robotKeyComponents.powerSupply[randIndex];
    document.getElementById("ps").innerHTML = randPS;

    //variable rand_a is assigned a random item from the actuators list 
    var randIndex2 = Math.floor(Math.random() * robotKeyComponents.actuators.length)
    var rand_a = robotKeyComponents.actuators[randIndex2];
    document.getElementById("a").innerHTML = rand_a;

    //variable rand_m is assigned a random item from the electric motors list 
    var randIndex3 = Math.floor(Math.random() * robotKeyComponents.electricMotors.length)
    var rand_m = robotKeyComponents.electricMotors[randIndex3];
    document.getElementById("m").innerHTML = rand_m;

    //variable rand_s is assigned a random item from the sensors list 
    var randIndex4 = Math.floor(Math.random() * robotKeyComponents.sensors.length)
    var rand_s = robotKeyComponents.sensors[randIndex4];
    document.getElementById("s").innerHTML = rand_s;

    //variable rand_c is assigned a random item from the controller list 
    var randIndex5 = Math.floor(Math.random() * robotKeyComponents.controller.length)
    var rand_c = robotKeyComponents.controller[randIndex5];
    document.getElementById("c").innerHTML = rand_c;
    
}
