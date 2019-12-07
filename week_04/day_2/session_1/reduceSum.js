function reduceSum(arr, k) {
	let sum = arr.reduce(function(acc, val) {
		if (val > k) return acc + val;
		else return acc;
	}, 0);
	console.log(sum);
	return sum;
}

let val = 15;
const arr = [ 5, 7, 12, 15, 45, 55, 100, 14 ];

console.log(reduceSum(arr, val));
