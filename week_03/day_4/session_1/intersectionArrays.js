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

console.log(intersection(array1, array2));
