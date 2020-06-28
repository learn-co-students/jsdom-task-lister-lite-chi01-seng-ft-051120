// document.addEventListener("DOMContentLoaded", () => {
// });

let form = document.getElementById("create-task-form")
  form.addEventListener("submit", function(){
   
    let taskList = document.getElementById("tasks")
    let newList = document.createElement("li")

    let task = document.getElementById("new-task-description").value
    let duration = document.getElementById("duration").value
    let priority = document.getElementById("priority").value

    event.preventDefault();
    

    taskList.appendChild(newList)
    newList.style = `${priority}`
    newList.textContent = `${task} - Duration: ${duration}  `
    
    let editButton = document.createElement("button");
    editButton.innerHTML = "Edit"
    newList.appendChild(editButton)
    editButton.addEventListener("click", function(){
    let lineBreak = document.createElement("br")
    newList.appendChild(lineBreak)
    
    for (i=0;i<2;i++) {
      let editText = document.createElement("input")
      newList.appendChild(editText)
      // if (i === 0){
      //   editText[0].placeholder = `${task}`
      // } else { 
      //   editText[1].placeholder = `${duration}`
      // }
      let lineBreak = document.createElement("br")
      newList.appendChild(lineBreak)
    }
   
      editButton.disabled = true
    })

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete"
    newList.appendChild(deleteButton)
    deleteButton.addEventListener("click", function(){
      newList.remove()
    })
  });