
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

*/


const inputEl = document.getElementById("input-el");
const buttonEl = document.getElementById("button-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

buttonEl.addEventListener("click", function() {
    const inputValue = inputEl.value;
    length(inputValue);
    volume(inputValue);
    mass(inputValue);
});


function length(inputValue) {
    const feet = inputValue * 3.281;
    const meters = inputValue * 0.3048;
    lengthEl.textContent = `${inputValue} meters = ${feet.toFixed(3)} feet | ${inputValue} feet = ${meters.toFixed(3)} meters`;
}

function volume(inputValue) {
    const litres = inputValue * 3.78541;
    const gallons = inputValue * 0.264;
    volumeEl.textContent = `${inputValue} liters = ${gallons.toFixed(3)} gallons | ${inputValue} gallons = ${litres.toFixed(3)} litres`;
}

function mass(inputValue) {
    const pounds = inputValue * 2.204;
    const kilos = inputValue * 0.453592;
    massEl.textContent = `${inputValue} kilos = ${pounds.toFixed(3)} pounds | ${inputValue} pounds = ${kilos.toFixed(3)} kilos`;
}



