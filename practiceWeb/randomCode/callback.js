function otherFunct() {
	console.log("1")
	console.log("2")
}


console.log('Start')

//otherFunct()
function loginUser(email, password, callback) {
	setTimeout(() => {
		console.log("Data is coming")
		callback({
			userEmail: email
		});
	}, 2000)
}

const user = loginUser('nhson17@apcs', 123456, (user) => {
	console.log(user)
})


console.log('End')