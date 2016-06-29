// declare variables
var inputField = document.getElementById('inputField');


// digits onclick functions
document.getElementById('zero').onclick = function(digit) {
	digit = document.getElementById('zero').innerHTML;
	write(digit);
};

document.getElementById('one').onclick = function(digit) {
	digit = document.getElementById('one').innerHTML;
	write(digit);
};

document.getElementById('two').onclick = function(digit) {
	digit = document.getElementById('two').innerHTML;
	write(digit);
};

document.getElementById('three').onclick = function(digit) {
	digit = document.getElementById('three').innerHTML;
	write(digit);
};

document.getElementById('four').onclick = function(digit) {
	digit = document.getElementById('four').innerHTML;
	write(digit);
};

document.getElementById('five').onclick = function(digit) {
	digit = document.getElementById('five').innerHTML;
	write(digit);
};

document.getElementById('six').onclick = function(digit) {
	digit = document.getElementById('six').innerHTML;
	write(digit);
};

document.getElementById('seven').onclick = function(digit) {
	digit = document.getElementById('seven').innerHTML;
	write(digit);
};

document.getElementById('eight').onclick = function(digit) {
	digit = document.getElementById('eight').innerHTML;
	write(digit);
};

document.getElementById('nine').onclick = function(digit) {
	digit = document.getElementById('nine').innerHTML;
	write(digit);
};

document.getElementById('dot').onclick = function(digit) {
	digit = document.getElementById('dot').innerHTML;
	write(digit);
};

document.getElementById('cancel').onclick = function() {
	cancel();
};

document.getElementById('backspace').onclick = function() {
	backspace();
};

document.getElementById('negate').onclick = function() {
	negate();
};

document.getElementById('equal').onclick = function() {
	equal();
};


// cancel function
var isCancelUsed;
function cancel() {
	inputField.value = 0;
	isCancelUsed = true;
}

// backspace function
var isBackspaceUsed;
function backspace() {
	inputField.value = inputField.value.substring(0,inputField.value.length-1);
	isBackspaceUsed = true;
}

// negate function
function negate() {
	inputField.value = inputField.value * (-1);
}

// equal function
var isEqualUsed;
var secondValue;
var originalSecondValue;

function equal() {

		if(!isEqualUsed) {
		secondValue = inputField.value;
		originalSecondValue = inputField.value;
		console.log("secondValue is " + secondValue);
		}

		switch(mathOperator) {
			case "add":
				inputField.value = parseFloat(firstValue) + parseFloat(originalSecondValue);
				break;
			case "substract":
				inputField.value = parseFloat(firstValue) - parseFloat(originalSecondValue);
				break;
			case "multiply":
				inputField.value = parseFloat(firstValue) * parseFloat(originalSecondValue);
				break;
			case "divide":
				inputField.value = parseFloat(firstValue) / parseFloat(originalSecondValue);
				break;
		}
		firstValue = inputField.value;
		isEqualUsed = true;
}



// write function
var isValueSaved;
var interimValue;

function write(digit) {
	if ((isValueSaved === true)  || (isCancelUsed === true) || (isEqualUsed === true) || (isBackspaceUsed === true)) {
		inputField.value = digit;
		interimValue = inputField.value;
		isValueSaved = false;
	} else {
						if (interimValue === undefined) {
							inputField.value = digit;
							interimValue = inputField.value;
						} else {
							inputField.value = interimValue + digit;
							interimValue = inputField.value;
						}
	}
	isCancelUsed = false;
	isEqualUsed = false;
	isBackspaceUsed = false;
}



// operators
var firstValue;
var mathOperator;


// add
document.getElementById('add').onclick = function() {
	add();
};

function add() {
	firstValue = inputField.value;
	isValueSaved = true;
	mathOperator = "add"
	console.log("firstValue is " + firstValue);
}

// substract
document.getElementById('substract').onclick = function() {
	substract();
};

function substract() {
	firstValue = inputField.value;
	isValueSaved = true;
	mathOperator = "substract"
	console.log("firstValue is " + firstValue);
}

// multiply
document.getElementById('multiply').onclick = function() {
	multiply();
};

function multiply() {
	firstValue = inputField.value;
	isValueSaved = true;
	mathOperator = "multiply"
	console.log("firstValue is " + firstValue);
}

// divide
document.getElementById('divide').onclick = function() {
	divide();
};

function divide() {
	firstValue = inputField.value;
	isValueSaved = true;
	mathOperator = "divide"
	console.log("firstValue is " + firstValue);
}