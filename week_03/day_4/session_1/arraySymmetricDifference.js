let array1 = [ 'thinking', 'learning', 'implementing', 'javascript' ];
let array2 = [ 'jogging', 'learning', 'cycling', 5, 'javascript' ];

function union(array1, array2) {
	let count = 0;
	let unionArray = [];
	for (let i = 0; i < array1.length; i++) {
		unionArray[count] = array1[i];
		count++;
	}
	for (let j = 0; j < array2.length; j++) {
		let isExist = false;
		for (let k = 0; k < array1.length; k++) {
			if (array2[j] === array1[k]) {
				isExist = true;
				break;
			}
		}
		if (!isExist) {
			unionArray[count] = array2[j];
			count++;
		}
	}

	return unionArray;
}

function intersection(array1, array2) {
	let intersectionArray = [];
	let count = 0;

	for (let i = 0; i < array1.length; i++) {
		for (let j = 0; j < array2.length; j++) {
			if (array1[i] === array2[j]) {
				intersectionArray[count] = array1[i];
				count++;
			}
		}
	}
	return intersectionArray;
}

function difference(array1, array2) {
	if (array1.length > array2.length) {
		let counter = 0;
		let differenceArray = [];

		for (let i = 0; i < array1.length; i++) {
			isCommon = false;
			for (let j = 0; j < array2.length; j++) {
				if (array1[i] === array2[j]) {
					isCommon = true;
				}
			}

			if (!isCommon) {
				differenceArray[counter] = array1[i];
				counter++;
			}
		}

		return differenceArray;
	} else {
		return 'Difference cannot be found out.';
	}
}

let unionArray = union(array1, array2);
console.log('Array1 : ', array1);
console.log('Array2 : ', array2);
console.log('Union : ', unionArray);

let intersectionArray = intersection(array1, array2);
console.log('Intersection : ', intersectionArray);

let symmetricDifference = difference(unionArray, intersectionArray);
console.log('SymmetricDifference : ', symmetricDifference);
