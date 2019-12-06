let disObj = {};
const arr1 = [ 'Raghuram', 'Bachu', 'learning', 'fullstack' ];
const arr2 = [ 'Javascript', 'is', 'awesome', 'Bachu' ];

function checkDisjoint(arr1, arr2) {
	arr1.forEach((element) => {
		disObj[element] = element;
	});
	arr2.forEach((element) => {
		disObj[element] = element;
	});

	arr1Length = Object.keys(arr1).length;
	arr2Length = Object.keys(arr2).length;
	disObjLength = Object.keys(disObj).length;

	let isDisJoint = arr1Length + arr2Length === disObjLength ? true : false;
	return isDisJoint;
}

console.log(checkDisjoint(arr1, arr2));
