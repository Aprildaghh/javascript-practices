// WITH USING LOCAL STORAGE

window.onload = function() {
    displayTask();
}
// variables
const input = document.querySelector("input");
const btn = document.querySelector("button");
const todoList = document.querySelector(".todo-list");
const clear = document.querySelector(".clear");
let tasks;

btn.addEventListener("click", addTask);
clear.addEventListener("click", deleteAllTask);

function getTasks()
{
    if(localStorage.getItem("tasks") === null)
    {
        tasks = [];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
}

function addTask()
{
    if(input.value !== "")
    {
        addTaskToLS();
        displayTask();
    }
    else
    {
        alert("Please enter a task!");
    }
}

function addTaskToLS()
{
    getTasks();

    tasks.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
}

function displayTask()
{
    getTasks();

    todoList.innerHTML = "";

    tasks.forEach((task, index) => {
        const newListItem = document.createElement("li");
        const delBtn = document.createElement("button");

        delBtn.innerHTML = `<i class="fas fa-trash-alt" id="${index}" onclick="deleteTask(this.id)"></i>`;

        newListItem.appendChild(document.createTextNode(task));
        newListItem.appendChild(delBtn);
        todoList.appendChild(newListItem);

    });
}

function deleteTask(index)
{
    getTasks();

    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTask();
}

function deleteAllTask()
{
    localStorage.clear();
    displayTask();
}
