let givenArrayOfNumbers = [ 56, 60, 23, 15, 90, 12, 6, 13, 40 ];

let sum = 0;
for (let i = 0; i < givenArrayOfNumbers.length; i++) {
	if (givenArrayOfNumbers[i] % 2 === 0) {
		sum += givenArrayOfNumbers[i];
		console.log('Even Numbers being added are : ', givenArrayOfNumbers[i]);
	}
}

console.log('The sum of even numbers of array : ', sum);
