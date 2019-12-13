//const arr = [ 'Grade-1', 'Grade-2', 'Grade-3', 'Grade-4', 'Grade-5', 'Grade-1', 'Grade-2', 'Grade-2' ];

function getUniqueElements(arr) {
	const uniqueArr = [];
	if (!uniqueArr.length) uniqueArr.push(arr[0]);

	for (let i = 0; i < arr.length; i++) {
		let isExists = false;
		for (let j = 0; j < uniqueArr.length; j++) {
			if (uniqueArr[j] === arr[i]) {
				isExists = true;
				break;
			}
		}
		if (!isExists) uniqueArr.push(arr[i]);
	}
	return uniqueArr;
}

function getTotal(marksArray) {
	const sum = marksArray.reduce(function(acc, currVal) {
		return acc + currVal;
	});
	return sum;
}

function printTable(arrayOfStudents) {
	handles[9].innerHTML = '';
	counter = 1;
	for (let student of arrayOfStudents) {
		handles[9].innerHTML += `
                        <td>${counter}</td>
                        <td>${student.name}</td>
                        <td>${student.grade}</td>
                        <td>${student.science}</td>
                        <td>${student.maths}</td>
                        <td>${student.english}</td>
                        <td>${student.history}</td>
                        <td>${student.geography}</td>
                        <td>${student.total}</td>
                        <td>${student.average}</td>
                      
                `;
		counter++;
	}
}

function setHandleValuesToDefault(handle) {
	handle[0].value = '';
	console.dir(handles[1]);
	handle[1][0].selected = true;
	handle[2].value = '';
	handle[3].value = '';
	handle[4].value = '';
	handle[5].value = '';
	handle[6].value = '';
}

function setSelectTheGrades(students) {
	const ArrOfGrades = students.map(function(student) {
		return student.grade;
	});
	const getUniqueGrades = getUniqueElements(ArrOfGrades);
	let options = `<option value='all'>All</option>`;
	for (let option of getUniqueGrades) {
		options += `<option value="${option}">${option}</option>`;
	}
	handles[8].innerHTML = options;
}

function validateInputs(handles) {
	const arrayOfValidity = [];
	handles[0].value.length > 20 ? arrayOfValidity.push(false) : arrayOfValidity.push(true);
	for (let i = 2; i <= 6; i++) {
		if (
			parseFloat(handles[i].value) > 100 ||
			handles[i].value.length > 3 ||
			handles[i].value === '' ||
			parseFloat(handles[i].value) < 0
		) {
			arrayOfValidity.push(false);
		} else {
			arrayOfValidity.push(true);
		}
	}
	let counter = 0;
	for (let i = 0; i < arrayOfValidity.length; i++) {
		if (arrayOfValidity[i] === true) counter++;
	}

	//the last one in the array basically sees whether all are true, if all are valid it will push true as last element
	const allTrue = arrayOfValidity.length === counter ? true : false;
	arrayOfValidity.push(allTrue);
	return arrayOfValidity;
}

function showErrorMessage(validInputsArray, handles) {
	if (validInputsArray[0] === false) handles[0].setAttribute('placeholder', `can't be > 20 char`);
	if (validInputsArray[1] === false) handles[2].setAttribute('placeholder', 'enter valid marks');
	if (validInputsArray[2] === false) handles[3].setAttribute('placeholder', 'enter valid marks');
	if (validInputsArray[3] === false) handles[4].setAttribute('placeholder', 'enter valid marks');
	if (validInputsArray[4] === false) handles[5].setAttribute('placeholder', 'enter valid marks');
	if (validInputsArray[5] === false) handles[6].setAttribute('placeholder', 'enter valid marks');

	if (validInputsArray[0] === false) handles[0].value = '';
	if (validInputsArray[1] === false) handles[2].value = '';
	if (validInputsArray[2] === false) handles[3].value = '';
	if (validInputsArray[3] === false) handles[4].value = '';
	if (validInputsArray[4] === false) handles[5].value = '';
	if (validInputsArray[5] === false) handles[6].value = '';
}

function setPlaceHoldersToDefault(handles) {
	handles[0].setAttribute('placeholder', `name`);
	handles[2].setAttribute('placeholder', 'science');
	handles[3].setAttribute('placeholder', 'maths');
	handles[4].setAttribute('placeholder', 'english');
	handles[5].setAttribute('placeholder', 'history');
	handles[6].setAttribute('placeholder', 'geography');
}

function addEventHandlerForEdit(selector, eventType, handler) {
	let rootElement = document.querySelector('tbody');
	rootElement.addEventListener(
		eventType,
		function(event) {
			let targetElement = event.target;

			while (targetElement != null) {
				if (targetElement.matches(selector)) {
					handler(event);

					return;
				}
				targetElement = targetElement.parentElement;
			}
		},
		true
	);
}

function onClickingUpdate(handles, id) {
	console.log(id);
	handles[10].addEventListener('click', function() {
		const validInputsArray = validateInputs(handles);
		if (validInputsArray[6] === true) {
			const studObj = capturingStudentDataToObject(handles);

			allStudents[id] = studObj;

			printTable(allStudents);
			setHandleValuesToDefault(handles);
			setPlaceHoldersToDefault(handles);
			//Specifically setting the buttons
			handles[10].style.display = 'none';
			handles[7].style.display = 'initial';
			handles[7].style.marginLeft = '1.95em';
			setSelectTheGrades(allStudents);
		} else {
			showErrorMessage(validInputsArray, handles);
		}
	});
}

function displayOnForm(student, onClickingUpdate, id) {
	handles[0].value = student.name;
	handles[1].value = student.grade;
	handles[2].value = student.science;
	handles[3].value = student.maths;
	handles[4].value = student.english;
	handles[5].value = student.history;
	handles[6].value = student.geography;
	handles[7].style.display = 'none';
	handles[10].style.display = 'unset';
	handles[10].style.marginLeft = '1.6em';

	onClickingUpdate(handles, id);
}
