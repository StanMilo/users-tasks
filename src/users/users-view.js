const USERS_LIST_WRAPPER = 'users_list_wrapper'

class UsersView {

		render (users) {
			let wrapper = document.getElementById(USERS_LIST_WRAPPER)
			let html = ''
			users.forEach((user) => {
				html += this.generateSingleUser(user)
			})
			wrapper.innerHTML = html
		}

		generateSingleUser (user) {
			return `<div>
				<div>Name: ${user.fullName}</div>
				<div>Age: ${user.age}</div>
				<div>Gender: ${user.gender}</div>
			</div><br/>`
		}

}
