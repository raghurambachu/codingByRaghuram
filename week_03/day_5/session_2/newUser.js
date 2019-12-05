function createNewUser(name, email, password) {
	let newUser = {};
	newUser.name = name;
	newUser.email = email;
	newUser.password = password;

	return newUser;
}

console.log(createNewUser('Raghuram', '1993raghuram@gmail.com', 'full-stack-developer'));
