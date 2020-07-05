document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form")
  const taskList = document.querySelector("#tasks")
  
  taskForm.addEventListener("submit", function(e) {
    e.preventDefault()
    //have the user input 
    const newTask  = document.querySelector("#new-task-description").value
    // slap it on the document 
    // const taskItem = document.createElement("li")
    // taskItem.innerHTML = newTask
    // taskList.appendChild(taskItem)


    taskList.innerHTML += `<li> ${newTask} 
    <button data-action="delete"> X </button>
    </li>`
    taskForm.reset()
  })

  taskList.addEventListener("click", function(e) {
    if (e.target.dataset.action === "delete"){
      e.target.parentElement.remove()
    }
  })
});
