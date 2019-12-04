let givenString = 'Masai';
let vowels = [ 'a', 'e', 'i', 'o', 'u' ];

let countOfVowels = 0;

for (let i = 0; i < givenString.length; i++) {
	if (vowels.includes(givenString[i])) {
		countOfVowels++;
	}
}

console.log('Total vowels in the', givenString, 'is', countOfVowels);
