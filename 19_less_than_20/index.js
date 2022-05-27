function less_than_20(n){
  return((Math.abs(100-n) <= 20) || (Math.abs(400-n) <= 20))
}

console.log(less_than_20(390));
console.log(less_than_20(90));
console.log(less_than_20(590));

