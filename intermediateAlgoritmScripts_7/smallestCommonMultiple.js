// SMALLEST COMMON MULTIPLE
// [1, 3] => 1, 2, 3 (the smallest common multiple these all have is 6)
// [5, 1] => 5, 4, 3, 2, 1 (their smallest common multiple is 60)
function smallestCommons(arr) {
  let multiple = 1;
  let scuba = Array.from({length: Math.max(...arr) - (Math.min(...arr)-1)}, (v, k) => k+Math.min(...arr)); // get range
  while (true) {
    if (scuba.every(num => multiple % num === 0)) {
      console.log(multiple);
      break;
    } else multiple += 1;
  }   
}
smallestCommons([1,5]);
// COMPLETE & SUCCESS 