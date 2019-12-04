//splitting the string without inbuilt methods using given character.

// let arrayOfStrings = [];
// let givenString = 'raghuram';
// let splitString = '';

let arrayStr = [];
let givenStr = 'raghuram is learning';
let splitStr = ' ';

console.log(splitting(arrayStr, givenStr, splitStr));

function splitting(arrayOfStrings, givenString, splitString) {
	let accumulatedString = '';
	let counter = 0; //tracks index of arrayOfStrings
	for (let i = 0; i < givenString.length; i++) {
		//If split string is other than empty character ''
		if (splitString !== '') {
			if (givenString[i] === splitString) {
				arrayOfStrings[counter] = accumulatedString;
				accumulatedString = '';
				counter++;
				continue;
			} else {
				accumulatedString += givenString[i];
			}

			if (i === givenString.length - 1 && givenString[i] !== splitString) {
				arrayOfStrings[counter] = accumulatedString;
			}
		} else {
			arrayOfStrings[i] = givenString[i];
		}
	}

	return arrayOfStrings;
}
