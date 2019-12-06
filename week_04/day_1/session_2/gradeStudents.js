let student = [
	{
		name: 'Raghuram',
		marks: 95
	},
	{
		name: 'Akshay',
		marks: 70
	},
	{
		name: 'Nani',
		marks: 63
	},
	{
		name: 'Ravi',
		marks: 57
	},
	{
		name: 'Janamajeya',
		marks: 45
	}
];

function gradeStudent(stud) {
	let withGrade = stud.map(function(element) {
		if (element.marks < 100) element.grade = 'A';
		if (element.marks < 90) element.grade = 'B';
		if (element.marks < 80) element.grade = 'C';
		if (element.marks < 60) element.grade = 'D';
		if (element.marks < 40) element.grade = 'F';
		return element;
	});

	return withGrade;
}

console.log(gradeStudent(student));
