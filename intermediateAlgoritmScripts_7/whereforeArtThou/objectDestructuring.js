
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const scuba = {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST  .toda 
// ^^^ simply assigns new var name to each property in object 
let scuba2 = [...Object.values(scuba)]

console.log(scuba2);