
class TodosController {

	constructor (user) {
		this.user 		= user
		this.storage 	= new TodoStorage()
		this.view 		= new TodoView()
		this.init()
	}

	init (todo) {
        this.view
            .renderTodoForm(this.user, todo) // render form
            .renderTodosList(this.storage.findByUserId(this.user.userId)) // render todos links
        document.getElementById('js_todo_submit').addEventListener('click', this.formOnSubmit.bind(this))
        document.querySelectorAll('.edit_todo').forEach(this.onTodoLinkClick.bind(this))
	}

    formOnSubmit (event) {
		event.preventDefault()
        let formData = new FormData(document.getElementById('js_todo_form'))
		this.storage.save(formData)
		this.init()
	}

    onTodoLinkClick (element) {
        element.addEventListener('click', (event) => {
            let todoId = event.currentTarget.dataset.todoId
            this.init(this.storage.findById(todoId))
		})
	}
}