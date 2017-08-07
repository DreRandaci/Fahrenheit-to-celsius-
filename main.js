

function fahrenheitConverter(input) {
	let fahrenheitOutput = input*9/5 + 32;
	let fahrenheitAnswer = fahrenheitOutput.toFixed(1);
		if (fahrenheitAnswer > 90) {
		document.getElementById("output").classList.remove('redText', 'blueText', 'greenText');
		document.getElementById("output").classList.add('redText');
		} else if (fahrenheitAnswer < 32) {
		document.getElementById("output").classList.add('blueText');
		} else {
		document.getElementById("output").classList.add('greenText');
		}
	fahrenheitAnswer += '°F';
    // console.log(fahrenheitOutput);
    document.getElementById('output').innerHTML = '<h3>That is ' + fahrenheitAnswer + '</h3>'; 
};

function celsiusConverter(input) {
	let celsiusOutput = (input-32) * 5/9;
	let celsiusAnswer = celsiusOutput.toFixed(1);
		if (celsiusAnswer > 32) {
		document.getElementById("output").classList.remove('redText', 'blueText', 'greenText');
		document.getElementById("output").classList.add('redText');
		} else if (celsiusAnswer < 0) {
		document.getElementById("output").classList.add('blueText');
		} else {
		document.getElementById("output").classList.add('greenText');
		}
	celsiusAnswer += '°C';
	// console.log(celsiusOutput);
	document.getElementById('output').innerHTML = '<h3>That is ' + celsiusAnswer + '</h3>'; 
};

// function printedColors() {
// 	if (celsiusConverter() > 32 || fahrenheitConverter() > 90) {
// 		document.getElementById("output").classList.add('redText');
// 	} else if (celsiusConverter() < 0 || fahrenheitConverter() < 32) {
// 		document.getElementById("output").classList.add('blueText');
// 	} else {
// 		document.getElementById("output").classList.add('greenText');
// 	};	
// };

function determineConverter() {
	// radioSelect ? fahrenheitConverter() : celsiusConverter();
	if (document.getElementById("fahrenheitRadio").checked) {
		let inputFahrenheit = parseFloat(document.getElementById("userInput").value);
		let returnedFahrenheit = fahrenheitConverter(inputFahrenheit);
		return returnedFahrenheit;
		//run print function
	} else if (document.getElementById("celsiusRadio").checked) {
		let inputCelsius = parseFloat(document.getElementById("userInput").value)
		let returnedCelsius = celsiusConverter(inputCelsius);
	  	return returnedCelsius;
	  	//run print function
	} else {
	  return ""; 
	};
};

function clearField() {
	document.getElementById("userInput").value = "";
	document.getElementById("output").innerHTML = "";
}

document.getElementById("convertButton").addEventListener('click', function(){determineConverter()});
document.getElementById("userInput").addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      	determineConverter();
      };
  });

document.getElementById("clearButton").addEventListener('click', function(){clearField()});



// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.




