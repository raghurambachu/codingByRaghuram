const arr = [ 15, 25, 30, 45, 60, 70 ];

function multiplier(arr, targetVal) {
	const tranformedArray = arr.map(function(element) {
		return element * targetVal;
	});
	return tranformedArray;
}

console.log(multiplier(arr, 10));
