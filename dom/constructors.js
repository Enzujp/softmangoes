// understanding Constructor functions
// using the prototype to insert nethods

function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}


// Prototypes are like methods, seperated from main constructor

User.prototype.login = function() {
    this.online = true
    console.log(this.email, 'has logged in');
    // this still has access to the characteristics of the objects
}

User.prototype.logout = function() {
    this.online = false;
    console.log(this.email, 'has logged out');
}

// inheritance in constructor
function Admin(...args) { //takes admin instance and places in an array
    User.apply()
}


var admin = new Admin('baby@gmail.com', 'baby');
var userOne = new User('enzu@gmail.com', 'enzu')
var userTwo = new User('jayjay@gmail.com', 'jayjay');

var users = [userOne, userTwo, admin];

// constructors can be used in place of classes
