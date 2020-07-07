const form = document.getElementById('create-task-form')


function submitForm() {
  event.preventDefault();
  const task = event.target[0].value;
  const tasks = document.getElementById('tasks')
  tasks.innerHTML = task;
  document.getElementById('tasks').appendChild(task);

  
}
//////////////////////////////////////// EVENT LISTENERS///////////////////////////////
form.addEventListener('submit', submitForm)



// creating an Li Node, and appending it
/////////////////////////////
