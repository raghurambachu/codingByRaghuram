const arr1 = [ 'Raghuram', 'Bachu', 'learning', 'fullstack', 'Javascript', 'is', 'awesome', 5 ];
const arr2 = [ 'Javascript', 'is', 'awesome', 'Bachu', 7 ]; //Remove this 7 to ensure that arr1 is superset.
let obj = {};

function checkSuperset(arr1, arr2) {
	arr1.forEach((element) => {
		obj[element] = element;
	});
	arr2.forEach((element) => {
		obj[element] = element;
	});
	arr1Length = Object.keys(arr1).length;
	objLength = Object.keys(obj).length; //this represents a union of arr1 and arr2

	if (arr1Length === objLength) {
		return true;
	} else {
		return false;
	}
}

console.log(checkSuperset(arr1, arr2));
