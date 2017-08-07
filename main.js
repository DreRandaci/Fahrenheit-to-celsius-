
function fahrenheitConverter(input) {
	let fahrenheitOutput = input*9/5 + 32;
	let fahrenheitAnswer = fahrenheitOutput.toFixed(1);
		if (fahrenheitAnswer > 90) {
			changeColor();		
		document.getElementById("output").classList.add('redText');
		} else if (fahrenheitAnswer < 32) {
			changeColor();
		document.getElementById("output").classList.add('blueText');
		} else {
			changeColor();
		document.getElementById("output").classList.add('greenText');
		};
	fahrenheitAnswer += '°F';
    document.getElementById('output').innerHTML = '<h3>That is ' + fahrenheitAnswer + '</h3>'; 
};

function celsiusConverter(input) {
	let celsiusOutput = (input-32) * 5/9;
	let celsiusAnswer = celsiusOutput.toFixed(1);
		if (celsiusAnswer > 32) {
			changeColor();		
		document.getElementById("output").classList.add('redText');
		} else if (celsiusAnswer < 0) {
			changeColor();		
		document.getElementById("output").classList.add('blueText');
		} else {
			changeColor();		
		document.getElementById("output").classList.add('greenText');
		};
	celsiusAnswer += '°C';	
	document.getElementById('output').innerHTML = '<h3>That is ' + celsiusAnswer + '</h3>'; 
};

function changeColor() {
	document.getElementById("output").classList.remove('redText', 'blueText', 'greenText');	
};

function determineConverter() {
	if (document.getElementById("fahrenheitRadio").checked) {
		let inputFahrenheit = parseFloat(document.getElementById("userInput").value);
		let returnedFahrenheit = fahrenheitConverter(inputFahrenheit);
		return returnedFahrenheit;
	} else if (document.getElementById("celsiusRadio").checked) {
		let inputCelsius = parseFloat(document.getElementById("userInput").value);
		let returnedCelsius = celsiusConverter(inputCelsius);
	  	return returnedCelsius;
	} else {
	  return ""; 
	};
};

function clearField() {
	document.getElementById("userInput").value = "";
	document.getElementById("output").innerHTML = "";
};

document.getElementById("convertButton").addEventListener('click', function(){determineConverter()});
document.getElementById("userInput").addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      	determineConverter();
      };
  });

document.getElementById("clearButton").addEventListener('click', function(){clearField()});


