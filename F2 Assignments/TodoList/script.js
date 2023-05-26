//your code here
var todoValue= document.getElementById('newTodoInput');
var btn = document.getElementById('addTodoBtn');
var ol = document.getElementById('todoList');
 function addTodo() {
	 if(todoValue.value)
		{
			var li = document.createElement('li');
			li.textContent = todoValue.value;
			ol.appendChild(li);
		} 	
}
btn.addEventListener('click', addTodo);