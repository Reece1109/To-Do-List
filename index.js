const form = document.querySelector('#todo-form');
		const input = document.querySelector('#todo-input');
		const list = document.querySelector('#todo-list');

		// Load the to-do items from local storage
		let todos = JSON.parse(localStorage.getItem('todos')) || [];
		for (let todo of todos) {
			const newTodo = createTodoElement(todo.text);
			list.appendChild(newTodo);
		}

		form.addEventListener('submit', function(event) {
			event.preventDefault(); // Prevent form submission
			const todoText = input.value.trim(); // Remove leading/trailing whitespaces
			if (todoText !== '') {
				const newTodo = createTodoElement(todoText);
				list.appendChild(newTodo);
				todos.push({ text: todoText });
				saveTodosToLocalStorage(todos);
				input.value = ''; // Clear input field
			}
		});

		list.addEventListener('click', function(event) {
			if (event.target.classList.contains('delete-btn')) {
				const todoText =event.target.parentElement.querySelector('.todo-text').textContent;
                const index = todos.findIndex(todo => todo.text === todoText);
                todos.splice(index, 1);
                saveTodosToLocalStorage(todos);
                event.target.parentElement.remove();
            }
        });
    
        function createTodoElement(todoText) {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="todo-text">${todoText}</span>
                <button class="delete-btn">Delete</button>
            `;
            return li;
        }
    
        function saveTodosToLocalStorage(todos) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }