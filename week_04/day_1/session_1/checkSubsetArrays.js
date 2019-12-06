let obj = {};

const arr1 = [ 'Javascript', 'is', 'awesome', 'Bachu', 'Something' ]; //Remove subset to get it as subset.
const arr2 = [ 'Raghuram', 'Bachu', 'learning', 'fullstack', 'Javascript', 'is', 'awesome' ];

function checkSubset(arr1, arr2) {
	arr1.forEach((element) => {
		obj[element] = element;
	});
	arr2.forEach((element) => {
		obj[element] = element;
	});
	arr2Length = Object.keys(arr2).length;
	objLength = Object.keys(obj).length; //this represents a union of arr1 and arr2

	if (arr2Length === objLength) {
		return true;
	} else {
		return false;
	}
}

console.log(checkSubset(arr1, arr2));
