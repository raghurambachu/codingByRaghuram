let array1 = [ 'big', 'think', 'bachu', 'javascript' ];
let array2 = [ 'thinking', 'big' ];

let array3 = [ 1, 2, 3, 4, 'Indian' ];
let array4 = [ 'something', '1', 2 ];

function checkDisjoint(array1, array2) {
	let accumulate = [];
	let accCounter = 0;
	for (let i = 0; i < array2.length; i++) {
		for (let j = 0; j < array1.length; j++) {
			if (array2[i] === array1[j]) {
				accumulate[accCounter] = array1[j];
				accCounter++;
			}
		}
	}
	return accumulate.length;
}

if (checkDisjoint(array1, array2)) console.log('Not a Disjoint arrays');
else console.log('Disjoint array');

//testing purpose
console.log(checkDisjoint(array3, array4));
//This too is not a disjoint array
