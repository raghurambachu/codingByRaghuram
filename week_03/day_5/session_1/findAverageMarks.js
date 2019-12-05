const student1 = {
	name: 'Raghuram',
	marks: [ 75, 95, 100, 80 ]
};

function calculateAverage(student) {
	let sum = 0;
	if (student.marks.length) {
		// Only calculate average if there are marks in array
		for (let key in student.marks) {
			sum += student.marks[key];
		}

		return sum / student.marks.length;
	}
	return 'There is no marks in the marks array';
}

console.log('Average is : ', calculateAverage(student1));
