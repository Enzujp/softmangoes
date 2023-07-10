// This  function handles the fibonacci expression

function fibonacciGenerator(n) {   
    var bigFib = [];
    if (i === 1) {
            bigFib = [0];
        } else if (i === 2) {
            bigFib = [0, 1]
    } else {
        bigFib = [0, 1]
        for (var i=2; i < n; i++) {
            bigFib.push(([bigFib.length-2 ]) + ([bigFib.length-1]));
        }
        
    }
   console.log(bigFib);
}


fibonacciGenerator(7)


// [0,1,1,2,5,7] - array length = 6
// Here's a feature view. 
// Adding a new number would be positions (6 - 2) added to (6 - 1)
// That is positions 4 added to position 5; this would add 5 and 7 from the list and give 12 which is the correct number
// in the fibonacci series.