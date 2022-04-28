/*********************************************
Project 13: Calculator
Linked to calculator.html
content="A basic HTML, CSS and JS calculator"
Author: Mirwais Sarwary
**********************************************
**********************************************/
/* Let's engineer the functionality into this :) */

//creating an object to keep track of values
const Calculator = {
    //displayed on the screen
    Display_Value: '0',
    //holding the first operand for any expressions we set in the null
    First_Operand: null,
    //checking to see if the second operand has been input in
    Wait_Second_Operand: false,
    //this is to hold the operator, intially setting to null
    operator: null,
};

//Modifies values each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    //checking to see if Wait_Second_Operand is true and if so then
    //set Display_Value to the key that was clicked.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //overwrites Display_Value if the current value is 0, otherwise it adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//This section handles decimal points
function Input_Decimal(dot) {
    //ensuring that accidental clicking of the decimal point doesn't cause bugs in operation
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //If the Display_Value doesn't contain a decimal point then add a decimal point
        Calculator.Display_Value += dot;
    }
}

//this section handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    //When Operator key is pressed, convert displayed input to type = number and then store
    //the result in Calculator.First_Operand if it doesn't already exist.
    const Value_of_Input = parseFloat(Display_Value);
    //Checks if an operator already exists and if Wait_Second_Operand is true,
    //then updates the operator and exits from the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        //checks if an operator already exists
        const Value_Now = First_Operand || 0;
        //If operator exists, property lookup is performed for the operator in
        //the Perform_Calculation object and the function that matches the operator is executed
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //adding a fixed amount of numbers after the decimal
        result = Number(result).toFixed(9)
        //this will remove any trailing 0's
        result =(result * 1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Second_Operand = false;
    Calculator.operator = null;
}

//updates the screen with the contents of the Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();

//this section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //The target variable is an object that represents the element that was clicked
    const {target} = event;
    //if the element that was clicked on is not a button, exit the function
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //ensures that AC clears the numbers from the calculator
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})