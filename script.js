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
function createTask(taskText){
    return {text: taskText, completed: false };
}
function deleteTask(index){
    return taskArray.splice(index,1);
    updateTasksInLocalStorage()
}

