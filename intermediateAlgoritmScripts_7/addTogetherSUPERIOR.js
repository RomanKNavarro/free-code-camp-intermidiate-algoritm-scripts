function addTogether2(args=2) {
  args = [...Object.values(arguments)];
  console.log(args);
/*   return function(a) {
    let args = [...Object.values(arguments)];
    if (typeof a === 'number') {
      return a + args[0];
    } else return undefined;
  }



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
  } */
}

addTogether2(2,3);
addTogether2();
/* addTogether2(5)(7); 
addTogether2(2, "5");  // undefined
addTogether2(2, [5]);  // undefined
addTogether2(5)(7);    */ 

// FIX THIS SHIT