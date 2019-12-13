//Global Handles
const allStudents = [];

const studNameDOM = document.querySelector('#name');
const studGradeDOM = document.querySelector('#grade');
const studScienceDOM = document.querySelector('#science');
const studMathsDOM = document.querySelector('#maths');
const studEnglishDOM = document.querySelector('#english');
const studHistoryDOM = document.querySelector('#history');
const studGeographyDOM = document.querySelector('#geography');
const studAddBtnDOM = document.querySelector('#student-add');
const studGradesDOM = document.querySelector('#grades');
const studTableBodyDOM = document.querySelector('#student-table-body');

const studUpdateBtnDOM = document.querySelector('#student-update');

const handles = [
	studNameDOM,
	studGradeDOM,
	studScienceDOM,
	studMathsDOM,
	studEnglishDOM,
	studHistoryDOM,
	studGeographyDOM,
	studAddBtnDOM,
	studGradesDOM,
	studTableBodyDOM,
	studUpdateBtnDOM
];

function capturingStudentDataToObject(handles) {
	const name = handles[0].value.toUpperCase();
	const grade = handles[1].value;

	const science = parseFloat(handles[2].value);
	const maths = parseFloat(handles[3].value);
	const english = parseFloat(handles[4].value);
	const history = parseFloat(handles[5].value);
	const geography = parseFloat(handles[6].value);
	const marks = [ science, maths, english, history, geography ];
	const total = getTotal(marks);
	const average = total / marks.length;

	const studObj = {
		name,
		grade,
		science,
		maths,
		english,
		history,
		geography,
		total,
		average
	};

	return studObj;
}

//Event on Add Btn
handles[7].addEventListener('click', function() {
	const validInputsArray = validateInputs(handles);
	if (validInputsArray[6] === true) {
		const studObj = capturingStudentDataToObject(handles);

		allStudents.push(studObj);

		printTable(allStudents);
		setHandleValuesToDefault(handles);
		setPlaceHoldersToDefault(handles);
		setSelectTheGrades(allStudents);
	} else {
		showErrorMessage(validInputsArray, handles);
	}
});

//Event on Dropdown for selection of grades
handles[8].addEventListener('change', function(event) {
	const selectedGrade = event.target.value;
	const arrayOfStudentsOfSelectedGrade = allStudents.filter(function(student) {
		if (selectedGrade === student.grade) return student;
	});

	printTable(arrayOfStudentsOfSelectedGrade);

	if (selectedGrade === 'all') printTable(allStudents);
});

//addEventHandlerForEdit('td.stud-id', 'click', eventHandlerForEdit);

function eventHandlerForEdit(event) {
	const idOfSelected = parseInt(event.srcElement.parentElement.getAttribute('value'));
	const studentObject = allStudents[idOfSelected];
	displayOnForm(studentObject, onClickingUpdate, idOfSelected);
}
