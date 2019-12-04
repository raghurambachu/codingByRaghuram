let limit = 10;
let givenNumber = 3;
let i = 1;
let count = 0,
	total = 0;
while (i < limit) {
	if (i % givenNumber === 0) {
		count++;
		total += i;
		console.log(i, count, total);
	}
	i++;
}

console.log('Average is : ', total / count);
