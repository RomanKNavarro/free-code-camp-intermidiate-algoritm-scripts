function pairElement(str) {
  let pairs = {'G': 'C', 'C': 'G', 'A': 'T', 'T': 'A'};
  let newArr = [];
  str.split('').map(letter => newArr.push([letter, pairs[letter]]));
  return newArr;
}
pairElement("GCG"); // [["G", "C"], ["C","G"], ["G", "C"]]