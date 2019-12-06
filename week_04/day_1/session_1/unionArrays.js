const arr1 = [ 'Raghuram', 'Bachu', 'learning', 'fullstack', 'Javascript', 'is', 'awesome', 5 ];
const arr2 = [ 'Javascript', 'is', 'awesome', 'Bachu', 7 ];
let unionObj = {};

function union(arr1, arr2) {
	let unionArray = [];
	arr1.forEach((element) => {
		unionObj[element] = element;
	});
	arr2.forEach((element) => {
		unionObj[element] = element;
	});

	for (let element in unionObj) {
		unionArray.push(unionObj[element]);
	}

	return unionArray;
}

console.log(union(arr1, arr2));
