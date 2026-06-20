// Reference the output paragraph to display results on the webpage
var output = document.getElementById("output");

// Constructor function to define a dog object
function DogConstructor(name, show, breed, description, mySound, canTalk) {
    this.name = name;
    this.show = show;
    this.breed = breed;
    this.description = description;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // Object method that displays a greeting
    // Modified to check canTalk using a conditional statement and the this keyword
    this.myGreeting = function() {
        var talkStatus;
        if (this.canTalk === true) {
            talkStatus = "I can talk!";
        } else {
            talkStatus = "I cannot talk.";
        }

        return "Hello, my name is " + this.name + ", " + this.mySound +
            ". I starred in the TV show " + this.show + ". My character was a " +
            this.breed + ". I was the " + this.description + ". " + talkStatus;
    };
}

// Create two new dog objects from the Wikipedia list using the constructor
var dog1 = new DogConstructor(
    "Scooby-Doo",
    "Scooby-Doo Where Are You",
    "Great Dane",
    "lifelong companion of Shaggy Rogers in a show about a big dog and several teenage humans who solve mysteries",
    "when I bark you better watch out for ghosts",
    true
);

var dog2 = new DogConstructor(
    "Snoopy",
    "I Want a Dog for Christmas, Charlie Brown",
    "Beagle",
    "the imaginative beagle from the Peanuts comic strip and TV specials",
    "I don't bark much, I just think to myself",
    false
);

// Store the dogs in an array so we can search through them by name
var dogList = [dog1, dog2];

// Function to display all properties and values for a dog using a for...in loop
function displayDogProperties(dog) {
    var result = "";
    for (var property in dog) {
        if (typeof dog[property] !== "function") {
            result += property + ": " + dog[property] + "<br>";
        }
    }
    return result;
}

// Display the properties for both dogs using the for...in loop
output.innerHTML += "<b>Dog 1 Properties:</b><br>" + displayDogProperties(dog1) + "<br>";
output.innerHTML += "<b>Dog 2 Properties:</b><br>" + displayDogProperties(dog2) + "<br>";

// Call myGreeting for dog1 to display whether it can talk
output.innerHTML += "<b>Dog 1 Greeting:</b><br>" + dog1.myGreeting() + "<br><br>";

// Prompt the user to select one of the dogs by name
var selectedName = prompt("Type one of the dog's names to learn more: Scooby-Doo or Snoopy");

// Search the dogList array for a matching dog name
var foundDog = null;
for (var i = 0; i < dogList.length; i++) {
    if (dogList[i].name.toLowerCase() === selectedName.toLowerCase()) {
        foundDog = dogList[i];
    }
}

// Display the selected dog's information, or an error message if not found
if (foundDog !== null) {
    output.innerHTML += "<b>Selected Dog:</b><br>" + foundDog.myGreeting();
} else {
    output.innerHTML += "<b>Error:</b> The dog you selected, \"" + selectedName + "\", does not exist in our list.";
}
