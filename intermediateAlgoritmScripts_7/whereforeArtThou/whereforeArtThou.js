function whatIsInAName (collection, source) {
  const arr = [];
  for (let i = 0; i < collection.length; i++) {
    for (let obja in collection[i]) {
      if (collection[i][obja] === source[Object.keys(source)[0]]) arr.push(collection[i]);
    }
  }
  console.log(arr);
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
{ last: "Capulet" })

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })
// SHOULD RETURN [{ "apple": 1, "bat": 2, "cookie": 2 }]

// FAILURE. ONLY WORKS IF "SOURCE" HAS A SINGLE VALUE