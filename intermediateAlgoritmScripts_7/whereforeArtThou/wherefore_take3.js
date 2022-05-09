function meetsReq(collection, source) {
  let newArr = [];
  for (let i = 0; i < collection.length; i++) {
/*     if (Object.keys(source).every(function(key, index) {
      //collection.hasOwnProperty(source[key]) && collection[key] === source[key]
      collection[i].hasOwnProperty(source[key]);

    })) {
      newArr.push(collection[i]);
    }  */
    Object.keys(source).map(function(key, index) {
      if (collection[i].hasOwnProperty(key) && collection[i][key] === source[key]) {
        console.log(`{${key}:${source[key]}} is in ${JSON.stringify(collection[i])}`)   // this shit works
      }
      
    })

  }
  /* Object.keys(source).map(function(key, index) {
    console.log(`${key} has value: ${source[key]}`) // key, value
  }); */
}

meetsReq([{ "apple": 2, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })
