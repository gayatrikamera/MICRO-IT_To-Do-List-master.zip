function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskList = document.getElementById("taskList");

  const row = taskList.insertRow();
  const cellTask = row.insertCell(0);
  const cellStatus = row.insertCell(1);
  const cellClose = row.insertCell(2);

  cellTask.textContent = taskText;

  const statusSpan = document.createElement("span");
  statusSpan.className = "status";
  statusSpan.textContent = "pending";
  statusSpan.onclick = () => {
    const isCompleted = statusSpan.classList.toggle("completed");
    statusSpan.textContent = isCompleted ? "Completed" : "pending";
  };
  cellStatus.appendChild(statusSpan);

  const deleteBtn = document.createElement("span");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = "🗑️";
  deleteBtn.onclick = () => taskList.deleteRow(row.rowIndex - 0);
  cellClose.appendChild(deleteBtn);

  taskInput.value = "";
}