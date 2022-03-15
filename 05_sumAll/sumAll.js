const sumAll = function(...args) {
    // define variables for max number, min number, result at 0 to start, and an array of all arguments in the funtion.
    let max = Math.max(...args);
    let min = Math.min(...args);
    let arrayOfArgs = [...args];
    let result = 0;

    // if min is less than or equal to 0, return 'ERROR'
if (min <= 0)    {
    return 'ERROR';
}

// run a loop that adds numbers from min to max (includinug min and max), 
//do this by adding min to itself whilst it increases with each loop
// loop will compare i to max, if i is smaller than max, run loop until,  start i at 0 and increase i with every loop
for (i=0; i< max; i++)  {
    result += min;
    min++; 
}

//run .forEach on my array of arguements, if any of them are not a nuumber, return 'ERROR'
arrayOfArgs.forEach( function(item) {
    if (typeof item !== 'number') {
        result = 'ERROR';
    }
});
return result;
};

// define varibales, one that contains min number and another contains
// Do not edit below this line
module.exports = sumAll;
