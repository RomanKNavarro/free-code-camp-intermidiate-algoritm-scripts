function translatePigLatin2(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let strList = str.split('');
  for (let i = 0; i < strList.length; i++) {
    if (vowels.includes(strList[0])) {
      return strList.join('') + 'way'
    }
    else if (vowels.includes(strList[i])) {
      //return strList.slice(0, i).join(''); // FIRST HALF, CORRECT
      //return strList.slice(i).join(''); // SECOND HALF, CORRECT
      return strList.slice(i).concat(strList.slice(0, i)).join('') + 'ay';
    } 
  }
  return strList.join('') + 'ay'; // for words with absolutely no vowels
}


function translatePigLatin(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[0])) {
      return str + 'way'
    }
    else if (vowels.includes(str[i])) {
      //return strList.slice(0, i).join(''); // FIRST HALF, CORRECT
      //return strList.slice(i).join(''); // SECOND HALF, CORRECT
      return str.slice(i).concat(str.slice(0, i)) + 'ay';
    } 
  }
  return str + 'ay'; // for words with absolutely no vowels
}

console.log(translatePigLatin("california")); // aliforniacay
console.log(translatePigLatin("schwartz")); // artzschway
console.log(translatePigLatin("rhythm")) // rythmay
console.log(translatePigLatin("algorithm")); // algoritmway -WORDS STARTING WITH VOWELS END WITH "WAY"'

