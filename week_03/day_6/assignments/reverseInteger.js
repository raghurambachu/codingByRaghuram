function reverseInteger(integer) {
	const strInt = integer + '';
	let newStr = '';
	for (let i = strInt.length - 1; i >= 0; i--) {
		newStr += strInt[i];
	}
	const revInt = parseInt(newStr);
	return revInt;
}

console.log(typeof reverseInteger(123456));
