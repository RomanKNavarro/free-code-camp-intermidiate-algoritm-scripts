function addTogether() {
  //console.log([...Object.values(arguments)]);
  let args = [...Object.values(arguments)];
  if (args.every(arga => typeof arga === 'number')) {    
    if (args.length === 2) {
      console.log(args[0] + args[1]);
    } else {
      return function(a) {
        if (typeof a === 'number') {
          return a + args[0];
        } else return undefined;
      }
    }
  } else {
    console.log(undefined);               // FIX THIS SHIT
  }
}                                         
// THIS SHIT WORKS AND PASSES CHALLENGE,BUT THIS SHIT IS TOO LONG AND PRIMITIVE. 
// MAKE BETTER VERSION
addTogether(2,3);``
addTogether(5)(7); 
addTogether(2, "5");  // undefined
addTogether(2, [5]);  // undefined
addTogether(5)(7);    
// ^^THIS IS TWO CALLS TO THE FUNCTION, NOT ONE, SO THE SECOND ARGUMENT GOES TO THE INNER FUNCTION
// FUCKING EASY TO COMPREHEND AND IMPLEMENT
console.log(addTogether(2)([3]));   // RETURNS 32, SHOULD BE UNDEFINED
// SUCCESS AND COMPLETE

