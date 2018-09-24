const SEARCH_BTN_SELECTOR = '#search_btn'
const searchBtnEl = document.querySelector(SEARCH_BTN_SELECTOR)
const USER_SELECTOR = '.show_single_user'

class UsersController {

  constructor () {
    searchBtnEl.addEventListener('click', this.onSearchClick.bind(this))
  }

  onSearchClick () {
    new UsersView()
      .render(this.filterUsers(USERS_LIST, this.getFormData()))

    document.querySelectorAll(USER_SELECTOR).forEach((element) => {
      element.addEventListener('click', this.onUserClick.bind(this))
    })
  }

  onUserClick (event) {
    let userId = event.currentTarget.dataset.userId
    let user = UsersFilter().findById(USERS_LIST, userId)
    new UsersView().renderSingleUser(user)

    PubSub.trigger('user_selected', [user])
  }
  
  getFormData () {
    return new FormData(document.getElementById('users_filter_form'))
  }

  filterUsers (users, formData) {
    let filter = UsersFilter()
    users = filter.filterByAge(users, formData.get('age_min'))
    users = filter.filterByGender(users, formData.getAll('gender'))
    users = filter.expandUser(users)
    users = formData.get('sort_by_age') === 'ASC'
      ? filter.sortByAgeAsc(users)
      : filter.sortByAgeDesc(users)
    return users
  }

}
