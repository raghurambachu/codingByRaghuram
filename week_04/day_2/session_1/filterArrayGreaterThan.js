function filterArray(arr, target) {
	const filteredArray = arr.filter(function(element) {
		if (element < target) return element;
	});

	return filteredArray;
}

const arrNum = [ 20, 30, 40, 50, 60, 70, 80 ];
console.log(filterArray(arrNum, 65));
