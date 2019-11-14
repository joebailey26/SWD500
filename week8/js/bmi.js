var height = "170";
var weight = "50kg";

function calculateBmi(weight, height) {
    console.log((parseInt(weight) / (Math.pow(parseInt(height), 2)) * 10000).toFixed(1));
}



document.addEventListener("DOMContentLoaded", run)

function run() {
    calculateBmi(weight, height);
}