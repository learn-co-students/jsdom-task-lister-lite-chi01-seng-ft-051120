document.addEventListener("DOMContentLoaded", () => {
  // 1. As a user, I should be able to type a task into the input field.
  // 2. As a user, I should be able to click some form of a submit button.
  // 3. As a user, the task string that I provided should appear on the DOM after the submit button has been activated.
   

  // next, grab all the DOM elements we'll need
  // the form and relevant input fields
  //const list = document.getElementById('list');
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById('new-task-description');
   //  ul where new tasks will live on the DOM
  const newTaskUl = document.getElementById("tasks");
  //debugger
  
  const newTaskPriority = document.getElementById("new-task-priority");
  newTaskForm.addEventListener("submit", createNewTask);
 
  
  //const renderApp = () => (taskUl.innerHTML = taskList.renderTasks())
  
  //attach event listeners
  
});

    //event.preventDefault();
    //debugger
    //taskList.createNewTask(newTaskDescription.value);

  const createNewTask = event => {
    event.preventDefault();
    const newTaskDescription = document.getElementById("new-task-description");
    const newTask = document.createElement("li"); 
    newTask.innerText = newTaskDescription.value;
    
    appendNewTask(newTask);
    event.target.reset();
  };

  const appendNewTask = task => {
    document.getElementById("tasks").appendChild(task);
  };
