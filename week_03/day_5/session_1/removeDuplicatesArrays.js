const duplicatesArray = [ 'raghuram', 'bachu ', 'javascript', 'raghuram', 5, 'bachu', 'fullstack', 'fullstack' ];

function removeDuplicates(duplicates) {
	const uniqueArray = [];
	let uniqueCounter = 0;

	for (const key in duplicates) {
		let isUnique = true;

		for (let i = 0; i < uniqueArray.length; i++) {
			if (uniqueArray[i] === duplicates[key]) {
				isUnique = false;
			}
		}

		if (isUnique) {
			uniqueArray[uniqueCounter] = duplicates[key];
			uniqueCounter++;
		}
	}

	return uniqueArray;
}

console.log(removeDuplicates(duplicatesArray));
