function palindrome(str) {
	str += '';
	let isPalindrome = true;
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] !== str[str.length - i - 1]) {
			isPalindrome = false;
		}
	}
	return isPalindrome;
}

const listOfStrings = [ 'fullstack', 'javascript', 'tacocat', 'madam', 'racer', 10801, 'redder' ];

for (let i = 0; i < listOfStrings.length; i++) {
	console.log(listOfStrings[i], 'is a Palindrom', palindrome(listOfStrings[i]));
}
