document.addEventListener("DOMContentLoaded",function(){

	window.PubSub = new SimplePubSub()

	PubSub.on('user_selected', (user) => {
        new TodosController(user)
	})

	new UsersController()

// localStorage.setItem('usersList', JSON.stringify(USERS_LIST));
//
// let usersList = localStorage.getItem('usersList');
//
// console.log('users list: ', JSON.parse(usersList));

});
