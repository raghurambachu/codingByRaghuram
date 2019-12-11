// global DOM handles
const srcAddBtnDOM = document.querySelector('.src-add');
const srcDateDOM = document.querySelector('.src-date');
const srcNameDOM = document.querySelector('.src-name');
const srcAmountDOM = document.querySelector('.src-amt');
const srcDisplayDOM = document.querySelector('.src-display');

const balanceDOM = document.querySelector('#balance');

const expAddBtnDOM = document.querySelector('.exp-add');
const expDateDOM = document.querySelector('.exp-date');
const expNameDOM = document.querySelector('.exp-name');
const expAmountDOM = document.querySelector('.exp-amt');
const expDisplayDOM = document.querySelector('.exp-display');

const sourceTableBodyDOM = document.querySelector('#source-tbody');
const expenseTableBodyDOM = document.querySelector('#expense-tbody');

//global variables
const src = [];
const exp = [];
let balance = 0;
let totalSource = 0;
let totalExpense = 0;
const dateRegex = (regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/);

//add functionality for Source Tracker
srcAddBtnDOM.addEventListener('click', function(event) {
	const handles = [ srcDateDOM, srcNameDOM, srcAmountDOM ];
	let orgSrcDate = handles[0].value;
	if (!orgSrcDate) orgSrcDate = getToday();

	//formatting date as dd-mm-yyyy(default as yyyy-mm-dd)
	let srcDate = orgSrcDate.split('-').reverse().join('-');

	let srcName = handles[1].value;
	let srcAmount = parseFloat(handles[2].value);

	const srcObject = {
		date: srcDate,
		name: srcName,
		amount: srcAmount,
		label: 'source'
	};

	//object , array with which it needs to be pushed and (sourceDOM input handles are sent)
	const isValid = validateTracker(srcObject, src, handles);

	if (isValid) {
		const arraySrcAmounts = getTargetAmountArr(src);
		srcDisplayDOM.innerText = `${srcObject.name} with Rs ${srcObject.amount} has been added to your receipts.`;
		totalSource = calculateSum(arraySrcAmounts);
	}

	//balance is global
	balance = updateBalance(totalSource, totalExpense);
	balanceDOM.innerText = `Balance : Rs ${balance}`;

	printTable(src, srcObject.label, sourceTableBodyDOM);
});

//add functionality for Expense Tracker
expAddBtnDOM.addEventListener('click', function(event) {
	const handles = [ expDateDOM, expNameDOM, expAmountDOM ];
	let orgExpDate = handles[0].value;
	if (!orgExpDate) orgExpDate = getToday();

	//formatting date as dd-mm-yyyy(default as yyyy-mm-dd)
	let expDate = orgExpDate.split('-').reverse().join('-');

	let expName = handles[1].value;
	let expAmount = parseFloat(handles[2].value);

	const expObject = {
		date: expDate,
		name: expName,
		amount: expAmount,
		label: 'expense'
	};

	let suffecientBalance = isBalanceSuffecient(totalSource, totalExpense + expObject.amount);

	if (expObject.amount === '' || isNaN(expObject.amount) || expObject.name === '') suffecientBalance = true;

	if (suffecientBalance) {
		//object , array with which it needs to be pushed and (expenseDOM input handles are sent)
		const isValid = validateTracker(expObject, exp, handles);

		if (isValid) {
			const arrayExpAmounts = getTargetAmountArr(exp);
			expDisplayDOM.innerText = `${expObject.name} with Rs ${expObject.amount} has been added to your expenditure.`;
			totalExpense = calculateSum(arrayExpAmounts);
		}
	} else {
		expDisplayDOM.innerText = `${expObject.name} could'nt  be added. Balance insuffecient by Rs : ${totalExpense +
			expObject.amount -
			totalSource}`;
		handles[0].value = '';
		handles[1].value = '';
		handles[2].value = '';
		handles[1].setAttribute('placeholder', 'expense');
		handles[2].setAttribute('placeholder', 'amount');
	}

	//balance is global
	balance = updateBalance(totalSource, totalExpense);
	balanceDOM.innerText = `Balance : Rs ${balance}`;

	printTable(exp, expObject.label, expenseTableBodyDOM);
});
