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
}

let listTask = () => {
    tasks.innerHTML = "";
    todoList.map((x,y) => {
       return (tasks.innerHTML += `<div id=${y}>
        <span>${x.task}</span>
        <span>${x.taskDate}</span>
        <span>${x.description}</span>
       </div>`) 
    });

    resetForm();
}

let resetForm = () => {
    task.value = "";
    taskDate.value = "";
    description.value = "";
}


(() => {
    todoList = JSON.parse(localStorage.getItem("todoList")) || []
    console.log(todoList);
    listTask();
  })();