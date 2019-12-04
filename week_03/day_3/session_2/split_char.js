let givenStr = 'full stack developer';

function splitCharacter(givenStr) {
	let outputArray = [];
	for (let i = 0; i < givenStr.length; i++) {
		outputArray[i] = givenStr[i];
	}
	return outputArray;
}

console.log(splitCharacter(givenStr));
