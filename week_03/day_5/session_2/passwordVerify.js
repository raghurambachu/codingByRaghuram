const student = {
	name: 'Raghuram',
	id: 'id_1234',
	age: 26,
	nationality: 'Indian',
	course: [ 'javascript', 'fullstack' ],
	password: 'javascript'
};

function verifyPassword(stud, pass) {
	if (stud.password === pass) return true;

	return false;
}

console.log(verifyPassword(student, 'javascript'));
