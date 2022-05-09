function seekDestroy(arr, ...args) {
  let uniques = [];
  for (let i = 0; i < arr.length; i++) {
    if (![...args].includes(arr[i])) uniques.push(arr[i]);
  }
  console.log(uniques);
}

seekDestroy([1, 2, 3, 4, 5], 2, 4);         // [1, 2, 3, 4, 5, 2, 4]
seekDestroy([1, 2, 3, 5, 1, 2, 3], 2, 3);
// COMPLETE AND SUCCESSFUL