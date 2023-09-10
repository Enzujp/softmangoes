// This is a test of my typing skills and see just how many words I can get in in a minute or so
// This app shows how to work with 
// Objects are in javascript what Dictionaries are in python 

var bellBoy1 = {
    name: 'Timmy',
    age: '20',
    languages: [
        'spanish', 'dutch'
    ]
}

//And use the dot '.' property to access the inner properties for bellBoy1

var houseKeeper1 = {
    name: 'jenny',
    yearsOfExperience: 6,
    married: false,
    age: 21,
    // if we wanted to add a function that would make our bell boy pick up the suitcase and move it
    moveSuitcase: function() {
        console.log("Do you want me to take your suitcase?")
    }
}


console.log(`this is ${houseKeeper1.name} and she's going to be working for us`);

// Too avoid repetition of code time and time again, create a function that takes in all the necessary
// information required for the class or group


//This is an example of a Constructor function that takes in 4 inputs
// and using this. notation matches the inputs to the property names.


function BellBoy(name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages; 
}

// to create an object from this, we would write the code thus:

var bellBoy2 = new BellBoy('Sammy', 19, true, ['english', 'spanish']); //This is how you initialize the object

// for another example, this is a housekeeper function created to keep track of new housekeepers

function HouseKeeper(name, age, yearsOfExperience, color) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.color = color;
    this.clean = function() {
        console.log("cleaning in progress!");
    }
        
}
    // Note that the function isnt added to the list of inputs

var houseKeeper3 = new HouseKeeper('Peter', 23, 4, 'Hispanic');
console.log(houseKeeper3.clean())


const houseKeeper2 = new HouseKeeper('Ada', 21, 1, 'caucasian');


//Higher Order functions contain callback functions 
// callback functions wait for higher order functions to be executed before they occur.