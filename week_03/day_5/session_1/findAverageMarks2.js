student = {
	name: 'Raghuram',
	marks: [ 90, 75, 100, 80 ],
	average: function() {
		// write code here

		let sum = 0;
		for (let key in this.marks) {
			sum += this.marks[key];
		}
		return sum / this.marks.length;
	}
};

console.log(student.average());
