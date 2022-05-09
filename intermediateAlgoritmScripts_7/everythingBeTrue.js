// EVERYTHING TO BE TRUE
function truthCheck(arr, value) {
  console.log(arr.every(obj => !!obj[value]));
}
truthCheck([{"name": "Pete", "onBoat": true}, 
{"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat");  // false
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, 
{"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")            // true
// COMPLETE AND SUCCESSFUL