

function whatIsInAName(collection, source) {
/*   for (let i = 0; i < collection.length; i++) {
    for (let val of source) {
      if (collection[i].hasOwnProperty(val) && collection[i][val] === source[val])  // FIX THIS FUCKING SHIT
    }
  } */
  for (let i in source) {
    console.log(source[i]); 
    i // returns key
  }
}
//if (collection[i].hasOwnProperty(source[prop]) && 


whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })