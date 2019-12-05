const duplicatesArray = [ 'raghuram', 'bachu ', 'javascript', 'raghuram', 5, 'bachu', 'fullstack', 'fullstack' ];

function removeDuplicatesObj(duplicates) {
	const uniqueArray = [];
	let counter = 0;

	for (let key in Object.keys(duplicates)) {
		let isUnique = true;
		for (let i = 0; i < uniqueArray.length; i++) {
			if (uniqueArray[i] == duplicates[key]) {
				isUnique = false;
			}
		}
		if (isUnique) {
			uniqueArray[counter] = duplicates[key];
			counter++;
		}
	}

	return uniqueArray;
}

console.log(removeDuplicatesObj(duplicatesArray));
