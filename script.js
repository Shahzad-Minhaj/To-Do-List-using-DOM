let heading = document.querySelector(".heading")
let topic = document.createElement("h1")
let des = document.createElement("p")
topic.textContent=`To-Do List`
des.innerHTML=`<b>Description:</b> <em>This sets up a functional To-Do List application using DOM where users can add tasks, delete tasks, and see a visually appealing interface with animations.</em>`
heading.style.textAlign = "center"
topic.style.backgroundColor = "#ccc"//////
heading.appendChild(topic)
heading.appendChild(des)
let box = document.querySelector(".box");

// Create input field
let creatingClass = document.createElement("input");
creatingClass.setAttribute('class', 'val');
creatingClass.setAttribute('placeholder', 'Enter a task');

// Create a button to add tasks
let btn = document.createElement("button");
btn.textContent = "Add Task";

// Create an unordered list to hold the tasks
let todoList = document.createElement("ul");
todoList.classList.add('todo-list');

// Function to add task
function addTask() {
    let taskName = creatingClass.value.trim();
    if (taskName === "") {
        return alert("Please enter a task");
    }

    // Create a list item for the task
    let taskItem = document.createElement("li");
    taskItem.classList.add('task-item');

    // Create a span for task content
    let taskContent = document.createElement("span");
    taskContent.textContent = taskName;
    taskContent.classList.add('task-content');

    // Create a delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', deleteTask);

    // Append task content and delete button to task item
    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteButton);

    // Append the task item to the to-do list
    todoList.appendChild(taskItem);

    // Clear the input field
    creatingClass.value = "";
}

// Function to delete a task
function deleteTask(event) {
    let taskItem = event.target.parentElement;
    taskItem.remove();
}

// Event listener for button click
btn.addEventListener('click', addTask);

// Event listener for pressing Enter key
creatingClass.addEventListener('keyup', function(event) {
    // Check if the Enter key is pressed
    if (event.keyCode === 13) {
        addTask();
    }
});

// Append elements to the box
box.appendChild(creatingClass);
box.appendChild(btn);
box.appendChild(todoList);


