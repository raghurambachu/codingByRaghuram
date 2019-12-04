let array1 = [ 'shooting', 'learning', 'thinking', 'jogging', 'cycling', 'coding', 'fielding', 7 ];
let array2 = [ 'thinking', 'cycling', 'fielding', 'chilling', 5 ];

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

console.log(union(array1, array2));
