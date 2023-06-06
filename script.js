const taskInput = document.getElementById("taskInput")
const addTaskButton = document.getElementById("addTaskButton")
const taskList = document.getElementById("taskList")

let taskArray = getTasksFromLocalStorage()

function getTasksFromLocalStorage(){
    return JSON.parse(localStorage.getItem("tasks")) || [];
}
function updateTasksInLocalStorage(){
    localStorage.setItem("tasks", JSON.stringify(taskArray));
}
