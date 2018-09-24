const USERS_LIST_WRAPPER = 'users_list_wrapper'

class UsersView {

		render (users) {
			let wrapper = document.getElementById(USERS_LIST_WRAPPER)
			let html = ''
			users.forEach((user) => {
				html += this.generateUserLink(user)
			})
			wrapper.innerHTML = html
		}

		renderSingleUser (user) {
			let wrapper = document.getElementById('single_user_wrapper')
			wrapper.innerHTML = this.generateSingleUser(user)
		}

		generateSingleUser (user) {
			return `<div>
				<div>First Name: ${user.firstName}</div>
				<div>Last Name: ${user.lastName}</div>
				<div>Age: ${user.age}</div>
				<div>Gender: ${user.gender}</div>
			</div><br/>`
		}

		generateUserLink (user) {
			return `<div>
				<div><a href="javascript:;" data-user-id="${user.userId}" class="show_single_user">${user.fullName}</a></div>
			</div><br/>`
		}
}
