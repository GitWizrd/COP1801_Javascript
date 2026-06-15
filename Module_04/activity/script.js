// Reference the output div to display results on the webpage
var output = document.getElementById("output");

// Function to verify a valid service quality was entered
function validateQuality(quality) {
    quality = quality.toLowerCase();
    if (quality === "great" || quality === "ok" || quality === "poor") {
        return true;
    }
    return false;
}

// Function to verify a valid service amount was entered between $5 and $500
function validateAmount(amount) {
    if (amount >= 5 && amount <= 500) {
        return true;
    }
    return false;
}

// Function to calculate the tip amount based on service quality
function calculateTip(amount, quality) {
    quality = quality.toLowerCase();
    if (quality === "great") {
        return amount * 0.20;
    } else if (quality === "ok") {
        return amount * 0.15;
    } else {
        return amount * 0.10;
    }
}

// Prompt the user for the service amount and quality
var serviceAmount = parseFloat(prompt("Please enter the dollar amount of the service:"));
var serviceQuality = prompt("How was the service quality? Enter great, ok, or poor:");

// Validate service quality
if (!validateQuality(serviceQuality)) {
    output.innerHTML = "Invalid service quality entered. Please enter great, ok, or poor.";
}
// Validate service amount
else if (!validateAmount(serviceAmount)) {
    output.innerHTML = "Invalid service amount entered. Please enter an amount between $5.00 and $500.00.";
}
// If both are valid, calculate and display the tip
else {
    var tipAmount = calculateTip(serviceAmount, serviceQuality);
    output.innerHTML = "Based on " + serviceQuality + " service, the recommended tip for a $" +
        serviceAmount.toFixed(2) + " service is $" + tipAmount.toFixed(2) + ".";
}
