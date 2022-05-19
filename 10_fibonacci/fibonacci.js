const fibonacci = function(amount) {

    if (amount < 0) return 'OOPS';
    
    let a = 0;
    let b = 1;
    for (i = amount; i > 1; i--) {
        let numHold = b;
        b = a + b;
        a = numHold;
        }
    return b;
}
// Do not edit below this line
module.exports = fibonacci;




















