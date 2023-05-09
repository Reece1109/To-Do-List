const form = document.querySelector('#todo-form');
		const input = document.querySelector('#todo-input');
		const list = document.querySelector('#todo-list');

		form.addEventListener('submit', function(event) {
			event.preventDefault(); // Prevent form submission
			const todoText = input.value.trim(); // Remove leading/trailing whitespaces
			if (todoText !== '') {
				const newTodo = createTodoElement(todoText);
				list.appendChild(newTodo);
				input.value = ''; // Clear input field
			}
		});

		list.addEventListener('click', function(event) {
			if (event.target.classList.contains('delete-btn')) {
				event.target.parentElement.remove(); // Remove todo item from the list
			}
		});

		function createTodoElement(todoText) {
			const li = document.createElement('li');
			li.innerHTML = `
				<span>${todoText}</span>
				<button class="delete-btn">Delete</button>		`;
		return li;
	}
        