let arrayStr = [ 'learning', 'Javascript', 'is', 'awesome' ];
let joinStr = '*';

function joining(arrayStr, joinStr) {
	let accumulatedStr = '';
	for (let i = 0; i < arrayStr.length; i++) {
		let newStr;
		i === arrayStr.length - 1 ? (newStr = arrayStr[i]) : (newStr = arrayStr[i] + joinStr);
		accumulatedStr += newStr;
	}
	return accumulatedStr;
}

console.log(joining(arrayStr, joinStr));
