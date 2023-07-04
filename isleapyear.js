// This function takes in a year and tells you if it is a leap year or not

function isLeapYear(year) {
    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0 ) {
        console.log("It's a leap year baby!");
    } else if(year % 4 === 0 ) {
        console.log("It's a leap year baby!")
    } else{
        console.log("It's not a leap year")
    }
    
}

isLeapYear(2000)