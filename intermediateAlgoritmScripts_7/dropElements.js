function dropElements(arr, func) {
  let improvArr = [...arr]
  for (let i = 0; i <= arr.length; i++) {
    if (!func(arr[i])) {
      improvArr.splice(improvArr.indexOf(arr[i]), 1);
    }
    else return improvArr;
  }
  return []
}
console.log(dropElements([1, 2, 3], function(n) {return n < 3; })); // [1, 2, 3]
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;})) // []
// COMPLETE AND SUCCESSFUL