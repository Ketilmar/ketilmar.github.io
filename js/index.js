

inputChange = document.querySelector('#input-field');

 inputChange.addEventListener('change', (event) => {

let inputNr = 0
// inputNr = document.getElementById("input-field").textContent
inputNr = document.getElementById("input-field").value;

let outputCalc = 0
outputCalc = document.getElementById("supporting-text-length")
outputCalc.textContent = inputNr + " Meters = " + (inputNr * 3.280).toFixed(3) + " Feet | " + inputNr + " Feet = " + (inputNr / 3.280).toFixed(3) + " Metres"

outputCalc = document.getElementById("supporting-text-volume")
outputCalc.textContent = inputNr + " Litre = " + (inputNr / 3.78541).toFixed(3) + " Gallons | " + inputNr + " Gallons = " + (inputNr * 3.78541).toFixed(3) + " Litre"

outputCalc = document.getElementById("supporting-text-mass")
outputCalc.textContent = inputNr + " Kilo = " + (inputNr * 2.20462262).toFixed(3) + " Pounds | " + inputNr + " Pounds = " + (inputNr / 2.20462262).toFixed(3) + " Kilo"
});