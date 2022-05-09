function sumPrimes(num) {
  let primes = [2];
  for (let i = 2; i <= num; i++) {
    let tempArr = Array.from({length: i - 1}, (v, k) => k + 2);
    if (tempArr.length > 1) tempArr.pop();
    if (tempArr.every(numba => i % numba !== 0)) primes.push(i);
    //console.log(`${i}: ${tempArr}`);
  }
  console.log(primes.reduce((x, y) => x + y));
  //console.log(primes);
  //primes.forEach(e => console.log(e))
}

//sumPrimes(100);
sumPrimes(977);   // SHOULD RETURN 73156
sumPrimes(10); // 17
// COMPLETE AND SUCCESSFUL