const removeFromArray = function(...args) {
//   // the very first item in our list of arguments is the array, we pull it out with args[0]
  const array = args[0];
//   // create a new empty array
  const newArray = [];
//   // use forEach to go through the array
  array.forEach( function(element) {
//     // push every element into the new array
//     // UNLESS it is included in the function arguments
//     // so we create a new array with every item, except those that should be removed
    if (!args.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};

  // const removeFromArray = function(target,item) {

    // let array = [...target];
    // let removeIndex = array.indexOf(item);

    //   if (removeIndex > 1) {
    //     array.splice(removeIndex,1);
    //   };
    // return array;
  
    // THE ABOVE FUNCTION only removes the first data input in the parameter item
  // };


  // const removeFromArray = function(target,item) {

  //   let array = [...target];
  //   let toRemove = Array.from(item);
  //   const toGo = new Set(toRemove);

  //   const newArray = array.filter( (data) => {
  //     return !toGo.has(data);
  //   })
  //   return newArray;
  // };

  // and return that array


// define two paramateres within the function, one is the overall item, one is what needs to be removed from item
// item will alwasy be index 0, everyting else is index 1 or above
// Do not edit below this line
module.exports = removeFromArray;




// const removeFromArray = function(...args) {
//     const array = args[0];
//     const newArray = [];

//     array.forEach( function(element) {

//       if (!args.includes(element)) {
//         newArray.push(element);
//       }
//     });
//     return newArray;
//   };