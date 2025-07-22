const taskInput =document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const clearAllTasksBtn = document.getElementById('clearAllTasksBtn');

let tasks = [];

function addTask()
{
    const taskText = taskInput.value.trim(); 

    if(taskText !== "")
    {
        tasks.push({ text: taskText });
        taskInput.value = "" ; 
        displayTasks();
    }

}

function displayTasks()
{
    taskList.innerHTML = "";

    tasks.forEach((task , index) => 
    {
        const li =  document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
        <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change" , () => toggleTask(index));
        taskList.appendChild(li);
    });
}

function toggleTask(index)
{
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTask()
{
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

function clearAllTasks()
{
    tasks = [];
    displayTasks();
}

addTaskBtn.addEventListener("click" , addTask);
clearCompletedBtn.addEventListener("click" , clearCompletedTask);
clearAllTasksBtn.onclick = clearAllTasks;



// to check if browser supports local storage or not (not related to the main code)

function isLocalstoragSupported()
{
    try
    {
        const testKey = "__test__";
        localStorage.setItem(testKey , testKey);
        localStorage.removeItem(testKey);
        return true;
    }
    catch(e)
    {
        return true;
    }
}

if(isLocalstoragSupported())
{
    console.log("supported");
}
else
{
    console.log("Not Supported");
}