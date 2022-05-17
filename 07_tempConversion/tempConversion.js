const ftoc = function(f) {
let c = (f - 32) * 5/9;
let rounded = Math.round(c * 10) / 10;
return rounded;
};

const ctof = function(c) {
let f = (c * 9/5) + 32;
let rounded = Math.round(f * 10) / 10;
return rounded;
};

// more efficient code below
const ftoc = function(f) {
  return Math.round((f - 32) * (5/9) * 10) / 10;
 };
 
 const ctof = function(c) {
   return Math.round(((c * 9/5) + 32) * 10) / 10;
 };
 
 

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
