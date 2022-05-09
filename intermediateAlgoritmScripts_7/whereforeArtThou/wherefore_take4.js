function meetsReq(collection, source) {
  const newArr = [];
  for (let i = 0; i < collection.length; i++) {
    if (Object.keys(source).every(key => Object.keys(collection[i]).includes(key)) 
    && Object.values(source).every(value => Object.values(collection[i]).includes(value))
    ) {
      newArr.push(collection[i]);
    }
  }
  return newArr;
}

meetsReq([{ "apple": 2, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], 
{ "apple": 1, "cookie": 2 })
// { "apple": 1, "bat": 2, "cookie": 2 }

meetsReq([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], 
{ "apple": 1, "cookie": 2 }) // [{ "apple": 1, "bat": 2, "cookie": 2 }]

meetsReq([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) // []

meetsReq([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
{ last: "Capulet" }) // [{ first: "Tybalt", last: "Capulet" }]
