// let's work on classes
// read on prototypes and classes and constructors

// Object literals cause messy codes

class User {
    constructor(email, name) {
       this.email = email;
       this.name = name; 
       this.score = 0;
    }

    login() {
        console.log(this.email, ' just logged in');
        return this;
    }
    logout() {
        console.log(this.email, 'just logged out');
    }
    updateScore() {
        this.score++;
        console.log(this.email, 'user score is now', this.score);
        return this; // by returning this, we return the particular instance, after executing the function and that allows for us to chain methods
    }
}

// console.log(userOne.login().updateScore().updateScore().logout());


// to create a class that inherits from another class use the keyword extends

// create an Admin class that inherits from User

class Admin extends User {
    constructor(email, name, profile) {
        super(email, name);
        this.profile = profile;
    }
    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email; // return to the list only emails that werent selected
        })
    }
    // if we dont have a constructor in the new class being created, the class inherits from the mother class

}
var admin = new Admin('baby@gmail.com', 'baby');
var userOne = new User('enzu@gmail.com', 'enzu')
var userTwo = new User('jayjay@gmail.com', 'jayjay');

var users = [userOne, userTwo, admin];
admin.deleteUser(userTwo);
console.log(users);