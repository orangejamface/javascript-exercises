

/// my code is a little clunky and long
const leapYears = function(entry) {

    if (entry % 4 == 0) {
        if (entry % 100 == 0) {
            if (entry % 400 == 0) {
                return true;
            }
            else {return false};
        }
        else {return true};
    }
    else {
        return false;
    }
};

// more effiecient!!! I see how this is better
// bascially it returns true is it first is divisible by four and then if it 
// either is not divisible by 100 or is by 400
// anything else is false


const leapYears = function(year) {
    return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
  };
  

// test entry against the following using an if conditional
// lets try using the remainder operator
// divisible by 4 = true
// divisible by 100 = false
// divisible by 400 = true
// so it will have to pass three stages 

// Do not edit below this line
module.exports = leapYears;
