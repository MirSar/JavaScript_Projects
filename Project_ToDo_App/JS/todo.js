//displaying the current date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');  //padStart(2,'0') gives us a 2 digit number
var mm = String(today.getMonth() + 1).padStart(2, '0'); //Note that January is 0! so we add 1
var yyyy = today.getFullYear();

today = 'Today is '+ mm + '/' + dd + '/' + yyyy;
document.getElementById("date").innerHTML = today;

//This function gets the task from input
function get_todos() {
    //creates an array of tasks that are inputed
    var todos = new Array;
    //Retrieves tasks that were saved in the web browser memory
    var todos_str = localStorage.getItem('todo');
    //If the retrieved task is not null then JSON.parse will make tasks a JS object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

//This adds the inputed task to the get_todos function array
function add() {
    //takes the inputed task as a variable
    var task = document.getElementById('task').value;

    //setting todos as the get_todos function
    var todos = get_todos();
    //adding the new task to the array
    todos.push(task);

    //converting the task input to a JSON string
    localStorage.setItem('todo', JSON.stringify(todos));

    document.getElementById("task").value = ""; //resets the input screen to blank after adding the task
    show(); //calls the show() function

    return false;
}

//This function keeps the tasks permanetly displayed on the screen
function show() {
    //setting the retieved task as a variable
    var todos = get_todos();

    //setting each task as an ul
    var html = '<ul>';
    //displaying tasks in the order they were inputed
    for (var i = 0; i < todos.length; i++) { //for all items in the todos array
        //displaying the task and creates the completion button
        html += '<li>' + todos[i] + '&nbsp;'+'<button class="remove" id="' + i + '">BANG!</button></li>';
    };
    html += '</ul>' //end of unordered list
    //displaying tasks as a list
    document.getElementById('todos').innerHTML = html;
}
//displays the inputed task when the 'add item' button is clicked
document.getElementById('addBtn').addEventListener('click', add);
//this will keep the inputs displayed permantaly on the screen
show();