const givenArray = [ 'raghuram', 'bachu ', 'javascript', 'raghuram', 5, 'bachu', 'fullstack', 'fullstack' ];
const searchElement = '5';

function findIndex(givenArr, searchTerm) {
	let position;
	for (const key in givenArr) {
		if (searchTerm === givenArr[key]) {
			position = key;
			break;
		}
	}
	if (position) return position;
	else return -1;
}

console.log(findIndex(givenArray, searchElement));
