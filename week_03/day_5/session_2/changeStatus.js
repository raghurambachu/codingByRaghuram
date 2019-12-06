function changeStatus(user, statusValue) {
	let isStatusExist = false;
	for (let key in user) {
		if (key === 'status') {
			isStatusExist = true;
			break;
		}
	}

	if (!isStatusExist) return 'Invalid Input';
	else {
		user.status = statusValue;
		switch (statusValue) {
			case 'Basic':
				user.creditLimit = 'Rs 80,000';
				break;
			case 'Premium':
				user.creditLimit = 'Rs 3,00,000';
				break;
			case 'Platinum':
				user.creditLimit = 'Rs 6,00,000';
				break;
		}
		return user;
	}
}
user1 = {
	name: 'Tim cook',
	status: 'Basic'
};

console.log(changeStatus(user1, 'Premium'));
