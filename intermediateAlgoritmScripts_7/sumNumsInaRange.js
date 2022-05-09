function sumAll(arr) {
  const range = (min, max) => [...Array(max - min + 1).keys()].map(i => i + min); 
  // ^^ returns array of numbers in range
  const sum = range(Math.min(...arr), Math.max(...arr)).reduce((suma, num) => suma + num);
  console.log(sum);
}
sumAll([4, 1]);   // 10