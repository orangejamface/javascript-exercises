const reverseString = function(word) {

    // let stringArray = Array.from(word);
    // stringArray.reverse();
    // let newString = stringArray.join('');
    // return newString;

    // MORE EFFIECIENT BELOW
     return word.split('').reverse().join('');
};

// first define the legnth of the string
// us a loop to iterate through string chracters and return each one individually on its own variable
// then reorder characters so that they are in reverse, a string
// return new string

// create array from string, each item in array should be a single character
// re-order items in the array so that it has been reversed
// truen array back into string
// retrun new string
// Do not edit below this line
module.exports = reverseString;
