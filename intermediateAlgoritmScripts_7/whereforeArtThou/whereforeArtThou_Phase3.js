function meetsReq(collection, source) {
  let scubaArr = [];
  let newArr = [];
  for (let i = 0; i < collection.length; i++) {
    if (Object.keys(source).map(function(key, index) {
      if (collection[i].hasOwnProperty(key) && collection[i][key] === source[key]) {
        if (newArr.indexOf(collection[i]) === -1) newArr.push(collection[i]);
      }
    })) {
    } 
  } 
  let workingArr = [...new Set(newArr.filter(obj => Object.keys(obj).length >= Object.keys(source).length))];  
  let sourceKeys = Object.keys(source);
  let sourceValues = Object.values(source);
  //console.log(sourceValues);

  for (let i = 0; i < workingArr.length; i++) {
    /* if (sourceValues.every(value => value in Object.values(workingArr[i]))) {
      console.log(workingArr[i]); 
    }*/
    console.log(Object.values(workingArr[i]));    // FIX THIS SHIT
       // CORRECT, NOW CHECK IF VALUES ARE THE SAME TOO
  }
}        
meetsReq([{ "apple": 2, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], 
{ "apple": 1, "cookie": 2 })
// { "apple": 1, "bat": 2, "cookie": 2 }

meetsReq([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], 
{ "apple": 1, "cookie": 2 }) // [{ "apple": 1, "bat": 2, "cookie": 2 }]

meetsReq([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) // []

meetsReq([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
{ last: "Capulet" }) // [{ first: "Tybalt", last: "Capulet" }]


