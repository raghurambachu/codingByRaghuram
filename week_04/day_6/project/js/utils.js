//formatting date
function getToday() {
	const today = new Date();
	const month = today.getMonth() + 1;
	const day = today.getDate();
	const year = today.getFullYear();
	return `${year}-${month}-${day}`;
}

//Validates user input in both of trackers
function validateTracker(trackerObject, arrType, handles) {
	if (trackerObject.name.length > 15) {
		handles[1].setAttribute('placeholder', 'Max 15 char ');
		return false;
	} else {
		//check if values are blank spaces i.e user is submitting without entering values.
		if (trackerObject.name !== '' && !isNaN(trackerObject.amount)) {
			arrType.push(trackerObject);
			handles[1].setAttribute('placeholder', `${trackerObject.label}`);
			handles[2].setAttribute('placeholder', 'amount');

			//Resetting the tracker input values
			handles[0].value = '';
			handles[1].value = '';
			handles[2].value = '';
			return true;
		} else {
			if (trackerObject.name === '') handles[1].setAttribute('placeholder', 'Set Valid Name');

			if (isNaN(trackerObject.amount)) handles[2].setAttribute('placeholder', 'Set amount > 0');
			return false;
		}
	}
}

//Returns an array of amounts by taking array of src or exp.
function getTargetAmountArr(arrayType) {
	const arrayOfAmount = arrayType.map(function(element) {
		return element.amount;
	});
	return arrayOfAmount;
}

//Calculates totals for source amount and expenses amount.
function calculateSum(arrayType) {
	//arrayType can be srcAmounts or expAmounts(two global arrays)
	let totalSum = 0;
	totalSum = arrayType.reduce(function(acc, curr) {
		return acc + curr;
	}, 0);
	return totalSum;
}

function updateBalance(srcSum, expSum) {
	return srcSum - expSum;
}

function isBalanceSuffecient(srcSum, expSum) {
	if (srcSum >= expSum) return true;
	return false;
}

//Prints the RHS Tables for both source and expenses
function printTable(arrayType, label, tableHandle) {
	let counter = 1;
	tableHandle.innerHTML = '';
	for (let type of arrayType) {
		tableHandle.innerHTML += `
                <tr>
                <th scope="row">${counter}</th>
                <td>${type.date}</td>
                <td>${type.name}</td>
                <td>Rs ${type.amount}</td>
              </tr>
                `;
		counter++;
	}
}
