function steamrollArray(arr) {
  var ret = [];
  for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          ret = ret.concat(steamrollArray(arr[i]));   // MISTAKE MADE:  forgot about variable assignment
      } else {
          ret.push(arr[i]);
      }
  }
  return ret;
}


// FIX THIS STUPID SHIT

/* steamrollArray([1, [2], [3, [[4]]]]); // => [1, 2, 3, 4]
steamrollArray([[["a"]], [["b"]]]); // => ['a', 'b'] */
console.log(steamrollArray([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]));