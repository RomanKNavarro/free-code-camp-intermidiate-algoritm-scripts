function orbitalPeriod(arr) {
  let arrCopy = arr.slice();
  let earthGm = 398600.4418;
  let earthRadius = 6367.4447;
  for (let obj in arr) {
    let avAlt = arr[obj].avgAlt;
    let sma = Math.round((earthRadius + avAlt)) ** 3;
    arrCopy[obj]["orbitalPeriod"] = Math.round((2 * Math.PI) * Math.sqrt(sma/earthGm));
    delete arrCopy[obj].avgAlt;
  }
  console.log(arrCopy);
}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])
// -> [{name: "sputnik", orbitalPeriod: 86400}]
orbitalPeriod([{name: "iss", avgAlt: 413.6}, 
{name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
/* [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, 
{name: "moon", orbitalPeriod: 2377399}] */
// COMPLETE AND SUCCESSFUL