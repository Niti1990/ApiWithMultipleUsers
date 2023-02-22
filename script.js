fetch('https://reqres.in/api/users?page=2')
	.then(response => {
		return response.json()
	})
	.then(value => {
		console.log(value)
		// console.log(value.data.data)
		// console.log(value.data.id)
		// fetching single user using for each loop
		const element = document.querySelector('.demo')
		const users = value.data
		// console.log(users)
		users.forEach(function (currentUser) {
			// console.log(currentUser)
			const html = `
      <div class="user">
      <img src="${currentUser.avatar}" alt="" width="140" />
      <h2>Id:${currentUser.id}</h2>
      <h2> Name:${currentUser.first_name + '' + currentUser.last_name}</h2>
      <h2>Email:${currentUser.email}</h2>

  
      </div> `
			//finally we insert the html to the element here
			element.insertAdjacentHTML('beforeEnd', html)
		})
	})
//Notice we used for
