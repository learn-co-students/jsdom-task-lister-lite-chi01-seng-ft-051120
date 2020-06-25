document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", function (event) {
    // Prevent refresh
    event.preventDefault();
    // Get input field
    const input = event.target[0].value;
    // Get tasks field
    const tasks = document.getElementById("tasks");

    // Method 1: Modify Inner HTML
    tasks.innerHTML += `
      <li>${input}<button class="delete">Remove</button></li>
    `;

    form.reset();

    tasks.addEventListener("click", function (event) {
      if (event.target.nodeName == "BUTTON") {
        event.target.parentNode.remove();
      }
    });
  });
});
