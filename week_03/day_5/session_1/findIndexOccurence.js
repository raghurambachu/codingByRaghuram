const givenArray = [
	'raghuram',
	'bachu ',
	'javascript',
	'raghuram',
	5,
	'bachu',
	'fullstack',
	'fullstack',
	'javascript'
];
const searchElement = 'javascript';

function allIndexOccurences(givenArr, SearchTerm) {
	arrayOfPositions = [];
	for (let key in givenArray) {
		if (givenArr[key] === SearchTerm) {
			arrayOfPositions.push(parseInt(key));
		}
	}
	if (arrayOfPositions.length) return arrayOfPositions;
	else return -1;
}

console.log(allIndexOccurences(givenArray, searchElement));
