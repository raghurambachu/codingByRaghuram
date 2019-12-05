function checkTldValidity(email) {
	const validTld = [ '.com', '.org', '.net' ];
	let isValidTld = false;
	for (let index in validTld) {
		if (email.slice(-4) === validTld[index]) {
			isValidTld = true;
		}
	}
	return isValidTld;
}

function checkFirstCharacter(email) {
	let invalidCharactersAtStart = [ '@', '.' ];
	let isFirstCharValid = true;
	let slicedCharacter = email.slice(0, 1); //removing the 1st character to check if its @ or .

	for (let index in invalidCharactersAtStart) {
		if (email.slice(0, 1).includes(invalidCharactersAtStart[index])) {
			isFirstCharValid = false;
			break;
		}
	}
	return isFirstCharValid;
}

function checkAtTheRate(email) {
	let isPresent = true;
	if (email.indexOf('@') === -1) isPresent = false;

	return isPresent;
}

function checkDoubleDots(email) {
	//looks for .. or @. string
	let doubleDotsexist = false;
	const positionOfDot = email.indexOf('.');
	const positionOfAt = email.indexOf('@');

	if (email[positionOfDot + 1].includes('.') || email[positionOfAt + 1].includes('.')) doubleDotsexist = true;

	return doubleDotsexist;
}

function checkSpecialCharacter(email) {
	const regex = /[^A-Za-z0-9_\-\.\@]{1,25}\./;
	let isSpecialPresent = true;
	if (!regex.test(email)) {
		isSpecialPresent = false;
	}
	return isSpecialPresent;
}

function isValidEmail(emailId) {
	const email = emailId.trim();
	let isValidTld = checkTldValidity(email);
	let isFirstCharValid = checkFirstCharacter(email);
	let isAtPresent = checkAtTheRate(email);
	const isDoubleDotPresent = checkDoubleDots(email);
	const isSpecialChar = checkSpecialCharacter(email);

	if (isValidTld && isFirstCharValid && isAtPresent && !isDoubleDotPresent && !isSpecialChar) {
		return `The ${email} is a Valid Email`;
	} else {
		return `${email} is Invalid Email Id.`;
	}

	console.log(isValidTld, isFirstCharValid, isAtPresent, isDoubleDotPresent, isSpecialChar);
}

const listOfEmails = [
	' mysite@masaischool.com',
	'my.name@masaischool.org',
	'mysite@masai.school.net',
	'masai.school.com',
	'masai@.com.my',
	'@masai.school.net',
	'name@gmail.b ',
	'name@.org.org',
	'.name@masaischool.org ',
	'name..1234@yahoo.com'
];

for (let j = 0; j < listOfEmails.length; j++) {
	console.log(isValidEmail(listOfEmails[j]));
}
