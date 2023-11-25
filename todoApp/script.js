// WITHOUT USING LOCAL STORAGE

// variables
const input = document.querySelector("input");
const btn = document.querySelector("button");
const todoList = document.querySelector(".todo-list");
const clear = document.querySelector(".clear");

// add list item
const addTask = (e) => {

    e.preventDefault();

    const newListItem = document.createElement("li");
    const delBtn = document.createElement("button");

    delBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;

    if(input.value !== "")
    {
        newListItem.textContent = input.value;
        newListItem.appendChild(delBtn);
        todoList.appendChild(newListItem);
        input.value = "";
    }
    else
    {
        alert("Please enter a task!");
    }

    delBtn.addEventListener("click", function() {
        const del = confirm("Are you sure about that?");

        if(del)
        {
            const parent = this.parentNode.parentNode;
            parent.removeChild(this.parentNode);
        }
    })

};

btn.addEventListener("click", addTask);


clear.addEventListener("click", () => {
    todoList.innerHTML = "";
})