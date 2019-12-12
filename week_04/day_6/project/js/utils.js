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

function getHandlesFromLabel(label) {
	if (label === 'source')
		return [
			srcDateDOM,
			srcNameDOM,
			srcAmountDOM,
			srcAddBtnDOM,
			srcUpdateBtnDOM,
			srcDisplayDOM,
			sourceTableBodyDOM
		];
	return [ expDateDOM, expNameDOM, expAmountDOM, expAddBtnDOM, expUpdateBtnDOM, expDisplayDOM, expenseTableBodyDOM ];
}

function reformatDateForEdit(date) {
	return date.split('-').reverse().join('-');
}

function getAbbreviation(label) {
	if (label === 'source') return 'src';
	return 'exp';
}

function checkTargetTotal(label, currBtn, amountEnteredByUser) {
	let targetTotal;
	//Amount is in the format [Rs Value]
	const amtOnTableStr = currBtn.parentNode.parentNode.querySelector(`.${label}-amount`).innerText.split(' ');
	const amtOnTable = parseFloat(amtOnTableStr[1]);
	if (label === 'source') {
		targetTotal = totalSource - amtOnTable + amountEnteredByUser;
	} else {
		targetTotal = totalExpense - amtOnTable + amountEnteredByUser;
	}
	console.log(targetTotal);
	return targetTotal;
}

function checkForSuffecientBalance(targetTotal, label) {
	if (label === 'source') {
		return isBalanceSuffecient(targetTotal, totalExpense);
	} else {
		return isBalanceSuffecient(totalSource, targetTotal);
	}
}

//currBtn implies the edit button which has been pressed by the use in table
function addEventListenerToUpdateBtnOnTracker(arrayType, label, currBtn, handles) {
	handles[4].addEventListener('click', function() {
		if (handles[0].value !== '' && handles[1].value !== '' && !isNaN(parseFloat(handles[2].value))) {
			//check for balances
			const amountEnteredByUser = parseFloat(handles[2].value);
			const targetTotal = checkTargetTotal(label, currBtn, amountEnteredByUser);
			const formattedDate = handles[0].value.split('-').reverse().join('-');
			const balanceSuffecient = checkForSuffecientBalance(targetTotal, label);

			if (balanceSuffecient) {
				console.log('entered');
				arrayType[parseInt(currBtn.value)].date = formattedDate;
				arrayType[parseInt(currBtn.value)].name = handles[1].value;
				arrayType[parseInt(currBtn.value)].amount = parseFloat(handles[2].value);

				//to update table view
				const row = currBtn.parentNode.parentNode;
				row.querySelector(`.${label}-date`).innerText = formattedDate;
				row.querySelector(`.${label}-name`).innerText = handles[1].value;
				row.querySelector(`.${label}-amount`).innerText = `Rs ${handles[2].value}`;

				//update displayDOM(notification of what has been updated)
				handles[5].innerText = `${handles[1].value} with Rs ${handles[2].value} has been updated to table `;

				//balance is global
				if (label === 'source') {
					totalSource = targetTotal;
					balance = updateBalance(totalSource, totalExpense);
				} else {
					totalExpense = targetTotal;
					balance = updateBalance(totalSource, totalExpense);
				}
				balanceDOM.innerText = `Balance : Rs ${balance}`;

				//printTable(arrayType, label, handles[6]);

				handles[0].value = '';
				handles[1].value = '';
				handles[2].value = '';
				handles[3].style.display = 'initial';
				handles[4].classList.add(`${getAbbreviation(label)}-update`);
			} else if (!balanceSuffecient) {
				handles[0].value = '';
				handles[1].value = '';
				handles[2].value = '';
				handles[3].style.display = 'initial';
				handles[4].classList.add(`${getAbbreviation(label)}-update`);
				handles[5].innerHTML = `Tracker can't be updated as it may lead to balance insuffecient situation`;
			}
		} else {
			handles[0].value = '';
			handles[1].value = '';
			handles[2].value = '';
			handles[3].style.display = 'initial';
			handles[4].classList.add(`${getAbbreviation(label)}-update`);
			handles[5].innerText = `Please Fill all the inputs, don't leave them empty`;
		}
	});
}

