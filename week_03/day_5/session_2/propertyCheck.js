const student = {
	name: 'Raghuram',
	id: 'id_1234',
	age: 26,
	nationality: 'Indian',
	course: [ 'javascript', 'fullstack' ]
};

function propertyCheck(obj, prop) {
	let propertyExists = false;
	for (let objKey in obj) {
		if (objKey === prop) {
			propertyExists = true;
			break;
		}
	}
	return propertyExists;
}

console.log(propertyCheck(student, 'nationality'));
