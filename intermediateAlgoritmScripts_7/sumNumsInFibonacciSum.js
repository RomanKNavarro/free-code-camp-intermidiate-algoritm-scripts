// sumFibs(10) => 10 ----> (1, 1, 2, 3, 5, 8) -> 1 + 1 + 3 + 5 = 10
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function sumFibs(num) {
  let fibArr = [1, 1];
  while (fibArr[fibArr.length - 1] <= num) {
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]); 
  }
  console.log(fibArr.filter(numba => numba <= num && numba % 2 !== 0).reduce((x, y) => x + y));
} 
sumFibs(10);
// SUCCESS AND COMPLETE