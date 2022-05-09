// missing alphabet letter
function fearNotLetter2(stringa) {
  let alphabet = String.fromCharCode(...Array(123).keys()).slice(97).split('');
  let alphScrap = alphabet.slice(alphabet.indexOf(stringa[0]), alphabet.indexOf(stringa[stringa.length - 1]))
  // ^ need to make last letter INclusive

  let newStringa = stringa.slice(0, stringa.length - 1); // shorter than alphScrap

  for (let i = 0; i < alphScrap.length; i++) {
    if (!newStringa.includes(alphScrap[i])) {
      console.log(alphScrap[i])
    }
  }
/* 
  console.log(newStringa);
  //console.log(stringa[stringa.length - 1]);
  console.log(alphScrap.join('')); */
} 
// THE ENTIRE ALPHABET

// missing alphabet letter
function fearNotLetter(stringa) {
  let alphabet = String.fromCharCode(...Array(123).keys()).slice(97).split(''); // STRING OF ENTIRE ALPHABET
  let alphScrap = alphabet.slice(alphabet.indexOf(stringa[0]), alphabet.indexOf(stringa[stringa.length - 1]))
  let newStringa = stringa.slice(0, stringa.length - 1); 
  for (let i = 0; i < alphScrap.length; i++) {
    if (!newStringa.includes(alphScrap[i])) {
      console.log(alphScrap[i])
    }
  }
} 

fearNotLetter("bcdf") // => return the string e.
fearNotLetter("abcdefghjklmno") // => i

// COMPLETE AND SUCCESSFUL