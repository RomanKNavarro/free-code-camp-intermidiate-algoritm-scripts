function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    console.log(str.replace(before, after.slice('')[0].toUpperCase() + after.slice(1)));
    //console.log(letNewAfter);
  }
  else if (after[0] === after[0].toUpperCase()) {
    console.log(str.replace(before, after.slice('')[0].toLowerCase() + after.slice(1)));
  } 
  
  else console.log(str.replace(before, after));
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("I think we should look up there", "up", "Down") // I think we should look down there
// COMPLETE