const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const pendingTasksList = document.getElementById("pending-tasks");
const completedTasksList = document.getElementById("completed-tasks");

// function to create a new task element with checkbox, task text, and delete button
function createTaskElement(taskText) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const taskTextSpan = document.createElement("span");
  taskTextSpan.textContent = taskText;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", deleteTask);
  const taskButtonsDiv = document.createElement("div");
  taskButtonsDiv.className = "task-buttons";
  taskButtonsDiv.appendChild(checkbox);
  taskButtonsDiv.appendChild(taskTextSpan);
  taskButtonsDiv.appendChild(deleteButton);
  li.appendChild(taskButtonsDiv);
  return li;
}

// function to add a new task to the pending tasks list
function addTask() {
  if (newTaskInput.value !== "") {
    const newTaskElement = createTaskElement(newTaskInput.value);
    pendingTasksList.appendChild(newTaskElement);
    newTaskInput.value = "";
    checkbox.addEventListener("click", completeTask);
  }
}

// function to mark a task as completed and move it to the completed tasks list
function completeTask() {
  const taskElement = this.parentElement.parentElement;
  const checkbox = this;
  if (checkbox.checked) {
    taskElement.className = "completed-task";
    completedTasksList.appendChild(taskElement);
  } else {
    taskElement.className = "";
    pendingTasksList.appendChild(taskElement);
  }
}

// function to delete a task from the list
function deleteTask() {
  const taskElement = this.parentElement.parentElement;
  taskElement.remove();
}

// add task event listener
addTaskButton.addEventListener("click", addTask);
