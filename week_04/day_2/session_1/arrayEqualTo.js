function arrayEqual(arr, target) {
	const tranformedArray = arr.filter(function(element) {
		if (element !== target) {
			const value = element;
			const square = value * value;
			return square;
		}
	});

	const output = tranformedArray.map(function(element) {
		return Math.pow(element, 2);
	});
	return output;
}

const testArray = [ 25, 35, 65, 15, 75, 10, 15, 7, 19, 15 ];
const target = 15;
console.log(arrayEqual(testArray, target));
