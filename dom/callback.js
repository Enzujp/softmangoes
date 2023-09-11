var userOne = {
    name: 'Jay Tosin',
    email: 'thisisjay@google.com',
    login(){
        console.log(this.email + 'has logged in'); // this refers to the object
    }
};

// console.log(userOne.login);

// properties can be accessed used the square brackets
console.log (userOne['name']);