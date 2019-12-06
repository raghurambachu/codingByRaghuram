const arr = [ 10, 2, 3, 4, 5, 19, 7, 8, 9, 10, 3 ];

function checkElementBefore(arr) {
	const returnedArray = arr.map(function(element, index, arrayObj) {
		if (element < arrayObj[index - 1] && index >= 1) {
			return -1;
		}
		return 1;
	});
	return returnedArray;
}

console.log(checkElementBefore(arr));
