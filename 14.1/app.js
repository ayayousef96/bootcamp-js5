var arr = [2, 5, 6, 4, 3, 7];

// Using reduce to find max value
var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
});

// Using reduce to find sum of even  numbers
const sumEvens = arr => arr.filter(e => !(e % 2)).reduce((a, b) => a + b);

// Using reduce to find avg
const average = arr.reduce((a, b) => a + b, 0) / arr.length;
