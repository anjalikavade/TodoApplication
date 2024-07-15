document.addEventListener('DOMContentLoaded', (event) => {
  const addTaskButton = document.getElementById('add-task');
  const newTaskInput = document.getElementById('new-task');
  const taskList = document.getElementById('task-list');

  const addTask = () => {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
      const li = document.createElement('li');

      const textSpan = document.createElement('span');
      textSpan.textContent = taskText;
      li.appendChild(textSpan);

      const buttonGroup = document.createElement('div');
      buttonGroup.className = 'button-group';

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete-btn';
      deleteButton.addEventListener('click', function () {
        li.remove();
      });
      buttonGroup.appendChild(deleteButton);

      const doneButton = document.createElement('button');
      doneButton.textContent = 'Done';
      doneButton.className = 'done-btn';
      doneButton.addEventListener('click', function () {
        if (doneButton.textContent === 'Done') {
          textSpan.style.textDecoration = 'line-through';
          doneButton.textContent = 'Undone';
        } else {
          textSpan.style.textDecoration = 'none';
          doneButton.textContent = 'Done';
        }
      });
      buttonGroup.appendChild(doneButton);

      li.appendChild(buttonGroup);
      taskList.appendChild(li);
      newTaskInput.value = '';
    }
  };

  addTaskButton.addEventListener('click', addTask);
  newTaskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  window.show_notes_container = () => {
    document.getElementById('notes_container').style.display = 'block';
    document.getElementById('click').style.display = 'none';
  };
});
