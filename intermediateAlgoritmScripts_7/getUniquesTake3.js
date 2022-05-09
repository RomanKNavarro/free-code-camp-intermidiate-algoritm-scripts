function diffArr(arr1, arr2) {
  workingArr = arr1.concat(arr2);
  arrOfArrs = [];
}  

function getUniques(arr1, arr2) {
  const strArr = arr1.concat(arr2)
  const res = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr.indexOf(strArr[i]) === strArr.lastIndexOf(strArr[i])) {
      if (!res.includes(strArr[i])) {
        res.push(strArr[i]);
      }
    }
  }
  console.log(res);
}
// PASSED

getUniques(["andesite", "grass", "dirt", "pink wool", "dead shrub"], 
["diorite", "andesite", "grass", "dirt", "dead shrub"]); // SHOULD RETURN ['PINK WOOL', 'DIORITE']
