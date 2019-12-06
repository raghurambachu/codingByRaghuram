const student = {
	name: 'Raghuram',
	id: 'id_1234',
	age: 26,
	nationality: 'Indian',
	course: [ 'javascript', 'fullstack' ],
	password: 'javascript'
};

function propertyUpdate(stud, prop, value) {
	stud[prop] = value;
	return stud;
}

//property password already exists(updating test case)
console.log(propertyUpdate(student, 'password', 'fullstack'));

//property does'nt exist
console.log(propertyUpdate(student, 'hobby', 'cycling'));

//addSkills.js is same as the above[skipping the program]
