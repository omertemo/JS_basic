deneme = function (param1, param2) {
  if ((param1 >= 50 && param1 <= 100) || (param2 >= 50 && param2 <= 100)) {
    return true;
  }
  return false;
};

console.log(deneme(55, 9845));
console.log(deneme(654, 9845));
console.log(deneme(5, 6));
console.log(deneme(101, 99));
