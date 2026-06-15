// Reference the output div to display results on the webpage
var output = document.getElementById("output");

// Object Literal - myDog
var myDog = {
    name: "Astro",
    show: "The Jetsons",
    breed: "Great Dane",
    description: "family dog in a cartoon about a family in the future",
    mySound: "when I bark I am not scary"
};

// Display the object literal properties in a descriptive message
output.innerHTML += "Hello, my name is " + myDog.name + ", " + myDog.mySound +
    ". I starred in the TV show " + myDog.show + ". My character was a " +
    myDog.breed + ". I was the " + myDog.description + "." + "<br><br>";

// Object Constructor - myDogConst
function DogConstructor(name, show, breed, description, mySound, canTalk) {
    this.name = name;
    this.show = show;
    this.breed = breed;
    this.description = description;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // Object method that displays a greeting
    this.myGreeting = function() {
        output.innerHTML += "Hello, my name is " + this.name + ", " + this.mySound +
            ". I starred in the TV show " + this.show + ". My character was a " +
            this.breed + ". I was the " + this.description + ".";
    };
}

// Create the constructor object using the same dog information
var myDogConst = new DogConstructor(
    "Astro",
    "The Jetsons",
    "Great Dane",
    "family dog in a cartoon about a family in the future",
    "when I bark I am not scary",
    false
);

// Call the object method to display the greeting
myDogConst.myGreeting();
