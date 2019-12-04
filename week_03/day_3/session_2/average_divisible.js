let givenNumber = 3;
let limit = 10;
let count = 0,
	total = 0;
for (let i = 1; i < limit; i++) {
	if (i % givenNumber === 0) {
		count++;
		total += i;
		console.log(i, count, total);
	}
}
console.log(total / count);
