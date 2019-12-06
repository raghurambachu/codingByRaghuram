// function pyramid(level) {
// 	let pyrStr = '';
// 	for (let i = 0; i < level; i++) {
// 		for (let j = 0; j < 2 * level + 1; j++) {
// 			if (j === level - i) {
// 				pyrStr += '*';
// 			} else {
// 				pyrStr += '.';
// 			}
// 		}
// 		pyrStr += '\n';
// 	}
// 	return pyrStr;
// }

function repeatPattern(pattern, num) {
	let partOfRow = '';
	for (let i = 0; i < num; i++) {
		partOfRow += pattern;
	}
	return partOfRow;
}

function pyramid(level) {
	let createdRow = '';
	for (let i = 0; i < level; i++) {
		createdRow =
			createdRow + repeatPattern('-', level - i - 1) + repeatPattern('-x', i + 1) + repeatPattern('-', level - i);
		createdRow += '\n';
	}
	return createdRow;
}

function inversePyramid(level) {
	let createdRow = '';
	for (let i = 0; i < level; i++) {
		createdRow = createdRow + repeatPattern('-', i + 1) + repeatPattern('x-', level - i) + repeatPattern('-', i);
		createdRow += '\n';
	}

	return createdRow;
}

function rhombus(level) {
	let createdRow = '';
	for (let i = 0; i < 2 * level - 1; i++) {
		if (i <= (2 * level - 1) / 2) {
			createdRow =
				createdRow +
				repeatPattern('-', level - i) +
				repeatPattern('x-', i + 1) +
				repeatPattern('-', level - i - 1);
			createdRow += '\n';
		} else {
			createdRow =
				createdRow +
				repeatPattern('-', i - level + 2) +
				repeatPattern('x-', 2 * level - 1 - i) +
				repeatPattern('-', i - level + 1);
			createdRow += '\n';
		}
	}
	return createdRow;
}

console.log(pyramid(6));
console.log(inversePyramid(6));
console.log(rhombus(7));
