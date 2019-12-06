const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function convertToLower(words) {
	let newWord = '';
	let newWords = [];
	for (let i = 0; i < words.length; i++) {
		for (let j = 0; j < words[i].length; j++) {
			let getPos = alphabets.indexOf(words[i][j]);
			if (getPos > 25) {
				newWord += alphabets[getPos - 26];
			} else {
				newWord += words[i][j];
			}
		}
		newWords.push(newWord);
		newWord = '';
	}
	return newWords;
}

function obtainArray(str) {
	let words = [];
	let accWord = ''; //accumulated word
	//check for whitespace and separate out the words
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== ' ') {
			accWord += str[i];
		} else {
			words.push(accWord);
			accWord = '';
		}
		if (i === str.length - 1) {
			words.push(accWord);
		}
	}
	return words;
}

function capitaliseAWord(word) {
	let capitalisedWord = '';
	for (let i = 0; i < word.length; i++) {
		let getPos = alphabets.indexOf(word[i]);
		if (getPos < 25 && i === 0) {
			capitalisedWord += alphabets[getPos + 26];
		} else {
			capitalisedWord += word[i];
		}
	}
	return capitalisedWord;
}

function camelCase(str) {
	let wordsInStr = obtainArray(str);
	let wordsinLowercase = convertToLower(wordsInStr);

	let camelCaseWord = '';
	for (let i = 0; i < wordsinLowercase.length; i++)
		if (i === 0) {
			camelCaseWord += wordsinLowercase[0];
		} else {
			console.log;
			camelCaseWord += capitaliseAWord(wordsinLowercase[i]);
		}

	return camelCaseWord;
}

function snakeCase(str) {
	let wordsInStr = obtainArray(str);
	let wordsinLowercase = convertToLower(wordsInStr);
	let snakeCaseWord = '';
	for (let i = 0; i < wordsinLowercase.length; i++) {
		if (i === 0) {
			snakeCaseWord += wordsinLowercase[i];
		} else {
			snakeCaseWord = snakeCaseWord + '_' + wordsinLowercase[i];
		}
	}
	return snakeCaseWord;
}

function hyphenCase(str) {
	let wordsInStr = obtainArray(str);
	let wordsinLowercase = convertToLower(wordsInStr);
	let hyphenCaseWord = '';
	for (let i = 0; i < wordsinLowercase.length; i++) {
		if (i === 0) {
			hyphenCaseWord += wordsinLowercase[i];
		} else {
			hyphenCaseWord = hyphenCaseWord + '-' + wordsinLowercase[i];
		}
	}
	return hyphenCaseWord;
}

console.log(camelCase('Raghuram Bachu learning Javascript'));
console.log(snakeCase('Raghuram Bachu learning Javascript'));
console.log(hyphenCase('Raghuram Bachu learning Javascript'));
