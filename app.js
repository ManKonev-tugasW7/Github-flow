function addTodo() {
  const input = document.getElementById('todoInput');
  const list = document.getElementById('todoList');
  
  if (input.value.trim() === '') return;

  const li = document.createElement('li');
  li.innerHTML = `${input.value} <span class="delete" onclick="this.parentElement.remove()">✕</span>`;
  list.appendChild(li);
  input.value = '';
  //deadline
}