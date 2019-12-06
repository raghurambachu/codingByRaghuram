const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

function square(arr) {
	const squaredArray = arr.map(function(element) {
		return element * element;
	});

	return squaredArray;
}

console.log(square(arr));
