
const UsersFilter = () => {

	const filterByAge = (users, age) => {
		return users.filter( user => user.age >= age );
	}

	const sortByAgeAsc = (users) => {
		return users.sort((a, b) => a.age - b.age)
	}

	const sortByAgeDesc = (users) => {
		return users.sort((a, b) => b.age - a.age)
	}

	const filterByGender = (users, gendersList) => {
		if (gendersList.length === 1) {
			return users.filter( user => user.gender == gendersList[0])
		}
		return users
	}

	const removeUser = (users, userId) => {
		return users.reject((user) => user.userId = userId)
	}

	const findById = (users, userId) => {
		return users.find((user) => user.userId = userId)
	}

	const expandUser = (users) => {
		return users.map((user) => {
			user.fullName = user.firstName + ' ' + user.lastName
			return user
		})
	}

	const countTotalUsersAge = (users) => {
		return users.reduce((sum, user) => {
			return sum + user.age
		},0)
	}

	return {
		filterByAge					: filterByAge,
		sortByAgeAsc				: sortByAgeAsc,
		sortByAgeDesc				: sortByAgeDesc,
		filterByGender			: filterByGender,
		removeUser					: removeUser,
		findById						: findById,
		expandUser					: expandUser,
		countTotalUsersAge	: countTotalUsersAge
	}
}
