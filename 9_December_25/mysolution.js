const d = new Date(2022, 11, 26);
const today = new Date()
const diffTime = Math.abs(d-today)
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

console.log(d);
console.log(today);
console.log(diffDays);

