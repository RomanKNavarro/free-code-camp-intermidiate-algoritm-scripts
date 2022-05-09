function meetsReq(collection, source) {
  let newArr = [];
  for (let i = 0; i < collection.length; i++) {
/*     Object.keys(source).map(function(key, index) {
      if (collection[i].hasOwnProperty(key) && collection[i][key] === source[key]) {
        console.log(`{${key}:${source[key]}} is in ${JSON.stringify(collection[i])}`) //  ALMOST THERE
      }
    })  */

    if (Object.keys(source).map(function(key, index) {
      if (collection[i].hasOwnProperty(key) && collection[i][key] === source[key]) {
        newArr.push(collection[i])
      }
    })) {
    } 

  }   
/*   let supaArr = [...new Set(newArr.filter(obj => Object.keys(obj).length >= Object.keys(source).length))];
  console.log(supaArr); */
  let workingArr = [...new Set(newArr.filter(obj => Object.keys(obj).length >= Object.keys(source).length))]; // EVER CLOSER TO WINNING
  let sourceKeys = Object.keys(source);
  let checker = (arr, target) => target.every(v => arr.includes(v) && arr[v] === target[v]); 
  //let checker = (arr, target) => target.map(v => arr.includes(v) && arr[v] === v);
  // ^^ check if every elem in "target" is in "arr".

  //let pureArr = workingArr.filter(obj => checker(Object.keys(obj, sourceKeys))); 
  for (let i = 0; i < workingArr.length; i++) {
    if (checker(Object.keys(workingArr[i]), sourceKeys)) console.log(workingArr[i])   // CORRECT, NOW CHECK IF VALUES ARE THE SAME TOO
  }
  //console.log(sourceKeys); 
}        

meetsReq([{ "apple": 2, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], 
{ "apple": 1, "cookie": 2 })
// { "apple": 1, "bat": 2, "cookie": 2 }

meetsReq([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], 
{ "apple": 1, "cookie": 2 }) // [{ "apple": 1, "bat": 2, "cookie": 2 }]

meetsReq([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) // []


/*     Object.keys(source).map(function(key, index) {
      if (collection[i].hasOwnProperty(key) && collection[i][key] === source[key]) {
        console.log(`{${key}:${source[key]}} is in ${JSON.stringify(collection[i])}`)   // this shit works
      }
    })
  } */