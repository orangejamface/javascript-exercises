const repeatString = function(word, number) {
    if (number < 0 )   { 
        return 'ERROR'
    }
    let returnWord = '';
    for (i=number; i>0; i--)  {
        returnWord += word;
    }
return returnWord;  
};


// First need to 
// Do not edit below this line
module.exports = repeatString;
