class TodoStorage {

	findAll () {
		let todosList = JSON.parse(localStorage.getItem('TODOS_LIST'))	
		if (todosList === null) {
			todosList = []
		}
  		return todosList
  	}

  	findByUserId (userId) {
  		let todosList = JSON.parse(localStorage.getItem('TODOS_LIST'))
  		if (todosList === null) {
  			todosList = []
  		}
  		return todosList.filter( todo => todo.userId == userId) 		
  	}

  	findById (todoId) {
  		let todosList = JSON.parse(localStorage.getItem('TODOS_LIST'))
  		if (todosList === null) {
  			todosList = []
  		}
  		return todosList.find( todo => todo.todoId == todoId) 	
  	}

  	save (formData) {
  		let todo = {
  			todoId 		: this.hasId(formData) ? formData.get('todo_id') : new Date().getTime(),
  			title 		: formData.get('title'),
  			description : formData.get('description'),
  			userId 	: formData.get('user_id')
  		}

  		this.hasId(formData)
			? this.update(todo)
			: this.insert(todo)
  	}

  	hasId (formData) {
  		return formData.get('todo_id').length > 0
  	}

    update (todo) {
        let todosList = new TodoStorage().findAll()
        todosList = todosList.map((td) => {
            if(td.todoId == todo.todoId) {
                return { ...todo}
            }
            return td
        })
        localStorage.setItem('TODOS_LIST', JSON.stringify(todosList));
    }

	insert (todo) {
        let todosList = new TodoStorage().findAll()
        todosList.push(todo)
        localStorage.setItem('TODOS_LIST', JSON.stringify(todosList));
	}
}