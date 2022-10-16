deneme = function (param1, param2) {
  if (param1 >= 40 && param1 <= 60 && param2 >= 40 && param2 <= 60) {
    if (param1 < param2) {
      return param2;
    }
    return param1;
  }
  return false;
};

console.log(deneme(55, 45));
console.log(deneme(54, 59));
console.log(deneme(5, 6));
console.log(deneme(71, 99));
