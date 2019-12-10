let stringAppendToInput = '';
const enterBtn = document.querySelector('.btn-enter');

enterBtn.addEventListener('click', function() {
	let minScore = document.querySelector('.min-score');
	let maxScore = document.querySelector('.max-score');
	let inputHandle = document.querySelector('.score-value');

	maxScore.style.color = 'black';
	minScore.style.color = 'black';

	let minimumScore = parseInt(minScore.innerText);
	let maximumScore = parseInt(maxScore.innerText);

	let inputValue = parseInt(inputHandle.value);

	if (!inputValue) {
		inputHandle.value = '';
		alert('Enter Valid Number');
	} else {
		if (inputValue > maximumScore) {
			maxScore.innerText = inputValue;
			maxScore.style.color = 'yellow';
		}
		if (inputValue < minimumScore) {
			minScore.innerText = inputValue;
			minScore.style.color = 'yellow';
		}
		stringAppendToInput = '';
		inputHandle.value = '';
	}
});

document.querySelectorAll('.num-row').forEach(function(eachDiv) {
	eachDiv.addEventListener(
		'click',
		(event) => {
			let source = event.srcElement;
			let inputHandle = document.querySelector('.score-value');

			if (source.localName === 'div') {
				//extract the text from div pressed
				pressedValue = source.childNodes[1].innerText;

				//console.dir(pressedValue);
			} else {
				pressedValue = source.innerText;

				//console.dir(source);
			}
			let str = appendInput(pressedValue);
			if (str.length > 8) {
				inputHandle.value = '';
				str = '';
				str = appendInput(str);
				alert('Please Enter numbers upto 8 digits');
			}
			let strInt;
			if (str) strInt = parseInt(str);
			else strInt = str;
			inputHandle.value = strInt;
		},
		appendInput
	);
});

function appendInput(strInput) {
	if (strInput === '') stringAppendToInput = '';

	stringAppendToInput += strInput;
	return stringAppendToInput;
}
