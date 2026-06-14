// Ask the user for their first name and store it in Fname
var Fname = prompt("Please enter your first name:");

// Create a constant to store the value of Pi to 7 significant digits
const piValue = 3.1415926;

// Ask the user for their favorite number and store it in myFavNum
var myFavNum = prompt("Please enter your favorite number:");

// Calculate the area of a circle using myFavNum as the radius
// Formula: A = pi * r * r
var myArea = piValue * myFavNum * myFavNum;

// Round myArea to 6 decimal places to match the example output
myArea = Math.round(myArea * 1000000) / 1000000;

// Display the contents of each variable to the webpage
document.getElementById("output").innerHTML =
    "Hello " + Fname + ", you entered " + myFavNum +
    " as your favorite number. If that was the radius of a circle, " +
    "the circle's area would be " + myArea + ".";
