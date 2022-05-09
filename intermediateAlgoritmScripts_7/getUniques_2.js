function diffArray(arr1, arr2) {
  //let workingArr = [...arguments].concat([]).sort();  // shorter one is [0], longer is [1]
  let workingArr = [...arguments].concat([]).sort((a, b) => a.length - b.length);   // sorts from shortest to longest array
  let newArr = [];
  for (let y of workingArr[1]) {
    if (!workingArr[0].includes(y)) newArr.push(y);
    else if (!workingArr[1].includes(y)) newArr.push(y);
  } 

  console.log(newArr);
}   // FAILURE

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
["diorite", "andesite", "grass", "dirt", "dead shrub"]);  // RETURNS "PINK WOOL" (GOOD)
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], 
["diorite", "andesite", "grass", "dirt", "dead shrub"]); // SHOULD RETURN ['PINK WOOL', 'DIORITE']