let todoList = [];
let task = document.getElementById("inputTitle");
let taskDate = document.getElementById("inputDate");
let description = document.getElementById("inputDescription");
let form = document.getElementById("taskForm");
let tasks = document.getElementById("tasks");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask();
});

let addTask = () => {
    if(task.value)
    todoList.push({task: task.value, taskDate: taskDate.value, description: description.value});
    localStorage.setItem("todoList", JSON.stringify(todoList));
    console.log(todoList);
    listTask();
};

let listTask = () => {
    tasks.innerHTML = "";
    todoList.map((x,y) => {
       return (tasks.innerHTML += `<div id=${y}>
        <span>${x.task}</span>
        <span>${x.taskDate}</span>
        <span>${x.description}</span>
        <div id="taskBtn" style="display: flex;background-color: #e2eede;">
        <button id="editBtn" onClick="editTask(this);toggleModal(true)"><img  src="edit.png" width="30px" height="30px"/></button>
        <button id="deleteBtn" onClick="deleteTask(this);listTask()"><img  src="delete.png" width="30px" height="30px" /></button>
        </div>
       </div>`) 
    });

    resetForm();
}

let resetForm = () => {
    task.value = "";
    taskDate.value = "";
    description.value = "";
};

deleteTask = (e) => {
    e.parentElement.parentElement.remove();
    todoList.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("todoList", JSON.stringify(todoList));
};

editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;
    console.log("selected task::::", selectedTask);
   let tv = task.value = selectedTask.children[0].innerHTML;
    taskDate.value = selectedTask.children[1].innerHTML;
    description.value = selectedTask.children[2].innerHTML;
     deleteTask(e);
}

(() => {
    todoList = JSON.parse(localStorage.getItem("todoList")) || []
    console.log(todoList);
    listTask();
  })();