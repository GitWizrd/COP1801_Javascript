// Reference the output div to display results on the webpage
var output = document.getElementById("output");

// For loop that counts from 0 to 10 and checks if each number is odd or even
for (var i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        output.innerHTML += "Count " + i + " is even<br>";
    } else {
        output.innerHTML += "Count " + i + " is odd<br>";
    }
}

output.innerHTML += "<br>";

// Ask the user for a number between 5 and 20 and store it in myNum
var myNum = prompt("Please enter a number between 5 and 20:");

// Do/While loop that counts from 1 until the counter equals myNum
var counter = 1;

do {
    output.innerHTML += "Loop counter: " + counter + "<br>";
    counter++;
} while (counter <= myNum);

output.innerHTML += "<br>";

// Store subjects in an array
var subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

// Display array values using forEach
output.innerHTML += "<b>Subjects (forEach):</b><br>";
subjects.forEach(function(subject) {
    output.innerHTML += subject + "<br>";
});

output.innerHTML += "<br>";

// Display array values separated by commas using one statement
output.innerHTML += "<b>Subjects (joined):</b><br>";
output.innerHTML += subjects.join(", ");
