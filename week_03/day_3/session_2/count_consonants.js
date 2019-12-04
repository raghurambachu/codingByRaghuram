let givenString = 'Raghuram';
let vowels = [ 'a', 'e', 'i', 'o', 'u' ];

let countOfConsonants = 0;

for (let i = 0; i < givenString.length; i++) {
	if (!vowels.includes(givenString[i])) {
		countOfConsonants++;
	}
}

console.log('Total vowels in the', givenString, 'is', countOfConsonants);
