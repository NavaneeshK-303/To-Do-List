document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    // Function to add a new task
    const addTask = () => {
      const taskText = taskInput.value.trim();
      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }
  
      const listItem = document.createElement("li");
      listItem.textContent = taskText;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        taskList.removeChild(listItem);
      });
  
      listItem.appendChild(deleteBtn);
      taskList.appendChild(listItem);
  
      taskInput.value = "";
    };
  
    // Add task on button click
    addTaskBtn.addEventListener("click", addTask);
  
    // Add task on pressing Enter
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTask();
      }
    });
  });
  
