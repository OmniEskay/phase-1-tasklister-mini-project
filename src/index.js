document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  
  taskForm.addEventListener("submit", (event) => {
      event.preventDefault(); 
      
      const taskInput = document.getElementById("new-task-description");
      const taskValue = taskInput.value.trim();
      
      if (taskValue === "") return; // stop the addition of empty tasks
      
      const taskItem = document.createElement("li");
      taskItem.textContent = taskValue;
      
      
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.addEventListener("click", () => {
          taskItem.remove();
      });
      
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
      
      taskInput.value = "";
  });
});
