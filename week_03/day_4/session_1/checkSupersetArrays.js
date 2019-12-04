let array1 = [ 'shooting', 'learning', 'thinking', 'jogging', 'cycling', 'coding', 'fielding' ];
let array2 = [ 'thinking', 'cycling', 'fielding' ];

function checkSuperset(array1, array2) {
	let count = 0;
	if (array1.length <= array2.length) {
		return 'Array 1 is not Superset of Array2';
	} else {
		for (let i = 0; i < array1.length; i++) {
			for (let j = 0; j < array2.length; j++) {
				if (array1[i] === array2[j]) {
					count++;
				}
			}
		}

		console.log(count);
		if (count === array2.length) return 'Array1 is Superset';
		else return 'Array1 is not Superset';
	}
}

console.log(checkSuperset(array1, array2));
