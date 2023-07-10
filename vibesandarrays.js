//  This program takes the list below and randomly selects one person to buy lunch today

const partyMembers = ['Jim Halpert', 'Pam Beasley', 'Stanley Hudson', 'Dwight Schrute', 
                        'Angela', 'Kelly Kapour', 'Ryan Howard']

// Math.random() generates a random number from 0-0.9999
// And Math.floor rounds the number down after the multiplication, to help make the range feasible


function whoBuysLunch(partyMembers) {
    //  first we need the length of the list
    var numberOfFriends = partyMembers.length
    var randomPostionGenerator = Math.floor(Math.random() * numberOfFriends)
    var whoBuys = partyMembers[randomPostionGenerator]
    
    console.log("The system has decided that " + whoBuys + " will be getting lunch for everyone of us today! Yay!")
}

whoBuysLunch(partyMembers);