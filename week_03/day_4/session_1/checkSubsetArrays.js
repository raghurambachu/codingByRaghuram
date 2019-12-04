let array1 = [ 'thinking', 'cycling', 'fielding' ];
let array2 = [ 'shooting', 'learning', 'thinking', 'jogging', 'cycling', 'coding', 'fielding' ];

function checkSubset(array1, array2) {
	let count = 0;
	if (array1.length > array2.length) return 'Array1  is not a subset of Array2 ';
	else {
		for (let i = 0; i < array1.length; i++) {
			for (let j = 0; j < array2.length; j++) {
				if (array1[i] === array2[j]) {
					count++;
				}
			}
		}
		console.log(count);
		if (count === array1.length) return 'Array1 is Subset';
		else return 'Array2 is not Subset';
	}
}

console.log(checkSubset(array1, array2));
