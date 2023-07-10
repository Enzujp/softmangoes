// Going to write a function that recreates a song about beer bottles
// push and pop only work for lists
var beerCount = 99;
var beerLeft = beerCount -1;


function beers() {
    while (beerCount <= 1) {
        console.log(beerCount + " bottles of beer on the wall"  + beerCount + " bottles of beer.\
        Take 1 down, pass it around." + beerLeft + " bottles of beer on the wall");
        if (beerCount === 1) {  console.log(beerCount + " bottles of beer on the wall"  + beerCount + " bottles of beer\
        Take 1 down, pass it around. No more bottles of beer on the wall");

        }
    beerCount--;
    }
    
}

beers()