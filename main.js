
let userInput = document.getElementById("userInput").value;
// userInput = parseFloat(userInput);

function fahrenheitConverter(input) {
	// debugger;
	let fahrenheitOutput = (input-32) * 5/9;
	fahrenheitOutput = fahrenheitOutput.toFixed(1);
	// var fahrenheitString = fahrenheitOutput + "°F";
    // return fahrenheitString;
    console.log(fahrenheitOutput);
    return fahrenheitOutput; //+ "°F";
};

// console.log(fahrenheitConverter(0))

function celsiusConverter(input) {
	let celsiusOutput = input*9/5 + 32;
	celsiusOutput = celsiusOutput.toFixed(1);
	console.log(celsiusOutput);
	return celsiusOutput; //+ "°C";
};

// console.log(celsiusConverter(0))

function determineConverter(input) {
	let radioSelectFahr = document.getElementById("fahrenheitRadio").checked;
	let radioSelectCel = document.getElementById("celsiusRadio").checked;
	let output = document.getElementById("output");
	// radioSelect ? fahrenheitConverter() : celsiusConverter();
	// debugger;
	if (radioSelectFahr) {
		return output.innerHTML = fahrenheitConverter(input);

		// return output;
	} else {
	  	// output += '<h3>' + celsiusConverter(input) + '</h3>';
	  	return output.innerHTML = celsiusConverter(input);
	  	// return output;
	};
};
// console.log(determineConverter());
// console.log(userInput);
// let convertedTemp = determineConverter();

let convertButton = document.getElementById("convertButton").addEventListener('click', determineConverter(userInput));



// output.innerHTML = determineConverter(userInput); 







