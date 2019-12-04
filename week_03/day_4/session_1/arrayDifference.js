let array1 = [ 'shooting', 'learning', 'thinking', 'jogging', 'cycling', 'coding', 'fielding', 7, 5 ];
let array2 = [ 'thinking', 'cycling', 'fielding', 'chilling', 5 ];

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

function difference(array1, intersectionArray) {
	if (array1.length > intersectionArray.length) {
		let counter = 0;
		let differenceArray = [];

		for (let i = 0; i < array1.length; i++) {
			isCommon = false;
			for (let j = 0; j < intersectionArray.length; j++) {
				if (array1[i] === intersectionArray[j]) {
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

intersectionArray = intersection(array1, array2);
//Intersection Array is being considered as the second array and it should be a subset
console.log('Array1 : ', array1);
console.log('Subset Array : ', intersectionArray);
console.log('Difference Array : ', difference(array1, intersectionArray));
