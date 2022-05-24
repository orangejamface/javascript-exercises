const palindromes = function (word) {
let noSpace = word.toUpperCase()
                  .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
                  .replace(/\s+/g, '');

let reversed = '';
for (let character of noSpace){
    reversed = character + reversed;
    }

if (reversed === noSpace) return true;
else return false
};
   


// Do not edit below this line
module.exports = palindromes;


//  THE ORIGINAL STEPS TAKEN TO MAKE UPPER CASE, REMOVE PUNC AND SPACE
// let upper = word.toUpperCase();
// let noPunc = upper.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
// let noSpace = noPunc.replace(/\s+/g, '');