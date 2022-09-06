deneme = function (param1, param2) {
  if (
    (param1 >= 40 && param1 <= 60 && param2 >= 40 && param2 <= 60) ||
    (param2 >= 70 && param2 <= 100 && param1 >= 70 && param1 <= 100)
  ) {
    return true;
  }
  return false;
};

console.log(deneme(55, 45));
console.log(deneme(654, 9845));
console.log(deneme(5, 6));
console.log(deneme(71, 99));
