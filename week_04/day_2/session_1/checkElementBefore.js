const arr = [ 'Item1 50', 'Item2 60', 'Item3 30' ];
function totalCost(arr) {
	const sum = arr.reduce(function(accVal, currVal) {
		let val = parseInt(currVal.split(' ')[1]);
		return accVal + val;
	}, 0);
	return sum;
}

console.log(totalCost(arr));
