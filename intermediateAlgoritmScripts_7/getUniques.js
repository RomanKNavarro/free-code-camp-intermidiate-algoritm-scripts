function diffArray(arr1, arr2) {
  const newArr = arr1.concat(arr2);  
  //console.log(newArr.filter((item, index) => {return newArr.indexOf(item) === index}));  
  let uniqueArr = [];
  for (let i = 0; i< newArr.length; i++) {
    if (uniqueArr.indexOf(newArr[i]) === -1) uniqueArr.push(newArr[i]);
  }
  console.log(uniqueArr);
}
  
  
  

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
 ["diorite", "andesite", "grass", "dirt", "dead shrub"]); // should return pink wool