function addEventListenerToEdit(arrayType, label, tableHandle) {
	//Select all the edit buttons
	const allEditBtnDOM = tableHandle.querySelectorAll(`.${label}-edit`);
	for (let editBtn of allEditBtnDOM) {
		editBtn.addEventListener('click', function() {
			const handles = getHandlesFromLabel(label);
			const targetDate = reformatDateForEdit(arrayType[parseInt(editBtn.value)].date);
			handles[0].value = targetDate;
			handles[1].value = arrayType[parseInt(editBtn.value)].name;
			handles[2].value = parseFloat(arrayType[parseInt(editBtn.value)].amount);
			handles[3].style.display = 'none';
			handles[4].classList.remove(`${getAbbreviation(label)}-update`);

			//adding event listener to Update button
			addEventListenerToUpdateBtnOnTracker(arrayType, label, editBtn, handles);
		});
	}
}

// function addEventListenerToDelete(arrayType, label, tableHandle) {
// 	const allDeleteBtnDOM = tableHandle.querySelectorAll(`.${label}-delete`);
// 	const handles = getHandlesFromLabel(label);
// 	for (let deleteBtn of allDeleteBtnDOM) {
// 		deleteBtn.addEventListener('click', function() {
// 			const indexOfItem = parseInt(deleteBtn.value);

// 			const testArrayBeforeDeletion = arrayType.map(function(element) {
// 				return element;
// 			});

// 			testArrayBeforeDeletion.splice(indexOfItem, 1);

// 			const getTargetAmountArray = getTargetAmountArr(testArrayBeforeDeletion);
// 			const targetTotal = calculateSum(getTargetAmountArray);

// 			if (label === 'source') {
// 				if (totalSource - targetTotal >= totalExpense) {
// 					//deletion permitted
// 					const trTag = document.querySelector(`#${label}-${indexOfItem}`);

// 					arrayType.splice(indexOfItem, 1);

// 					trTag.remove();

// 					totalSource = targetTotal;
// 					printTable(arrayType, label, handles[6]);

// 					balance = updateBalance(totalSource, totalExpense);

// 					balanceDOM.innerText = `Balance : Rs ${balance}`;
// 				} else {
// 					//deletion not permitted
// 					printTable(arrayType, label, handles[6]);
// 					deleteBtn.setAttribute(
// 						'title',
// 						'Deletion may lead to insuffecient Balance. Please update you are expenses before deletion of source. '
// 					);
// 				}
// 			} else {
// 				//In case its expense it can be deleted. It won't effect source
// 				arrayType.splice(indexOfItem, 1);
// 				deleteBtn.parentNode.parentNode.remove();
// 				printTable(arrayType, label, handles[6]);
// 				totalExpense = targetTotal;
// 				balance = updateBalance(totalSource, totalExpense);
// 				balanceDOM.innerText = `Balance : Rs ${balance}`;
// 			}
// 		});
// 	}
// }

//Prints the RHS Tables(basically tablebody is sent) for both source and expenses
function printTable(arrayType, label, tableHandle) {
	let counter = 1;
	tableHandle.innerHTML = '';
	for (let type of arrayType) {
		tableHandle.innerHTML += `
                <tr id="${label}-${counter - 1}">
                <th scope="row">${counter}</th>
                <td class="${label}-date">${type.date}</td>
                <td class="${label}-name">${type.name}</td>
		<td class="${label}-amount">Rs ${type.amount}</td>
		<td><button value="${counter -
			1}" class="${label}-edit" data-toggle="tooltip" title='Edit Source ${type.name}'><i class="fas fa-edit"></i></button></td>
              </tr>
		`;

		counter++;
	}

	addEventListenerToEdit(arrayType, label, tableHandle);
	//addEventListenerToDelete(arrayType, label, tableHandle);
}
