// USING MAP:
var myObject = { 'a': 1, 'b': 2, 'c': 3 };
Object.keys(myObject).map(function(key, index) {
  myObject[key] *= 2;
});
console.log(myObject);
// => { 'a': 2, 'b': 4, 'c': 6 }

// ALTERNATIVE USING FOR LOOP:
var myObject = { 'a': 1, 'b': 2, 'c': 3 };
for (var key in myObject) {
  if (myObject.hasOwnProperty(key)) {
    myObject[key] *= 2;
  }
}
console.log(myObject);
// { 'a': 2, 'b': 4, 'c': 6 }

// FROM STACKOVERFLOW. THIS DIRECTLY MUTATES THE GIVEN ARRAY