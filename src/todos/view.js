class TodoView {

	renderTodoForm (user, todo) {

		if (todo == undefined) {
			todo = {
				title: '',
				description: '',
				todoId: ''
			}
		}

		let html = `<form id="js_todo_form">
				<div>
					<input name="title" placeholder="Title" value="${todo.title}">
				</div>
				<div>
					<textarea name="description" placeholder="Description...">${todo.description}</textarea>
				</div>
				<div>
					<input name="todo_id" type="hidden" value="${todo.todoId}">
					<input name="user_id" type="hidden" value="${user.userId}">	
					<input type="button" id="js_todo_submit" value="Save">
				</div>
			</form><br/>`

		let wrapper = document.getElementById('js_todo_wrapper')	
		wrapper.innerHTML = html
		return this
	}

	renderTodosList (todosList) {

		let html = ''

		todosList.forEach((todo) => {
			html += `<div>
				<div><a href="javascript:;" data-todo-id="${todo.todoId}" class="edit_todo">${todo.title}</a></div>
			</div><br/>`
		})

		let wrapper = document.getElementById('js_todos_list_wrapper')	
		wrapper.innerHTML = html
        return this
	}
}	