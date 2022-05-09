function uniteUnique(arr) {
  let largeArr = [...new Set([...Object.values(arguments)].reduce((x, y) => x.concat(y)))];
  console.log(largeArr);
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// COMPLETE AND SUCCESSFUL