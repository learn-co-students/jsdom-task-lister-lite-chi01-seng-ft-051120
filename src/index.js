// document.addEventListener("DOMContentLoaded", () => {
//     console.log("DOM conetent has loaded")
// });

const form = document.getElementById("create-task-form")

form.addEventListener("submit", function(event) {
  // Prevent the default action of submit
  event.preventDefault()
  // Grab the form input field
  const task = event.target[0].value
  // create a empty li tag to put the value of the input field into the li tag
  const liTag = document.createElement("li")
  liTag.innerText = task 
  console.log(liTag)
  const ul = document.getElementById("tasks")
  ul.append(liTag)
  form.reset()
});

