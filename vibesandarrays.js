const partyMembers = ['Jim Halpert', 'Pam Beasley', 'Stanley Hudson', 'Dwight Schrute', 
                        'Angela', 'Kelly Kapour', 'Ryan Howard']
var favePartyMember = partyMembers[0]

if (partyMembers.includes(favePartyMember)) {
    console.log(`Hi there ${favePartyMember}, welcome!`)
}


partyMembers.push('Kevin Malone')
if (partyMembers.includes('Kevin Malone')) {
    console.log("The list is now complete!")
}

console.log(partyMembers)